import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
  Grid,
} from "@mui/material";

const Settings = () => {
  const [admin, setAdmin] = useState({
    name: "Admin User",
    email: "admin@sunrise.edu",
    password: "********",
  });

  const [institution, setInstitution] = useState({
    name: "Sunrise University",
    address: "Chennai, Tamil Nadu",
  });

  const handleChange = (field, value) => {
    setAdmin((prev) => ({ ...prev, [field]: value }));
  };

  const handleInstitutionChange = (field, value) => {
    setInstitution((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    alert("Changes saved successfully!");
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        ⚙️ Admin Settings
      </Typography>

      <Card sx={{ p: 3, mb: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Admin Profile
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                value={admin.name}
                onChange={(e) => handleChange("name", e.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                value={admin.email}
                onChange={(e) => handleChange("email", e.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Change Password"
                type="password"
                value={admin.password}
                onChange={(e) => handleChange("password", e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ p: 3, mb: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Institution Info
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Institution Name"
                value={institution.name}
                onChange={(e) =>
                  handleInstitutionChange("name", e.target.value)
                }
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Address"
                value={institution.address}
                onChange={(e) =>
                  handleInstitutionChange("address", e.target.value)
                }
                fullWidth
              />
            </Grid>
          </Grid>

          <Box textAlign="center" mt={3}>
            <Button variant="contained" color="secondary">
              Edit Institution Details
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ p: 3, mb: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Permissions
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Typography variant="body1" sx={{ mb: 2 }}>
            Manage roles and access levels for admin and staff users.
          </Typography>

          <Button variant="contained" color="info">
            Manage Roles & Access
          </Button>
        </CardContent>
      </Card>

      <Box textAlign="center" mt={3}>
        <Button variant="contained" color="success" onClick={handleSave}>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;
