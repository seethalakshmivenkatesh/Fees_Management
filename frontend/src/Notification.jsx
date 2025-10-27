import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import { notification } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notifications = () => {
  const [institution, setInstitution] = useState("");
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");

  const [students, setStudents] = useState([]);
  const [log, setLog] = useState([
    {
      date: "26 Oct",
      message: "Reminder sent to 10 students",
      status: "Success",
    },
  ]);

  const sampleStudents = [
    { name: "Anjali Devi", email: "anjali@edu.com", pending: 10000 },
    { name: "Sneha R", email: "sneha@edu.com", pending: 20000 },
  ];

  // Handle loading students
  const handleLoadStudents = () => {
    if (!institution || !college || !department || !year) {
      toast.error("Please select all dropdowns before loading data!");
      return;
    }
    setStudents(sampleStudents);
    toast.success("Pending students loaded successfully!");
  };

  // Handle send reminder
  const handleSendReminder = (student) => {
    notification.success({
      message: `Reminder Sent`,
      description: `Reminder sent to ${student.name} (${student.email}) for ₹${student.pending}`,
    });

    setLog((prev) => [
      {
        date: new Date().toLocaleDateString(),
        message: `Reminder sent to ${student.name}`,
        status: "Success",
      },
      ...prev,
    ]);
  };

  // Handle send all
  const handleSendAll = () => {
    if (students.length === 0) {
      toast.error("No students to send reminders!");
      return;
    }

    toast.info("Sending reminders to all pending students...");
    setTimeout(() => {
      toast.success("Reminders sent successfully to all pending students!");
      setLog((prev) => [
        {
          date: new Date().toLocaleDateString(),
          message: `Reminders sent to all pending students`,
          status: "Success",
        },
        ...prev,
      ]);
    }, 1000);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      <ToastContainer position="top-right" autoClose={2000} />
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        📢 Notifications Center
      </Typography>

      <Card sx={{ p: 3, mb: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Select Target
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Institution</InputLabel>
                <Select
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  label="Institution"
                >
                  <MenuItem value="Sunrise University">
                    Sunrise University
                  </MenuItem>
                  <MenuItem value="ABC Foundation">ABC Foundation</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>College</InputLabel>
                <Select
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  label="College"
                >
                  <MenuItem value="Engineering College">
                    Engineering College
                  </MenuItem>
                  <MenuItem value="Nursing College">Nursing College</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Department</InputLabel>
                <Select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  label="Department"
                >
                  <MenuItem value="CSE">CSE</MenuItem>
                  <MenuItem value="ECE">ECE</MenuItem>
                  <MenuItem value="EEE">EEE</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Year</InputLabel>
                <Select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  label="Year"
                >
                  <MenuItem value="1st Year">1st Year</MenuItem>
                  <MenuItem value="2nd Year">2nd Year</MenuItem>
                  <MenuItem value="3rd Year">3rd Year</MenuItem>
                  <MenuItem value="4th Year">4th Year</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLoadStudents}
            >
              Load Pending Students
            </Button>
          </Box>
        </CardContent>
      </Card>

      {students.length > 0 && (
        <>
          <Paper sx={{ p: 3, mb: 4, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>
              Pending Students
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Email</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Pending</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Send Reminder</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student, index) => (
                  <TableRow key={index}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>₹{student.pending.toLocaleString()}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleSendReminder(student)}
                      >
                        Send
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Box textAlign="center" mt={3}>
              <Button
                variant="contained"
                color="success"
                onClick={handleSendAll}
              >
                Send Reminder to All Pending Students
              </Button>
            </Box>
          </Paper>

          <Card sx={{ p: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Notification Log
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Date</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Message</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Status</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {log.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell>{entry.date}</TableCell>
                      <TableCell>{entry.message}</TableCell>
                      <TableCell>{entry.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </>
      )}
    </Box>
  );
};

export default Notifications;
