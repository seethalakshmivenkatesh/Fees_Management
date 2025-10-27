const express = require("express");
const router = express.Router();
const {
  getFees,
  payFee,
  downloadReceipt,
} = require("../Controller/feeController");

router.get("/", getFees);
router.put("/pay/:id", payFee);
router.get("/receipt/:id", downloadReceipt);

module.exports = router;
