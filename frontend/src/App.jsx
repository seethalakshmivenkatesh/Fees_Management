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
import InstitutionsColleges from "./adminRole/InstitutionsColleges";
import DepartmentsYears from "./adminRole/DepartmentsYears";
import StudentsFeesManagement from "./adminRole/studentFeeManagement";
import ManageStudentFees from "./ManageStudentFees";

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
            <Route
              path="institutions-colleges"
              element={<InstitutionsColleges />}
            />
            <Route path="departments-years" element={<DepartmentsYears />} />

            <Route path="students-fees" element={<StudentsFeesManagement />} />

            <Route path="manage-students" element={<ManageStudentFees />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
