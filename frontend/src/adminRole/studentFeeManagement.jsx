import React, { useState } from "react";

const StudentsFeesManagement = () => {
  // Dropdown states
  const [institution, setInstitution] = useState("");
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [search, setSearch] = useState("");

  // Static data (replace with backend later)
  const institutions = ["Sunrise University", "Galaxy University"];
  const colleges = {
    "Sunrise University": [
      "Engineering College",
      "Pharmacy College",
      "Nursing College",
    ],
    "Galaxy University": ["Science College", "Arts College"],
  };
  const departments = {
    "Engineering College": ["CSE", "IT", "ECE", "MECH"],
    "Pharmacy College": ["B.Pharm", "M.Pharm"],
    "Nursing College": ["B.Sc Nursing", "M.Sc Nursing"],
  };
  const years = ["1st Year", "2nd Year", "3rd Year", "Final Year"];

  // Sample student data
  const students = [
    {
      roll: "21CS001",
      name: "Anjali Devi",
      email: "anjali@edu.com",
      paid: 40000,
      pending: 10000,
    },
    {
      roll: "21CS002",
      name: "Rajesh K.",
      email: "rajesh@edu.com",
      paid: 50000,
      pending: 0,
    },
  ];

  // Filter logic
  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.roll.toLowerCase().includes(search.toLowerCase())
  );

  // Fee Summary
  const totalPaid = students.reduce((sum, s) => sum + s.paid, 0);
  const totalPending = students.reduce((sum, s) => sum + s.pending, 0);
  const totalAmount = totalPaid + totalPending;
  const paidPercent = Math.round((totalPaid / totalAmount) * 100) || 0;
  const pendingPercent = 100 - paidPercent;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">👩‍🎓 Students & Fees Management</h2>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <select
          className="border rounded px-3 py-2"
          value={institution}
          onChange={(e) => {
            setInstitution(e.target.value);
            setCollege("");
            setDepartment("");
            setYear("");
          }}
        >
          <option value="">Select Institution</option>
          {institutions.map((inst) => (
            <option key={inst} value={inst}>
              {inst}
            </option>
          ))}
        </select>

        {institution && (
          <select
            className="border rounded px-3 py-2"
            value={college}
            onChange={(e) => {
              setCollege(e.target.value);
              setDepartment("");
              setYear("");
            }}
          >
            <option value="">Select College</option>
            {colleges[institution]?.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
        )}

        {college && (
          <select
            className="border rounded px-3 py-2"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              setYear("");
            }}
          >
            <option value="">Select Department</option>
            {departments[college]?.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        )}

        {department && (
          <select
            className="border rounded px-3 py-2"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Load Data Button */}
      <button className="mb-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Load Student Data
      </button>

      {/* Search */}
      <div className="mb-4 flex items-center gap-3">
        <input
          type="text"
          placeholder="🔍 Search by Name or Roll No"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-full md:w-1/3"
        />
      </div>

      {/* Student Table */}
      <div className="overflow-x-auto border rounded-md bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border">Roll No</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border text-right">Paid</th>
              <th className="p-3 border text-right">Pending</th>
              <th className="p-3 border text-right">Total</th>
              <th className="p-3 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((s) => (
              <tr key={s.roll} className="hover:bg-gray-50">
                <td className="p-3 border">{s.roll}</td>
                <td className="p-3 border">{s.name}</td>
                <td className="p-3 border">{s.email}</td>
                <td className="p-3 border text-green-600 text-right">
                  ₹{s.paid.toLocaleString()}
                </td>
                <td className="p-3 border text-red-600 text-right">
                  ₹{s.pending.toLocaleString()}
                </td>
                <td className="p-3 border text-right">
                  ₹{(s.paid + s.pending).toLocaleString()}
                </td>
                <td className="p-3 border text-center space-x-2">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredStudents.length === 0 && (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bulk Upload & Reports */}
      <div className="mt-6 flex flex-wrap gap-4">
        <div className="flex-1 min-w-[250px]">
          <h3 className="font-semibold mb-2">📂 Bulk Upload</h3>
          <div className="space-y-2">
            <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
              Upload Student Data (Excel/CSV)
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
              Upload Fee Details (Excel/CSV)
            </button>
          </div>
        </div>

        <div className="flex-1 min-w-[250px]">
          <h3 className="font-semibold mb-2">📤 Reports</h3>
          <div className="space-y-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Download Student List (Excel)
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Download Fee Summary (PDF)
            </button>
          </div>
        </div>

        <div className="flex-1 min-w-[250px]">
          <h3 className="font-semibold mb-2">📨 Actions</h3>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Send Fee Reminder to Pending Students
          </button>
        </div>
      </div>

      {/* Fee Summary Chart */}
      <div className="mt-8 p-4 bg-white rounded-md shadow-md w-full md:w-1/2">
        <h3 className="font-semibold mb-4">📊 Fee Summary</h3>
        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
          <div
            className="bg-green-500 h-6 text-xs text-white text-center"
            style={{ width: `${paidPercent}%` }}
          >
            Paid {paidPercent}%
          </div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Paid: ₹{totalPaid.toLocaleString()}</span>
          <span>Pending: ₹{totalPending.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default StudentsFeesManagement;
