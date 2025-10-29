import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowDownTrayIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PayFeesPage = () => {
  const [fees, setFees] = useState([]);
  const [filteredFees, setFilteredFees] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedFeeType, setSelectedFeeType] = useState("");

  const studentEmail = "tharasrim2408@gmail.com";

  // ✅ Flatten both term fees and semester fees
  const flattenFees = (student) => {
    if (!student || !Array.isArray(student.semesters)) return [];

    const flat = [];
    student.semesters.forEach((sem) => {
      // term-level fees
      sem.terms?.forEach((term) => {
        term.fees?.forEach((fee) => {
          flat.push({
            _id: fee._id,
            studentEmail: student.email,
            semester: `Semester ${sem.semester}`,
            term: term.term,
            feeType: fee.type,
            amount: fee.amount,
            status: fee.status,
          });
        });
      });

      // semester-level fees
      sem.semesterFees?.forEach((fee) => {
        flat.push({
          _id: fee._id,
          studentEmail: student.email,
          semester: `Semester ${sem.semester}`,
          term: "Semester Fee",
          feeType: fee.type,
          amount: fee.amount,
          status: fee.status,
        });
      });
    });
    return flat;
  };

  // ✅ Fetch from backend
  useEffect(() => {
    const fetchFees = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/fees/${encodeURIComponent(studentEmail)}`
        );
        const studentData = res.data;
        const flattened = flattenFees(studentData);
        setFees(flattened);
        setFilteredFees(flattened);
      } catch (error) {
        console.error("Error fetching fees:", error);
        toast.error("Failed to fetch data from backend.");
      }
    };

    fetchFees();
  }, []);

  // ✅ Filters
  useEffect(() => {
    let filtered = fees;
    if (selectedSemester)
      filtered = filtered.filter((f) => f.semester === selectedSemester);
    if (selectedTerm)
      filtered = filtered.filter((f) => f.term === selectedTerm);
    if (selectedFeeType)
      filtered = filtered.filter((f) => f.feeType === selectedFeeType);
    setFilteredFees(filtered);
  }, [selectedSemester, selectedTerm, selectedFeeType, fees]);

  // ✅ Payment
  const handlePay = async (feeId, amount) => {
    try {
      await axios.put(`http://localhost:5000/api/fees/pay/${feeId}`, {
        amount,
        studentEmail,
      });
      toast.success("Payment successful!");
      setFees((prev) =>
        prev.map((f) => (f._id === feeId ? { ...f, status: "Paid" } : f))
      );
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error("Error updating payment.");
    }
  };

  const handleDownloadReceipt = async (feeId) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/fees/receipt/${feeId}`,
        { responseType: "blob" }
      );

      // Create blob URL to trigger download
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `receipt-${feeId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      toast.success("Receipt downloaded!");
    } catch (error) {
      toast.error("Error downloading receipt");
    }
  };

  // ✅ Summary
  const totalFees = filteredFees.reduce((a, f) => a + (f.amount || 0), 0);
  const pendingFees = filteredFees
    .filter((f) => f.status === "Pending")
    .reduce((a, f) => a + (f.amount || 0), 0);
  const paidFees = filteredFees
    .filter((f) => f.status === "Paid")
    .reduce((a, f) => a + (f.amount || 0), 0);

  const semesters = [...new Set(fees.map((f) => f.semester))];
  const terms = [...new Set(fees.map((f) => f.term))];
  const feeTypes = [...new Set(fees.map((f) => f.feeType))];

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-blue-50 to-blue-100">
      <h2 className="text-3xl font-bold text-[#0D1B2A] mb-8 text-center">
        Student Fee Dashboard
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <select
          className="border rounded-xl p-2"
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          <option value="">All Semesters</option>
          {semesters.map((s, i) => (
            <option key={i}>{s}</option>
          ))}
        </select>

        <select
          className="border rounded-xl p-2"
          value={selectedTerm}
          onChange={(e) => setSelectedTerm(e.target.value)}
        >
          <option value="">All Terms</option>
          {terms.map((t, i) => (
            <option key={i}>{t}</option>
          ))}
        </select>

        <select
          className="border rounded-xl p-2"
          value={selectedFeeType}
          onChange={(e) => setSelectedFeeType(e.target.value)}
        >
          <option value="">All Fee Types</option>
          {feeTypes.map((f, i) => (
            <option key={i}>{f}</option>
          ))}
        </select>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <Card
          title="Total Fees"
          icon={<CurrencyRupeeIcon className="w-6 h-6 text-blue-500" />}
          value={totalFees}
        />
        <Card
          title="Pending Fees"
          icon={<ExclamationCircleIcon className="w-6 h-6 text-yellow-500" />}
          value={pendingFees}
          color="text-yellow-700"
        />
        <Card
          title="Paid Fees"
          icon={<CheckCircleIcon className="w-6 h-6 text-green-500" />}
          value={paidFees}
          color="text-green-700"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
        <table className="min-w-full text-sm sm:text-base">
          <thead className="bg-blue-200 text-gray-800">
            <tr>
              <th className="py-3 px-4 text-left">Semester</th>
              <th className="py-3 px-4 text-left">Term</th>
              <th className="py-3 px-4 text-left">Fee Type</th>
              <th className="py-3 px-4 text-right">Amount (₹)</th>
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredFees.map((fee) => (
              <tr key={fee._id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{fee.semester}</td>
                <td className="py-3 px-4">{fee.term}</td>
                <td className="py-3 px-4">{fee.feeType}</td>
                <td className="py-3 px-4 text-right font-semibold">
                  {fee.amount}
                </td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                      fee.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {fee.status === "Paid" ? (
                      <CheckCircleIcon className="w-4 h-4" />
                    ) : (
                      <ExclamationCircleIcon className="w-4 h-4" />
                    )}
                    {fee.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  {fee.status === "Paid" ? (
                    <button
                      onClick={() => handleDownloadReceipt(fee._id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-xl shadow hover:bg-blue-600"
                    >
                      <ArrowDownTrayIcon className="w-4 h-4 inline" /> Receipt
                    </button>
                  ) : (
                    <button
                      onClick={() => handlePay(fee._id, fee.amount)}
                      className="bg-green-500 text-white px-3 py-1 rounded-xl shadow hover:bg-green-600"
                    >
                      Pay Now
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ToastContainer theme="colored" position="top-center" autoClose={3000} />
    </div>
  );
};

const Card = ({ title, icon, value, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
    <div className="flex items-center gap-3">
      {icon}
      <p className="text-gray-500 font-semibold">{title}</p>
    </div>
    <p className={`text-2xl font-bold mt-3 ${color || "text-[#0D1B2A]"}`}>
      ₹{value}
    </p>
  </div>
);

export default PayFeesPage;
