import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./pages/login";
<<<<<<< HEAD
// import Admin from "./roles/Admin";
import Students from "./roles/Students";
import PayFeesPage from "./studentDetails/Feepage";
=======
import AdminDashboard from "./Admin";
import StudentDashboard from "./roles/Students";
import Profile from "./roles/profile";
import SidebarLayout from "./SideBar";
import { Navigate } from "react-router-dom";
>>>>>>> 0afa8b7b2f0fca0961ad0ef745dce0e03fb02677
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
<<<<<<< HEAD
          <Route path="/students" element={<Students />} />
          <Route path="/FeePage" element={<PayFeesPage />} />
=======
          {/* Student routes with sidebar */}
          <Route path="/students" element={<SidebarLayout />}>
            <Route index element={<Navigate to="/students/dashboard" />} />
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/admin" element={<AdminDashboard />} />
>>>>>>> 0afa8b7b2f0fca0961ad0ef745dce0e03fb02677
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
