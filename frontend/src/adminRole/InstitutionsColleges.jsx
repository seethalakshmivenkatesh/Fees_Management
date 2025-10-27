import React, { useState } from "react";
import background from "../assets/Images/background.png";

const InstitutionsColleges = () => {
  // Sample frontend-only data (replace with backend fetch later)
  const [institutions, setInstitutions] = useState([
    {
      id: 1,
      name: "Sunrise University",
      colleges: [
        { id: 1, name: "Engineering College", departments: 4, students: 1200 },
        { id: 2, name: "Nursing College", departments: 2, students: 500 },
      ],
    },
    {
      id: 2,
      name: "Green Valley University",
      colleges: [
        { id: 3, name: "Pharmacy College", departments: 3, students: 400 },
      ],
    },
  ]);

  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [showAddCollege, setShowAddCollege] = useState(false);
  const [newCollege, setNewCollege] = useState({
    name: "",
    departments: 0,
    students: 0,
  });

  // Helper to find selected institution object
  const selectedData = institutions.find(
    (inst) => inst.id === Number(selectedInstitution)
  );

  // Handle add college
  const handleAddCollege = () => {
    if (!newCollege.name) return alert("Enter college name");

    const updatedInstitutions = institutions.map((inst) => {
      if (inst.id === Number(selectedInstitution)) {
        return {
          ...inst,
          colleges: [
            ...inst.colleges,
            {
              id: Date.now(),
              ...newCollege,
            },
          ],
        };
      }
      return inst;
    });

    setInstitutions(updatedInstitutions);
    setShowAddCollege(false);
    setNewCollege({ name: "", departments: 0, students: 0 });
  };

  // Handle delete college
  const handleDeleteCollege = (collegeId) => {
    const updatedInstitutions = institutions.map((inst) => {
      if (inst.id === Number(selectedInstitution)) {
        return {
          ...inst,
          colleges: inst.colleges.filter((c) => c.id !== collegeId),
        };
      }
      return inst;
    });
    setInstitutions(updatedInstitutions);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Content Area - placed on top of image */}
      <div className="relative flex-1 p-8 z-10">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          🏛️ Institution & College Management
        </h1>

        {/* Institution Selector */}
        <div className="flex items-center gap-4 mb-6">
          <label className="text-gray-700 font-medium">Institution:</label>
          <select
            className="p-2 border rounded-md w-64"
            value={selectedInstitution}
            onChange={(e) => setSelectedInstitution(e.target.value)}
          >
            <option value="">-- Select Institution --</option>
            {institutions.map((inst) => (
              <option key={inst.id} value={inst.id}>
                {inst.name}
              </option>
            ))}
          </select>

          {/* Add Institution button (future backend modal) */}
          <button className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition">
            ➕ Add Institution
          </button>
        </div>

        {/* Show Colleges under selected Institution */}
        {selectedInstitution && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Colleges under “{selectedData?.name}”
            </h2>

            {/* Colleges Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-left">
                    <th className="p-3 border">College Name</th>
                    <th className="p-3 border text-center">Departments</th>
                    <th className="p-3 border text-center">Students</th>
                    <th className="p-3 border text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedData?.colleges.length > 0 ? (
                    selectedData.colleges.map((college) => (
                      <tr
                        key={college.id}
                        className="hover:bg-gray-50 transition text-gray-700"
                      >
                        <td className="p-3 border">{college.name}</td>
                        <td className="p-3 border text-center">
                          {college.departments}
                        </td>
                        <td className="p-3 border text-center">
                          {college.students}
                        </td>
                        <td className="p-3 border text-center space-x-2">
                          <button className="text-blue-600 hover:underline">
                            View
                          </button>
                          <button className="text-green-600 hover:underline">
                            Edit
                          </button>
                          <button
                            className="text-red-600 hover:underline"
                            onClick={() => handleDeleteCollege(college.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        className="p-3 border text-center text-gray-500"
                        colSpan="4"
                      >
                        No colleges added yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => setShowAddCollege(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                ➕ Add College
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                🗑️ Delete College
              </button>
            </div>
          </div>
        )}

        {/* Add College Modal */}
        {showAddCollege && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Add New College</h2>

              <label className="block mb-2 text-gray-700">College Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded-md mb-3"
                value={newCollege.name}
                onChange={(e) =>
                  setNewCollege({ ...newCollege, name: e.target.value })
                }
                placeholder="Enter college name"
              />

              <label className="block mb-2 text-gray-700">
                Departments Count
              </label>
              <input
                type="number"
                className="w-full border p-2 rounded-md mb-3"
                value={newCollege.departments}
                onChange={(e) =>
                  setNewCollege({ ...newCollege, departments: e.target.value })
                }
              />

              <label className="block mb-2 text-gray-700">Students Count</label>
              <input
                type="number"
                className="w-full border p-2 rounded-md mb-3"
                value={newCollege.students}
                onChange={(e) =>
                  setNewCollege({ ...newCollege, students: e.target.value })
                }
              />

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setShowAddCollege(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCollege}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstitutionsColleges;
