const mongoose = require("mongoose");

const institutionSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  colleges: [{ type: String, required: true }],
});

module.exports = mongoose.model("institutions", institutionSchema);
