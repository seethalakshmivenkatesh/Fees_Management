// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./Home";
// import Login from "./pages/login";
// import AdminDashboard from "./Admin";
// import StudentDashboard from "./roles/Students";
// import Profile from "./roles/profile";
// import SidebarLayout from "./SideBar";
// import PayFeesPage from "./roles/Feepage";
// import { Navigate } from "react-router-dom";
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           {/* Student routes with sidebar */}
//           <Route path="/students" element={<SidebarLayout />}>
//             <Route index element={<Navigate to="/students/dashboard" />} />
//             <Route path="dashboard" element={<StudentDashboard />} />
//             <Route path="pay-fee" element={<PayFeesPage />} />
//             <Route path="profile" element={<Profile />} />
//           </Route>
//           <Route path="/admin" element={<AdminDashboard />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// General Pages
import Home from "./Home";
import Login from "./pages/login";

// Student Imports
import SidebarLayout from "./SideBar";
import StudentDashboard from "./roles/Students";
import Profile from "./roles/profile";
import PayFeesPage from "./roles/Feepage";

// Admin Imports
import AdminSidebar from "./adminRole/AdminSidebar";
import Dashboard from "./adminRole/Dashboard";
import CollegesSection from "./adminRole/InstitutionsColleges";
import StudentsFeesManagement from "./adminRole/studentFeeManagement";
// import ManageStudents from "./admin/ManageStudents";
// import ManageFees from "./admin/ManageFees";
// import UploadExcel from "./admin/UploadExcel";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BrowserRouter>
        <Routes>
          {/* Home & Login */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* ---------------------- STUDENT ROUTES ---------------------- */}
          <Route path="/students" element={<SidebarLayout />}>
            <Route index element={<Navigate to="/students/dashboard" />} />
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="pay-fee" element={<PayFeesPage />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* ---------------------- ADMIN ROUTES ---------------------- */}
          <Route path="/admin" element={<AdminSidebar />}>
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="Institutions" element={<CollegesSection />} />
            <Route path="manage-fees" element={<StudentsFeesManagement />} />
            {/* <Route path="manage-students" element={<ManageStudents />} />
            <Route path="manage-fees" element={<ManageFees />} />
            <Route path="upload-excel" element={<UploadExcel />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
