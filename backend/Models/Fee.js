const mongoose = require("mongoose");

// Fee subdocument schema
const feeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Paid", "Pending", "Partial"],
    default: "Pending",
  },
  paidAmount: { type: Number, default: 0 },
  paidDate: Date,
});

const termSchema = new mongoose.Schema({
  term: { type: String, required: true },
  fees: [feeSchema],
});

const semesterSchema = new mongoose.Schema({
  semester: { type: Number, required: true },
  terms: [termSchema],
  semesterFees: [feeSchema],
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  semesters: [semesterSchema],
});

module.exports = mongoose.model("Fee", studentSchema);
