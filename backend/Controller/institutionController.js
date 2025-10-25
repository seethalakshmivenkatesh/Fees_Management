const Institution = require("../Models/Institution");

// Get all institutions
const getInstitutions = async (req, res) => {
  try {
    const institutions = await Institution.find({}, { name: 1 });
    res.json(institutions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get colleges by institution ID
const getCollegesByInstitution = async (req, res) => {
  try {
    const institution = await Institution.findById(req.params.id);
    if (!institution)
      return res.status(404).json({ message: "Institution not found" });
    res.json(institution.colleges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getInstitutions, getCollegesByInstitution };
