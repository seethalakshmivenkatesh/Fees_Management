// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   ArrowDownTrayIcon,
//   DocumentArrowDownIcon,
// } from "@heroicons/react/24/solid";

// const Reports = () => {
//   const [selectedInstitution, setSelectedInstitution] = useState("");
//   const [selectedCollege, setSelectedCollege] = useState("");
//   const [selectedDepartment, setSelectedDepartment] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");
//   const [reportType, setReportType] = useState("");
//   const [reportData, setReportData] = useState([]);

//   const institutions = ["Sunrise University", "ABC Foundation"];
//   const colleges = {
//     "Sunrise University": ["Engineering College", "Arts College"],
//     "ABC Foundation": ["Nursing College"],
//   };
//   const departments = {
//     "Engineering College": ["Computer Science", "Electronics", "Mechanical"],
//     "Arts College": ["B.Com", "BBA"],
//     "Nursing College": ["General Nursing", "Midwifery"],
//   };
//   const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
//   const reportTypes = [
//     "Fee Summary",
//     "Department-wise Summary",
//     "Pending Report",
//   ];

//   const sampleData = [
//     {
//       rollNo: "21CS001",
//       name: "Anjali",
//       paid: 40000,
//       pending: 10000,
//       total: 50000,
//       status: "Pending",
//     },
//     {
//       rollNo: "21CS002",
//       name: "Rajesh",
//       paid: 50000,
//       pending: 0,
//       total: 50000,
//       status: "Paid",
//     },
//   ];

//   const handleGenerate = () => {
//     if (
//       !selectedInstitution ||
//       !selectedCollege ||
//       !selectedDepartment ||
//       !selectedYear ||
//       !reportType
//     ) {
//       toast.error("Please select all fields before generating the report.");
//       return;
//     }
//     toast.success("Report generated successfully!");
//     setReportData(sampleData);
//   };

//   const handleDownloadExcel = () => {
//     toast.info("Downloading report as Excel...");
//   };

//   const handleDownloadPDF = () => {
//     toast.info("Downloading report as PDF...");
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <ToastContainer position="top-right" autoClose={2000} />

//       <div className="bg-white p-6 rounded-2xl shadow-md">
//         <h2 className="text-2xl font-bold mb-4 text-gray-700 flex items-center gap-2">
//           📊 Generate Reports
//         </h2>

//         {/* Select Fields */}
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
//           <select
//             className="p-2 border rounded-lg"
//             value={selectedInstitution}
//             onChange={(e) => {
//               setSelectedInstitution(e.target.value);
//               setSelectedCollege("");
//               setSelectedDepartment("");
//             }}
//           >
//             <option value="">Select Institution</option>
//             {institutions.map((inst) => (
//               <option key={inst}>{inst}</option>
//             ))}
//           </select>

//           <select
//             className="p-2 border rounded-lg"
//             value={selectedCollege}
//             onChange={(e) => {
//               setSelectedCollege(e.target.value);
//               setSelectedDepartment("");
//             }}
//             disabled={!selectedInstitution}
//           >
//             <option value="">Select College</option>
//             {selectedInstitution &&
//               colleges[selectedInstitution].map((clg) => (
//                 <option key={clg}>{clg}</option>
//               ))}
//           </select>

//           <select
//             className="p-2 border rounded-lg"
//             value={selectedDepartment}
//             onChange={(e) => setSelectedDepartment(e.target.value)}
//             disabled={!selectedCollege}
//           >
//             <option value="">Select Department</option>
//             {selectedCollege &&
//               departments[selectedCollege].map((dept) => (
//                 <option key={dept}>{dept}</option>
//               ))}
//           </select>

//           <select
//             className="p-2 border rounded-lg"
//             value={selectedYear}
//             onChange={(e) => setSelectedYear(e.target.value)}
//           >
//             <option value="">Select Year</option>
//             {years.map((yr) => (
//               <option key={yr}>{yr}</option>
//             ))}
//           </select>

//           <select
//             className="p-2 border rounded-lg"
//             value={reportType}
//             onChange={(e) => setReportType(e.target.value)}
//           >
//             <option value="">Report Type</option>
//             {reportTypes.map((type) => (
//               <option key={type}>{type}</option>
//             ))}
//           </select>
//         </div>

//         {/* Generate Report Button */}
//         <button
//           onClick={handleGenerate}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all"
//         >
//           Generate Report
//         </button>
//       </div>

//       {/* Report Output Section */}
//       {reportData.length > 0 && (
//         <div className="bg-white mt-6 p-6 rounded-2xl shadow-md overflow-x-auto">
//           <h3 className="text-lg font-semibold mb-3 text-gray-700">
//             Report Output:
//           </h3>
//           <table className="min-w-full border border-gray-200 text-sm">
//             <thead className="bg-gray-100 text-gray-700">
//               <tr>
//                 <th className="p-2 border">Roll No</th>
//                 <th className="p-2 border">Name</th>
//                 <th className="p-2 border">Paid</th>
//                 <th className="p-2 border">Pending</th>
//                 <th className="p-2 border">Total</th>
//                 <th className="p-2 border">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reportData.map((row, index) => (
//                 <tr key={index} className="text-center hover:bg-gray-50">
//                   <td className="p-2 border">{row.rollNo}</td>
//                   <td className="p-2 border">{row.name}</td>
//                   <td className="p-2 border text-green-600 font-medium">
//                     ₹{row.paid}
//                   </td>
//                   <td className="p-2 border text-red-600 font-medium">
//                     ₹{row.pending}
//                   </td>
//                   <td className="p-2 border font-semibold">₹{row.total}</td>
//                   <td
//                     className={`p-2 border font-semibold ${
//                       row.status === "Paid" ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {row.status}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Download Buttons */}
//           <div className="flex flex-wrap gap-4 mt-6">
//             <button
//               onClick={handleDownloadExcel}
//               className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
//             >
//               <ArrowDownTrayIcon className="h-5 w-5" /> Download Excel
//             </button>

//             <button
//               onClick={handleDownloadPDF}
//               className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
//             >
//               <DocumentArrowDownIcon className="h-5 w-5" /> Download PDF
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Reports;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ArrowDownTrayIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/solid";

const Reports = () => {
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [reportType, setReportType] = useState("");
  const [reportData, setReportData] = useState([]);

  const institutions = ["Sunrise University", "ABC Foundation"];
  const colleges = {
    "Sunrise University": ["Engineering College", "Arts College"],
    "ABC Foundation": ["Nursing College"],
  };
  const departments = {
    "Engineering College": ["Computer Science", "Electronics", "Mechanical"],
    "Arts College": ["B.Com", "BBA"],
    "Nursing College": ["General Nursing", "Midwifery"],
  };
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  const reportTypes = [
    "Fee Summary",
    "Department-wise Summary",
    "Pending Report",
  ];

  const sampleData = [
    {
      rollNo: "21CS001",
      name: "Anjali",
      paid: 40000,
      pending: 10000,
      total: 50000,
      status: "Pending",
    },
    {
      rollNo: "21CS002",
      name: "Rajesh",
      paid: 50000,
      pending: 0,
      total: 50000,
      status: "Paid",
    },
  ];

  const handleGenerate = () => {
    if (
      !selectedInstitution ||
      !selectedCollege ||
      !selectedDepartment ||
      !selectedYear ||
      !reportType
    ) {
      toast.error("⚠️ Please select all fields before generating the report.");
      return;
    }
    toast.success("✅ Report generated successfully!");
    setReportData(sampleData);
  };

  const handleDownloadExcel = () => toast.info("📊 Downloading Excel...");
  const handleDownloadPDF = () => toast.info("📄 Downloading PDF...");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4 flex items-center gap-3">
          📊 Reports Dashboard
        </h2>

        {/* Selection Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {/* Institution */}
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Institution
            </label>
            <select
              className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-indigo-500"
              value={selectedInstitution}
              onChange={(e) => {
                setSelectedInstitution(e.target.value);
                setSelectedCollege("");
                setSelectedDepartment("");
              }}
            >
              <option value="">Select Institution</option>
              {institutions.map((inst) => (
                <option key={inst}>{inst}</option>
              ))}
            </select>
          </div>

          {/* College */}
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              College
            </label>
            <select
              className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-indigo-500"
              value={selectedCollege}
              onChange={(e) => {
                setSelectedCollege(e.target.value);
                setSelectedDepartment("");
              }}
              disabled={!selectedInstitution}
            >
              <option value="">Select College</option>
              {selectedInstitution &&
                colleges[selectedInstitution].map((clg) => (
                  <option key={clg}>{clg}</option>
                ))}
            </select>
          </div>

          {/* Department */}
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Department
            </label>
            <select
              className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-indigo-500"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              disabled={!selectedCollege}
            >
              <option value="">Select Department</option>
              {selectedCollege &&
                departments[selectedCollege].map((dept) => (
                  <option key={dept}>{dept}</option>
                ))}
            </select>
          </div>

          {/* Year */}
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Year
            </label>
            <select
              className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-indigo-500"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="">Select Year</option>
              {years.map((yr) => (
                <option key={yr}>{yr}</option>
              ))}
            </select>
          </div>

          {/* Report Type */}
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Report Type
            </label>
            <select
              className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-indigo-500"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="">Select Type</option>
              {reportTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Generate Report */}
        <div className="text-center">
          <button
            onClick={handleGenerate}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2.5 rounded-xl font-semibold shadow-md transition-all duration-300"
          >
            Generate Report
          </button>
        </div>
      </div>

      {/* Report Table */}
      {reportData.length > 0 && (
        <div className="max-w-7xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            📄 Report Output
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm rounded-xl overflow-hidden">
              <thead className="bg-indigo-100 text-gray-700">
                <tr>
                  <th className="p-3 border">Roll No</th>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Paid</th>
                  <th className="p-3 border">Pending</th>
                  <th className="p-3 border">Total</th>
                  <th className="p-3 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((row, index) => (
                  <tr
                    key={index}
                    className="text-center hover:bg-gray-50 transition-all"
                  >
                    <td className="p-3 border">{row.rollNo}</td>
                    <td className="p-3 border">{row.name}</td>
                    <td className="p-3 border text-green-600 font-medium">
                      ₹{row.paid}
                    </td>
                    <td className="p-3 border text-red-600 font-medium">
                      ₹{row.pending}
                    </td>
                    <td className="p-3 border font-semibold">₹{row.total}</td>
                    <td
                      className={`p-3 border font-semibold ${
                        row.status === "Paid"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <button
              onClick={handleDownloadExcel}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md"
            >
              <ArrowDownTrayIcon className="h-5 w-5" /> Download Excel
            </button>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md"
            >
              <DocumentArrowDownIcon className="h-5 w-5" /> Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;
