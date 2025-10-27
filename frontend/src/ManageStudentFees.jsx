// import React, { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const ManageStudentFees = () => {
//   const [selectedInstitution, setSelectedInstitution] = useState("");
//   const [selectedCollege, setSelectedCollege] = useState("");
//   const [selectedDepartment, setSelectedDepartment] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   const institutions = ["ABC Foundation", "Sunrise University"];
//   const colleges = {
//     "ABC Foundation": ["Engineering College", "Nursing College"],
//     "Sunrise University": ["Medical College", "Commerce College"],
//   };

//   const departments = ["Computer Science", "Information Technology", "ECE"];
//   const years = ["First Year", "Second Year", "Third Year", "Final Year"];

//   const students = [
//     {
//       roll: "21CS001",
//       name: "Anjali Devi",
//       email: "anjali@edu.com",
//       paid: 40000,
//       pending: 10000,
//       total: 50000,
//     },
//     {
//       roll: "21CS002",
//       name: "Rajesh K.",
//       email: "rajesh@edu.com",
//       paid: 50000,
//       pending: 0,
//       total: 50000,
//     },
//   ];

//   const filteredStudents = students.filter(
//     (s) =>
//       s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       s.roll.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const feeSummaryData = [
//     { name: "Paid", value: 80 },
//     { name: "Pending", value: 20 },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">
//         Manage Student & Fee Details
//       </h1>

//       {/* Selection Steps */}
//       <div className="bg-white p-5 shadow-md rounded-lg mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div>
//           <label className="text-sm font-semibold text-gray-600">
//             Step 1: Select Institution
//           </label>
//           <select
//             value={selectedInstitution}
//             onChange={(e) => {
//               setSelectedInstitution(e.target.value);
//               setSelectedCollege("");
//               setSelectedDepartment("");
//               setSelectedYear("");
//             }}
//             className="w-full border rounded-lg p-2 mt-1"
//           >
//             <option value="">-- Choose Institution --</option>
//             {institutions.map((inst, idx) => (
//               <option key={idx} value={inst}>
//                 {inst}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="text-sm font-semibold text-gray-600">
//             Step 2: Select College
//           </label>
//           <select
//             value={selectedCollege}
//             onChange={(e) => {
//               setSelectedCollege(e.target.value);
//               setSelectedDepartment("");
//               setSelectedYear("");
//             }}
//             disabled={!selectedInstitution}
//             className="w-full border rounded-lg p-2 mt-1"
//           >
//             <option value="">-- Choose College --</option>
//             {selectedInstitution &&
//               colleges[selectedInstitution]?.map((college, idx) => (
//                 <option key={idx} value={college}>
//                   {college}
//                 </option>
//               ))}
//           </select>
//         </div>

//         <div>
//           <label className="text-sm font-semibold text-gray-600">
//             Step 3: Select Department
//           </label>
//           <select
//             value={selectedDepartment}
//             onChange={(e) => {
//               setSelectedDepartment(e.target.value);
//               setSelectedYear("");
//             }}
//             disabled={!selectedCollege}
//             className="w-full border rounded-lg p-2 mt-1"
//           >
//             <option value="">-- Choose Department --</option>
//             {departments.map((d, idx) => (
//               <option key={idx} value={d}>
//                 {d}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="text-sm font-semibold text-gray-600">
//             Step 4: Select Year
//           </label>
//           <select
//             value={selectedYear}
//             onChange={(e) => setSelectedYear(e.target.value)}
//             disabled={!selectedDepartment}
//             className="w-full border rounded-lg p-2 mt-1"
//           >
//             <option value="">-- Choose Year --</option>
//             {years.map((y, idx) => (
//               <option key={idx} value={y}>
//                 {y}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Load Data Button */}
//       <button className="mb-6 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
//         Load Student Data
//       </button>

//       {/* Search */}
//       <div className="flex justify-end mb-4">
//         <input
//           type="text"
//           placeholder="🔍 Search by Name / Roll No"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border p-2 rounded-lg w-72"
//         />
//       </div>

//       {/* Student Table */}
//       <div className="bg-white rounded-lg shadow-md overflow-x-auto mb-6">
//         <table className="min-w-full border-collapse">
//           <thead className="bg-blue-100 text-gray-700">
//             <tr>
//               <th className="p-3 text-left">Roll No</th>
//               <th className="p-3 text-left">Name</th>
//               <th className="p-3 text-left">Email</th>
//               <th className="p-3 text-center">Paid</th>
//               <th className="p-3 text-center">Pending</th>
//               <th className="p-3 text-center">Total</th>
//               <th className="p-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredStudents.map((s, index) => (
//               <tr key={index} className="border-b hover:bg-gray-50">
//                 <td className="p-3">{s.roll}</td>
//                 <td className="p-3">{s.name}</td>
//                 <td className="p-3">{s.email}</td>
//                 <td className="p-3 text-center text-green-600 font-semibold">
//                   ₹{s.paid.toLocaleString()}
//                 </td>
//                 <td className="p-3 text-center text-red-600 font-semibold">
//                   ₹{s.pending.toLocaleString()}
//                 </td>
//                 <td className="p-3 text-center font-semibold">
//                   ₹{s.total.toLocaleString()}
//                 </td>
//                 <td className="p-3 text-center space-x-2">
//                   <button className="px-3 py-1 text-sm bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
//                     Edit
//                   </button>
//                   <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Bulk Upload & Reports */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         {/* Bulk Upload */}
//         <div className="bg-white p-5 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-3">📂 Bulk Upload</h2>
//           <button className="block w-full mb-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//             Upload Student Data (Excel/CSV)
//           </button>
//           <button className="block w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
//             Upload Fee Details (Excel/CSV)
//           </button>
//         </div>

//         {/* Reports */}
//         <div className="bg-white p-5 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-3">📤 Reports</h2>
//           <button className="block w-full mb-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
//             Download Student List (Excel)
//           </button>
//           <button className="block w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
//             Download Fee Summary (PDF)
//           </button>
//         </div>

//         {/* Actions */}
//         <div className="bg-white p-5 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-3">📨 Actions</h2>
//           <button className="block w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
//             Send Fee Reminder to Pending Students
//           </button>
//         </div>
//       </div>

//       {/* Fee Summary Chart */}
//       <div className="bg-white p-5 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">📊 Fee Summary</h2>
//         <ResponsiveContainer width="100%" height={250}>
//           <BarChart data={feeSummaryData}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="value" fill="#3b82f6" />
//           </BarChart>
//         </ResponsiveContainer>
//         <div className="text-center mt-2 text-gray-600">
//           Paid: 80% | Pending: 20%
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageStudentFees;

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageStudentFees = () => {
  const [institutions, setInstitutions] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [years, setYears] = useState([]);

  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [feeSummaryData, setFeeSummaryData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load institutions on mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/institutions")
      .then((res) => setInstitutions(res.data))
      .catch(() => toast.error("Failed to load institutions"));
  }, []);

  // Load colleges based on institution
  useEffect(() => {
    if (selectedInstitution) {
      axios
        .get(`http://localhost:5000/api/colleges/${selectedInstitution}`)
        .then((res) => setColleges(res.data))
        .catch(() => toast.error("Failed to load colleges"));
    } else {
      setColleges([]);
      setSelectedCollege("");
    }
  }, [selectedInstitution]);

  // Load departments based on college
  useEffect(() => {
    if (selectedCollege) {
      axios
        .get(`http://localhost:5000/api/departments/${selectedCollege}`)
        .then((res) => setDepartments(res.data))
        .catch(() => toast.error("Failed to load departments"));
    } else {
      setDepartments([]);
      setSelectedDepartment("");
    }
  }, [selectedCollege]);

  // Load year options (can be static)
  useEffect(() => {
    setYears(["First Year", "Second Year", "Third Year", "Final Year"]);
  }, []);

  // Load students dynamically when all selections are made
  const handleLoadStudents = async () => {
    if (
      !selectedInstitution ||
      !selectedCollege ||
      !selectedDepartment ||
      !selectedYear
    ) {
      toast.warning("Please complete all selections before loading data");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/students`, {
        params: {
          institution: selectedInstitution,
          college: selectedCollege,
          department: selectedDepartment,
          year: selectedYear,
        },
      });
      setStudents(res.data);
      setFilteredStudents(res.data);
      updateFeeSummary(res.data);
      toast.success("Student data loaded successfully!");
    } catch (error) {
      toast.error("Failed to load student data");
    } finally {
      setLoading(false);
    }
  };

  // Search filter
  useEffect(() => {
    const result = students.filter(
      (s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.roll.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(result);
  }, [searchTerm, students]);

  // Update fee summary dynamically
  const updateFeeSummary = (studentList) => {
    if (studentList.length === 0) {
      setFeeSummaryData([]);
      return;
    }

    const totalPaid = studentList.reduce((acc, s) => acc + s.paid, 0);
    const totalPending = studentList.reduce((acc, s) => acc + s.pending, 0);
    const total = totalPaid + totalPending;

    const paidPercent = ((totalPaid / total) * 100).toFixed(1);
    const pendingPercent = ((totalPending / total) * 100).toFixed(1);

    setFeeSummaryData([
      { name: "Paid", value: parseFloat(paidPercent) },
      { name: "Pending", value: parseFloat(pendingPercent) },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <ToastContainer position="top-right" />
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Manage Student & Fee Details
      </h1>

      {/* Selection Steps */}
      <div className="bg-white p-5 shadow-md rounded-lg mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Institution */}
        <div>
          <label className="text-sm font-semibold text-gray-600">
            Step 1: Select Institution
          </label>
          <select
            value={selectedInstitution}
            onChange={(e) => {
              setSelectedInstitution(e.target.value);
              setSelectedCollege("");
              setSelectedDepartment("");
              setSelectedYear("");
            }}
            className="w-full border rounded-lg p-2 mt-1"
          >
            <option value="">-- Choose Institution --</option>
            {institutions.map((inst, idx) => (
              <option key={idx} value={inst.name}>
                {inst.name}
              </option>
            ))}
          </select>
        </div>

        {/* College */}
        <div>
          <label className="text-sm font-semibold text-gray-600">
            Step 2: Select College
          </label>
          <select
            value={selectedCollege}
            onChange={(e) => {
              setSelectedCollege(e.target.value);
              setSelectedDepartment("");
              setSelectedYear("");
            }}
            disabled={!selectedInstitution}
            className="w-full border rounded-lg p-2 mt-1"
          >
            <option value="">-- Choose College --</option>
            {colleges.map((college, idx) => (
              <option key={idx} value={college.name}>
                {college.name}
              </option>
            ))}
          </select>
        </div>

        {/* Department */}
        <div>
          <label className="text-sm font-semibold text-gray-600">
            Step 3: Select Department
          </label>
          <select
            value={selectedDepartment}
            onChange={(e) => {
              setSelectedDepartment(e.target.value);
              setSelectedYear("");
            }}
            disabled={!selectedCollege}
            className="w-full border rounded-lg p-2 mt-1"
          >
            <option value="">-- Choose Department --</option>
            {departments.map((d, idx) => (
              <option key={idx} value={d.name || d}>
                {d.name || d}
              </option>
            ))}
          </select>
        </div>

        {/* Year */}
        <div>
          <label className="text-sm font-semibold text-gray-600">
            Step 4: Select Year
          </label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            disabled={!selectedDepartment}
            className="w-full border rounded-lg p-2 mt-1"
          >
            <option value="">-- Choose Year --</option>
            {years.map((y, idx) => (
              <option key={idx} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Load Data Button */}
      <button
        onClick={handleLoadStudents}
        disabled={loading}
        className={`mb-6 px-5 py-2 rounded-lg text-white shadow ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Loading..." : "Load Student Data"}
      </button>

      {/* Search */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="🔍 Search by Name / Roll No"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-lg w-72"
        />
      </div>

      {/* Student Table */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto mb-6">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">Roll No</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-center">Paid</th>
              <th className="p-3 text-center">Pending</th>
              <th className="p-3 text-center">Total</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((s, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{s.roll}</td>
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.email}</td>
                <td className="p-3 text-center text-green-600 font-semibold">
                  ₹{s.paid.toLocaleString()}
                </td>
                <td className="p-3 text-center text-red-600 font-semibold">
                  ₹{s.pending.toLocaleString()}
                </td>
                <td className="p-3 text-center font-semibold">
                  ₹{s.total.toLocaleString()}
                </td>
                <td className="p-3 text-center space-x-2">
                  <button className="px-3 py-1 text-sm bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredStudents.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center p-4 text-gray-500">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Fee Summary Chart */}
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">📊 Fee Summary</h2>
        {feeSummaryData.length > 0 ? (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={feeSummaryData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500 text-center py-8">
            Load student data to view summary
          </p>
        )}
      </div>
    </div>
  );
};

export default ManageStudentFees;
