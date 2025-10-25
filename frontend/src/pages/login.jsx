import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import img from "../assets/Images/bgimage.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");s
  const users = [
    {
      email: "e22@gmail.com",
      password: "123",
      role: "student",
      college: "MIT College of Engineering",
      department: "Engineering",
    },
  ];
  const colleges = [
    "MIT College of Engineering",
    "IIT Madras",
    "VIT University",
    "SRM Institute of Science and Technology",
    "Anna University",
    "PSG College of Technology",
  ];

  const departmentsByCollege = {
    "MIT College of Engineering": [
      "Engineering",
      "Pharmacy",
      "Nursing",
      "Allied Health Science",
      "Health Inspector",
    ],
    "IIT Madras": ["Engineering", "Sciences", "Humanities"],
    "VIT University": ["Engineering", "Pharmacy", "Management"],
    "SRM Institute of Science and Technology": [
      "Engineering",
      "Pharmacy",
      "Nursing",
      "Medical",
    ],
    "Anna University": ["Engineering", "Architecture"],
    "PSG College of Technology": ["Engineering", "Management"],
  };
  const handleLogin = () => {
    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password &&
        u.college === college &&
        u.department === department
    );
    if (user) {
      if (user.role === "student") navigate("/students");
      // else if (role === "staff") navigate("/staff-dashboard");
      // else if (role === "admin") navigate("/admin-dashboard");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="relative w-full h-screen">
      <img src={img} alt="bg" className="w-full h-full object-cover" />

      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 w-4/5 max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            College Login Portal
          </h2>

          <form className="flex flex-col gap-4">
            <Autocomplete
              options={colleges}
              value={college}
              onChange={(e, newValue) => {
                setCollege(newValue);
                setDepartment("");
              }}
              renderInput={(params) => (
                <TextField {...params} label="Select Your College" required />
              )}
            />

            {college && (
              <Autocomplete
                options={departmentsByCollege[college] || []}
                value={department}
                onChange={(e, newValue) => setDepartment(newValue)}
                renderInput={(params) => (
                  <TextField {...params} label="Select Department" required />
                )}
              />
            )}

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="mt-2 !bg-indigo-600 hover:!bg-indigo-700"
              onClick={handleLogin}
            >
              Sign In
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Forgot password?{" "}
            <span className="text-indigo-600 cursor-pointer hover:underline">
              Reset here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
