import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import img from "../assets/Images/bgimage.png";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || "Student"; // Role passed from previous page

  const [institutions, setInstitutions] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [selectedCollege, setSelectedCollege] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fetch Institutions
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/institutions")
      .then((res) => setInstitutions(res.data))
      .catch((err) => {
        console.error("Error fetching institutions:", err);
        alert("Failed to load institutions.");
      });
  }, []);

  // Fetch Colleges only for Student Role
  useEffect(() => {
    if (role === "Student" && selectedInstitution?._id) {
      axios
        .get(
          `http://localhost:5000/api/institutions/${selectedInstitution._id}/colleges`
        )
        .then((res) => setColleges(res.data))
        .catch((err) => {
          console.error("Error fetching colleges:", err);
          alert("Failed to load colleges.");
        });
    } else {
      setColleges([]);
    }
  }, [selectedInstitution, role]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password || !selectedInstitution) {
      alert("Please fill all required fields!");
      return;
    }

    if (role === "Student" && !selectedCollege) {
      alert("Please select your college!");
      return;
    }

    // Simple role-based navigation
    if (role === "Admin") {
      navigate("/admin");
    } else if (role === "Staff") {
      navigate("/staff");
    } else {
      navigate("/students");
    }
  };

  return (
    <div className="relative w-full h-screen">
      <img src={img} alt="bg" className="w-full h-full object-cover" />

      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 w-4/5 max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {role} Login Portal
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            {/* Institution */}
            <Autocomplete
              options={institutions}
              getOptionLabel={(option) => option.name || ""}
              value={selectedInstitution}
              onChange={(e, newValue) => {
                setSelectedInstitution(newValue);
                setSelectedCollege("");
              }}
              renderInput={(params) => (
                <TextField {...params} label="Select Institution" required />
              )}
            />

            {/* College — only for Student */}
            {role === "Student" && colleges.length > 0 && (
              <Autocomplete
                disabled={!selectedInstitution}
                options={colleges}
                value={selectedCollege}
                getOptionLabel={(option) => option}
                onChange={(e, newValue) => setSelectedCollege(newValue)}
                renderInput={(params) => (
                  <TextField {...params} label="Select College" required />
                )}
              />
            )}

            {/* Email */}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password */}
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Login Button */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="mt-2 !bg-indigo-600 hover:!bg-indigo-700"
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
