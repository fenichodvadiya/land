import React from "react";
import axios from "axios";
import NavBar from "./NavBar";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("success");

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/User/Register",
        {
          name,
          email,
          password,
        }
      );

      setMessage(res.data.msg);
      setSeverity("success");
      setOpen(true);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      setMessage(
        error?.response?.data?.msg ||
        "Registration Failed"
      );
      setSeverity("error");
      setOpen(true);
    }
  };

  return (
    <>
      <NavBar />
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert severity={severity}>
          {message}
        </Alert>
      </Snackbar>

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#f5f7f4",
          mt: {
            xs: 0,
            md: 6,
          }// Adjust for the height of the NavBar
        }}
      >
        <Container
          maxWidth="xs"
          sx={{
            bgcolor: "#fff",
            p: 4,
            borderRadius: 3,
            boxShadow: 4,
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            color="#2E7D32"
            mb={3}
          >
            Register
          </Typography>

          <TextField
            fullWidth
            label="Full Name"
            margin="normal"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

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

          <Stack
            mt={3}
            alignItems="center"
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#2E7D32",
                width: "100%",
                py: 1.2,
              }}
              onClick={handleRegister}
            >
              Register
            </Button>
          </Stack>

          <Typography
            textAlign="center"
            mt={2}
          >
            Already have an account?{" "}
            <Link
              to="/"
              style={{
                color: "#2E7D32",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Register;