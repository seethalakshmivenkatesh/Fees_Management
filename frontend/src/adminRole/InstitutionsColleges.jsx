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

  const selectedData = institutions.find(
    (inst) => inst.id === Number(selectedInstitution)
  );

  const handleAddCollege = () => {
    if (!newCollege.name) return alert("Enter college name");

    const updatedInstitutions = institutions.map((inst) =>
      inst.id === Number(selectedInstitution)
        ? {
            ...inst,
            colleges: [...inst.colleges, { id: Date.now(), ...newCollege }],
          }
        : inst
    );

    setInstitutions(updatedInstitutions);
    setShowAddCollege(false);
    setNewCollege({ name: "", departments: 0, students: 0 });
  };

  const handleDeleteCollege = (collegeId) => {
    const updatedInstitutions = institutions.map((inst) =>
      inst.id === Number(selectedInstitution)
        ? {
            ...inst,
            colleges: inst.colleges.filter((c) => c.id !== collegeId),
          }
        : inst
    );
    setInstitutions(updatedInstitutions);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Content Container */}
      <div className="relative flex-1 bg-white/80 backdrop-blur-md p-8 m-8 rounded-2xl shadow-lg">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          🏛️ Institution & College Management
        </h1>

        {/* Institution Selection Section */}
        <div className="bg-gray-50 border rounded-xl p-5 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Select Institution
          </h2>
          <div className="flex items-center gap-4">
            <select
              className="p-3 border rounded-md w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
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

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              ➕ Add Institution
            </button>
          </div>
        </div>

        {/* Colleges List Section */}
        {selectedInstitution && (
          <div className="bg-white rounded-xl shadow-md p-6 border">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Colleges Under “{selectedData?.name}”
            </h2>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-left border-b">
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
                        <td className="p-3 border text-center space-x-3">
                          <button className="text-blue-600 hover:underline">
                            View
                          </button>
                          <button className="text-green-600 hover:underline">
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteCollege(college.id)}
                            className="text-red-600 hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center text-gray-500 p-4 border"
                      >
                        No colleges added yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => setShowAddCollege(true)}
                className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
              >
                ➕ Add College
              </button>
              <button className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition">
                🗑️ Delete College
              </button>
            </div>
          </div>
        )}

        {/* Add College Modal */}
        {showAddCollege && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl w-96 shadow-lg border">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                ➕ Add New College
              </h2>

              <label className="block mb-2 text-gray-700 font-medium">
                College Name
              </label>
              <input
                type="text"
                className="w-full border p-2 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={newCollege.name}
                onChange={(e) =>
                  setNewCollege({ ...newCollege, name: e.target.value })
                }
                placeholder="Enter college name"
              />

              <label className="block mb-2 text-gray-700 font-medium">
                Departments Count
              </label>
              <input
                type="number"
                className="w-full border p-2 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={newCollege.departments}
                onChange={(e) =>
                  setNewCollege({
                    ...newCollege,
                    departments: e.target.value,
                  })
                }
              />

              <label className="block mb-2 text-gray-700 font-medium">
                Students Count
              </label>
              <input
                type="number"
                className="w-full border p-2 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={newCollege.students}
                onChange={(e) =>
                  setNewCollege({
                    ...newCollege,
                    students: e.target.value,
                  })
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
