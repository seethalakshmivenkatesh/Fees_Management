const express = require("express");
const {
  getInstitutions,
  getCollegesByInstitution,
} = require("../Controller/institutionController");

const router = express.Router();

router.get("/", getInstitutions);
router.get("/:id/colleges", getCollegesByInstitution);

module.exports = router;
