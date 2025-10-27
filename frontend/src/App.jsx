import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./pages/login";
import AdminDashboard from "./Admin";
import StudentDashboard from "./roles/Students";
import Profile from "./roles/profile";
import SidebarLayout from "./SideBar";
import { Navigate } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Student routes with sidebar */}
          <Route path="/students" element={<SidebarLayout />}>
            <Route index element={<Navigate to="/students/dashboard" />} />
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
