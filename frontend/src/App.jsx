import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import Login from "./pages/login";
// import Admin from "./roles/Admin";
import Students from "./roles/Students";
import PayFeesPage from "./studentDetails/Feepage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/students" element={<Students />} />
          <Route path="/FeePage" element={<PayFeesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
