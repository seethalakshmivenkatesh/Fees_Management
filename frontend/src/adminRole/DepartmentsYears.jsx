import React, { useState } from "react";
import { Plus, Edit, Eye } from "lucide-react"; // ✅ Lucide React icons

const DepartmentsYears = () => {
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");

  const [departments, setDepartments] = useState([
    { id: 1, name: "Computer Science", years: 4 },
    { id: 2, name: "Information Technology", years: 4 },
  ]);

  const [showAddDeptModal, setShowAddDeptModal] = useState(false);
  const [showAddYearModal, setShowAddYearModal] = useState(false);
  const [newDeptName, setNewDeptName] = useState("");
  const [newYears, setNewYears] = useState(4);

  const handleAddDepartment = () => {
    if (newDeptName.trim() === "") return;
    setDepartments([
      ...departments,
      { id: Date.now(), name: newDeptName, years: newYears },
    ]);
    setNewDeptName("");
    setShowAddDeptModal(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
        🎓 Departments & Years
      </h1>

      {/* Selection Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          className="border border-gray-300 rounded-lg p-2 bg-white w-64"
          value={selectedInstitution}
          onChange={(e) => setSelectedInstitution(e.target.value)}
        >
          <option value="">Select Institution</option>
          <option value="sunrise">Sunrise University</option>
          <option value="greendale">Greendale Institute</option>
        </select>

        <select
          className="border border-gray-300 rounded-lg p-2 bg-white w-64"
          value={selectedCollege}
          onChange={(e) => setSelectedCollege(e.target.value)}
        >
          <option value="">Select College</option>
          <option value="eng">Engineering College</option>
          <option value="arts">Arts & Science College</option>
        </select>
      </div>

      {/* Departments Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Department Name</th>
              <th className="py-3 px-4 text-center">Years</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept) => (
              <tr
                key={dept.id}
                className="border-t hover:bg-gray-50 transition duration-150"
              >
                <td className="py-3 px-4">{dept.name}</td>
                <td className="py-3 px-4 text-center">{dept.years}</td>
                <td className="py-3 px-4 text-center space-x-3">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Eye size={18} />
                  </button>
                  <button className="text-green-600 hover:text-green-800">
                    <Edit size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
          onClick={() => setShowAddDeptModal(true)}
        >
          <Plus size={18} /> Add New Department
        </button>
        <button
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
          onClick={() => setShowAddYearModal(true)}
        >
          <Plus size={18} /> Add Year Level
        </button>
      </div>

      {/* Add Department Modal */}
      {showAddDeptModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              ➕ Add New Department
            </h2>
            <input
              type="text"
              placeholder="Department Name"
              className="border border-gray-300 rounded-lg p-2 w-full mb-3"
              value={newDeptName}
              onChange={(e) => setNewDeptName(e.target.value)}
            />
            <input
              type="number"
              min="1"
              max="6"
              placeholder="No. of Years"
              className="border border-gray-300 rounded-lg p-2 w-full mb-3"
              value={newYears}
              onChange={(e) => setNewYears(e.target.value)}
            />
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                onClick={() => setShowAddDeptModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                onClick={handleAddDepartment}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Year Level Modal */}
      {showAddYearModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              ➕ Add Year Level
            </h2>
            <p className="text-gray-600 mb-4">
              Add new year levels like 1st, 2nd, 3rd, or Final Year.
            </p>
            <input
              type="text"
              placeholder="Enter Year Name (e.g. 1st Year)"
              className="border border-gray-300 rounded-lg p-2 w-full mb-3"
            />
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                onClick={() => setShowAddYearModal(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentsYears;
