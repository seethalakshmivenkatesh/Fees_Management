const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema({
  semester: { type: String, required: true },
  feeType: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["Pending", "Paid"], default: "Pending" },
});

const Fee = mongoose.model("Fee", feeSchema);
module.exports = Fee;
