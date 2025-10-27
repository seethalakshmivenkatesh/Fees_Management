const Fee = require("../Models/Fee");

// Get all fees
const getFees = async (req, res) => {
  try {
    const fees = await Fee.find();
    res.json(fees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Pay fee
const payFee = async (req, res) => {
  try {
    const fee = await Fee.findById(req.params.id);
    if (!fee) return res.status(404).json({ message: "Fee not found" });

    fee.status = "Paid";
    await fee.save();

    res.json({ message: "Payment successful", fee });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Download receipt
const downloadReceipt = async (req, res) => {
  try {
    const fee = await Fee.findById(req.params.id);
    if (!fee) return res.status(404).json({ message: "Fee not found" });

    res.json({ message: `Receipt for ${fee.feeType}`, fee });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getFees, payFee, downloadReceipt };
