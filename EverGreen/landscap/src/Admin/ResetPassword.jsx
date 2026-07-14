import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../Api/Axious";
export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);

  const [alert, setAlert] = useState({
    severity: "success",
    message: "",
  });

  const handleReset = async () => {
    try {
      const res = await API.post(
        `https://land-8m43.onrender.com/admin/resetpassword/${token}`,
        {
          password,
        }
      );

      setAlert({
        severity: "success",
        message: res.data.msg,
      });

      setOpen(true);

      setTimeout(() => {
        navigate("/adminlogin");
      }, 2000);
    } catch (error) {
      setAlert({
        severity: "error",
        message:
          error.response?.data?.msg ||
          "Reset Password Failed",
      });

      setOpen(true);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          p: 5,
          width: 400,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={3}
          color="green"
        >
          Reset Password
        </Typography>

        <TextField
          fullWidth
          type="password"
          label="New Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            bgcolor: "#2E7D32",
          }}
          onClick={handleReset}
        >
          Reset Password
        </Button>
      </Paper>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}