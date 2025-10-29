const express = require("express");
const router = express.Router();
const {
  addStudentFeeData,
  getFees,
  payFee,
  downloadReceipt,
} = require("../Controller/feeController");
router.post("/add", addStudentFeeData);
router.get("/:email", getFees);
router.put("/pay/:id", payFee);
router.get("/receipt/:id", downloadReceipt);

module.exports = router;
