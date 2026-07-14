import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import axios from "axios";
import Login from "./Login";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import Navbar from "./NavBar";
import { motion } from "framer-motion";
import { useState } from "react";
import garden6 from "../pic/garden6.jpeg";
import garden7 from "../pic/garden7.jpeg";
import API from "../Api/Axious";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
const MotionBox = motion(Box);
const MotionCard = motion(Card);


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [openLogin, setOpenLogin] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const cards = [
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: "Call Us",
      value: "+91 93167 41009",
      action: () => {
        window.location.href = "tel:+919316741009";
      },
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: "Email Us",
      value: "chodvadiyafenny@gmail.com",
      action: () => {
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=chodvadiyafenny@gmail.com&su=Landscape Inquiry",
          "_blank"
        );
      }
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: "Visit Us",
      value: "Ahmedabad, Gujarat",
      action: () => {
        window.open(
          "https://www.google.com/maps/search/?api=1&query=Ahmedabad,Gujarat",
          "_blank"
        );
      },
    }
  ];
  const handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setOpenDialog(true);
      return;
    }

    try {
      await API.post(
        "https://land-8m43.onrender.com/contact/addcontact",
        formData
      );

      const message = `Hello Evergreen,

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}`;

      window.open(
        `https://wa.me/9909044747?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box sx={{ bgcolor: "#f8faf8" }}>
        {/* HERO */}

        <Navbar />
        <Box
          sx={{
            minHeight: "60vh",
            background:
              `linear-gradient(rgba(6, 15, 7, 0.75), rgba(29, 67, 32, 0.75)), url(${garden6})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            mt: 5,
            color: "#fff",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Container maxWidth="lg">
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{
                  fontSize: {
                    xs: "2.5rem",
                    md: "4.5rem",
                  },
                }}
              >
                Contact Us
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  maxWidth: 600,
                  fontSize: "1.1rem",
                  align: "center",
                  mx: "auto",
                }}
              >
                Let's Discuss Your Landscaping Ideas And
                Create Beautiful Outdoor Spaces Together.
              </Typography>
            </MotionBox>
          </Container>
        </Box>

        {/* CONTACT CARDS */}
        <Container maxWidth="lg" sx={{ mt: -6 }}>
          <Grid container spacing={3}>
            {cards.map((item, index) => (
              <Grid item xs={6} md={4} key={index}>
                <MotionCard
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={item.action}
                  sx={{
                    borderRadius: "25px",
                    textAlign: "center",
                    boxShadow: "0 20px 50px rgba(0,0,0,.08)",
                    cursor: "pointer",
                    height: 200,
                    width: {
                      xs: 160,
                      sm: 250,
                      md: 300,
                    },
                    mx: "auto",
                    transition: ".3s",
                    "&:hover": {
                      boxShadow: "0 25px 60px rgba(46,125,50,.18)",
                    },
                  }}
                >
                  <CardContent sx={{ py: 4 }}>
                    <Box
                      sx={{
                        color: "#2E7D32",
                        display: "flex",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      mb={1}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{
                        wordBreak: "break-word",
                      }}
                    >
                      {item.value}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* FORM SECTION */}
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Grid container spacing={6} alignItems="center">
            {/* IMAGE */}
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  component="img"
                  src={garden7}
                  alt=""
                  sx={{
                    width: {
                      xs: "100%",
                      sm: 400,
                      md: "100%",
                    },
                    maxWidth: "100%",
                    height: {
                      xs: 250,
                      sm: 350,
                      md: 550,
                    },
                    mx: "auto",
                    display: "block",
                    objectFit: "cover",
                    borderRadius: "30px",
                    boxShadow: "0 25px 60px rgba(0,0,0,.15)",
                  }}
                />
              </MotionBox>
            </Grid>

            {/* FORM */}
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.8 }}
                sx={{ boxShadow: "0 25px 60px rgba(0,0,0,.15)", p: 4, borderRadius: "30px", backgroundColor: "#fff" }}
              >
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color="#2E7D32"
                  mb={2}
                >
                  Get In Touch
                </Typography>

                <Typography
                  color="text.secondary"
                  mb={4}
                >
                  Have a project in mind? Fill out
                  the form and our team will contact
                  you shortly.
                </Typography>

                <Card
                  sx={{
                    borderRadius: "25px",
                    boxShadow:
                      "0 20px 50px rgba(0,0,0,.08)",
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />

                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />

                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />

                      <TextField
                        fullWidth
                        multiline
                        rows={5}
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={handleSubmit}
                        sx={{
                          bgcolor: "#2E7D32",
                          py: 1.5,
                          borderRadius: "30px",
                          textTransform: "none",
                          fontWeight: "bold",
                        }}
                      >
                        Send Message
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{
        py: 10,
        background:
          "linear-gradient(135deg,#1B5E20,#4CAF50)",
        color: "#fff",
      }
      } >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
          >
            Ready To Transform
            Your Outdoor Space?
          </Typography>

          <Typography
            textAlign="center"
            mt={2}
            sx={{ opacity: 0.9 }}
          >
            Contact our experts today and get a
            free consultation for your project.
          </Typography>
        </Container>
      </Box>
      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          onClick={() =>
            window.open(
              "https://wa.me/919316741009?text=Hello%20Evergreen,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20landscape%20project.",
              "_blank"
            )
          }
          sx={{
            bgcolor: "#fff",
            color: "#2E7D32",
            px: 5,
            py: 1.5,
            borderRadius: "30px",
            fontWeight: "bold",
          }}
        >
          Get Free Quote
        </Button>
      </Box>

      <Box >
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          maxWidth="xs"
          fullWidth
          sx={{
            "& .MuiDialog-paper": {
              borderRadius: "20px",
            },
          }}
        >
          <DialogTitle
            sx={{
              textAlign: "center",
              color: "#2E7D32",
              fontWeight: "bold",
            }}
          >
            Login Required
          </DialogTitle>

          <DialogContent>
            <Typography textAlign="center" sx={{ fontSize: 16, mt: 1 }}>
              Please login first to send your message.
            </Typography>
          </DialogContent>

          <DialogActions>
            <Button
              onClick={() => setOpenDialog(false)}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              sx={{ bgcolor: "#2E7D32" }}
              onClick={() => {
                setOpenDialog(false);
                setOpenLogin(true);
              }}
            >
              Login
            </Button>
          </DialogActions>
        </Dialog>

        <Login
          open={openLogin}
          handleClose={() => setOpenLogin(false)}
        />
      </Box >
    </>
  );
};

export default Contact;