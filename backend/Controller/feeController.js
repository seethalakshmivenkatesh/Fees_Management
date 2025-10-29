import Fee from "../models/Fee.js";
import mongoose from "mongoose";
import { sendEmail } from "../utils/sendEmail.js";
import PDFDocument from "pdfkit";
import path from "path";
import fs from "fs";
export const addStudentFeeData = async (req, res) => {
  try {
    const newStudent = new Fee(req.body);
    await newStudent.save();
    res.status(201).json({
      message: "Student fee data added successfully!",
      student: newStudent,
    });
  } catch (error) {
    console.error("Error inserting student data:", error);
    res
      .status(500)
      .json({ message: "Failed to insert student data", error: error.message });
  }
};

export const getFees = async (req, res) => {
  try {
    const { email } = req.params;
    const student = await Fee.findOne({ email }).lean();
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const payFee = async (req, res) => {
  try {
    const { id } = req.params; // feeId
    const { amount, studentEmail } = req.body;

    const feeId = new mongoose.Types.ObjectId(id);
    const now = new Date();

    // 🔍 Step 1: Find the correct student first
    const student = await Fee.findOne({ email: studentEmail });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // 🔍 Step 2: Try to update inside terms.fees (nested)
    let result = await Fee.updateOne(
      {
        email: studentEmail,
        "semesters.terms.fees._id": feeId,
      },
      {
        $set: {
          "semesters.$[sem].terms.$[term].fees.$[fee].status": "Paid",
          "semesters.$[sem].terms.$[term].fees.$[fee].paidAmount": amount,
          "semesters.$[sem].terms.$[term].fees.$[fee].paidDate": now,
        },
      },
      {
        arrayFilters: [
          { "sem.terms.fees._id": feeId },
          { "term.fees._id": feeId },
          { "fee._id": feeId },
        ],
      }
    );

    // 🔍 Step 3: If not found in terms, try in semesterFees
    if (result.modifiedCount === 0) {
      result = await Fee.updateOne(
        {
          email: studentEmail,
          "semesters.semesterFees._id": feeId,
        },
        {
          $set: {
            "semesters.$[sem].semesterFees.$[fee].status": "Paid",
            "semesters.$[sem].semesterFees.$[fee].paidAmount": amount,
            "semesters.$[sem].semesterFees.$[fee].paidDate": now,
          },
        },
        {
          arrayFilters: [
            { "sem.semesterFees._id": feeId },
            { "fee._id": feeId },
          ],
        }
      );
    }

    if (result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "Fee not found for this student" });
    }

    console.log(
      "✅ Fee updated successfully for:",
      studentEmail,
      "→",
      feeId.toString()
    );

    // 🔔 Send confirmation email
    await sendEmail(
      studentEmail,
      "Fee Payment Confirmation 🎓",
      `<h2>Payment Successful 🎉</h2>
       <p>Dear ${student.name},</p>
       <p>Your payment of ₹${amount} has been successfully received.</p>
       <p><b>Status:</b> Paid</p>`
    );

    res.json({ message: "Payment successful" });
  } catch (err) {
    console.error("❌ Payment update error:", err);
    res.status(500).json({ message: err.message });
  }
};

export const downloadReceipt = async (req, res) => {
  try {
    const { id } = req.params;

    // 1️⃣ Find the student by fee ID (nested in semesters or terms)
    const student = await Fee.findOne({
      $or: [
        { "semesters.terms.fees._id": id },
        { "semesters.semesterFees._id": id },
      ],
    });

    if (!student) {
      return res.status(404).json({ message: "Fee not found" });
    }

    // 2️⃣ Extract the exact fee
    let foundFee = null;

    student.semesters.forEach((sem) => {
      sem.terms?.forEach((term) => {
        term.fees?.forEach((fee) => {
          if (fee._id.toString() === id) {
            foundFee = {
              ...fee.toObject(),
              semester: sem.semester,
              term: term.term,
            };
          }
        });
      });

      sem.semesterFees?.forEach((fee) => {
        if (fee._id.toString() === id) {
          foundFee = {
            ...fee.toObject(),
            semester: sem.semester,
            term: "Semester Fee",
          };
        }
      });
    });

    if (!foundFee) {
      return res.status(404).json({ message: "Fee not found" });
    }

    // 3️⃣ Create a PDF in memory
    const doc = new PDFDocument({ margin: 50 });
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=Fee_Receipt_${id}.pdf`
    );

    doc.pipe(res);

    // 🎓 HEADER SECTION
    doc
      .fontSize(22)
      .font("Helvetica-Bold")
      .fillColor("#1E3A8A")
      .text("SUNRISE UNIVERSITY", { align: "center" });

    doc
      .fontSize(14)
      .fillColor("black")
      .text("Fee Management System", { align: "center" });
    doc.moveDown(0.5);

    // Draw line
    doc
      .moveTo(50, doc.y)
      .lineTo(550, doc.y)
      .strokeColor("#1E3A8A")
      .lineWidth(2)
      .stroke();
    doc.moveDown(1.5);

    // 🧾 Receipt title
    doc
      .fontSize(18)
      .font("Helvetica-Bold")
      .fillColor("#111")
      .text("FEE PAYMENT RECEIPT", { align: "center" });

    doc.moveDown(1);

    // 📄 Receipt Details
    const receiptNo = "REC" + Date.now().toString().slice(-6);
    const paidDate = foundFee.paidDate
      ? new Date(foundFee.paidDate).toLocaleDateString()
      : "-";

    doc
      .fontSize(12)
      .font("Helvetica")
      .fillColor("#000")
      .text(`Receipt No: ${receiptNo}`, 50)
      .text(`Date: ${paidDate}`, 400, doc.y - 15);
    doc.moveDown(1);

    // 🧍 Student Info Box
    doc.rect(50, doc.y, 500, 70).strokeColor("#1E3A8A").lineWidth(1).stroke();

    doc.moveDown(0.5).fontSize(12).fillColor("#000");
    doc.text(`Student Name: ${student.name}`, 60, doc.y - 50);
    doc.text(`Email: ${student.email}`, 60);
    doc.text(`Semester: ${foundFee.semester}`, 60);
    doc.text(`Term: ${foundFee.term}`, 300, doc.y - 35);

    doc.moveDown(3);

    // 💰 Fee Details Table
    const tableTop = doc.y;
    const columnWidths = [200, 100, 100, 100];

    // Table Header
    doc
      .font("Helvetica-Bold")
      .fontSize(12)
      .fillColor("#1E3A8A")
      .text("Fee Type", 60, tableTop)
      .text("Amount (₹)", 260, tableTop)
      .text("Paid (₹)", 360, tableTop)
      .text("Status", 460, tableTop);

    doc
      .moveTo(50, tableTop + 15)
      .lineTo(550, tableTop + 15)
      .strokeColor("#1E3A8A")
      .stroke();

    // Table Row
    const y = tableTop + 25;
    doc
      .font("Helvetica")
      .fillColor("#000")
      .text(foundFee.type, 60, y)
      .text(foundFee.amount.toString(), 260, y)
      .text(foundFee.paidAmount?.toString() || "0", 360, y)
      .text(foundFee.status, 460, y);

    doc.moveDown(4);

    // ✅ Total Summary
    doc
      .font("Helvetica-Bold")
      .fontSize(13)
      .text("Total Amount:", 340)
      .text(`₹${foundFee.amount}`, 460);
    doc
      .font("Helvetica-Bold")
      .text("Paid Amount:", 340)
      .text(`₹${foundFee.paidAmount || foundFee.amount}`, 460);
    doc
      .font("Helvetica-Bold")
      .text("Balance:", 340)
      .text(
        `₹${foundFee.amount - (foundFee.paidAmount || foundFee.amount)}`,
        460
      );

    doc.moveDown(2);

    // 🖋️ Signature area
    doc.moveDown(2);
    doc.text("____________________", 400);
    doc.text("Authorized Signature", 400, doc.y - 10);

    // Footer
    doc.moveDown(2);
    doc
      .fontSize(10)
      .fillColor("#555")
      .text("This is a computer-generated receipt. No signature is required.", {
        align: "center",
      });
    doc.moveDown(0.3);
    doc
      .fontSize(10)
      .fillColor("#888")
      .text("Thank you for your payment!", { align: "center" });

    doc.end();
  } catch (err) {
    console.error("Receipt generation error:", err);
    res.status(500).json({ message: err.message });
  }
};
