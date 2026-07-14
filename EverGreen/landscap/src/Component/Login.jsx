import React, { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/User/Login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      setEmail("");
      setPassword("");
      props.handleClose();

      window.location.reload();
    } catch (error) {
      alert(
        error?.response?.data?.msg ||
          "Login Failed"
      );
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={() => {
        setEmail("");
        setPassword("");
        props.handleClose();
      }}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          color: "#2E7D32",
        }}
      >
        Login
      </DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
      </DialogContent>

      <Typography
        sx={{
          textAlign: "center",
          fontSize: 14,
          mt: 1,
        }}
      >
        New User?{" "}
        <Link
          to="/Register"
          style={{
            color: "#2E7D32",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Register Here
        </Link>
      </Typography>

      <DialogActions>
        <Button
          onClick={() => {
            setEmail("");
            setPassword("");
            props.handleClose();
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#2E7D32",
            "&:hover": {
              bgcolor: "#1B5E20",
            },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Login;