import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage or cookies (example)
    localStorage.removeItem("authToken");
    sessionStorage.clear();

    // Redirect to login page
    navigate("/login");
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ width: 400, boxShadow: 3, p: 2 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            🚪 Confirm Logout?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Are you sure you want to logout?
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={handleLogout}
              sx={{ px: 4 }}
            >
              Yes, Logout
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleCancel}
              sx={{ px: 4 }}
            >
              Cancel
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Logout;
