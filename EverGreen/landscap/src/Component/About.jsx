
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import { motion } from "framer-motion";
import Navbar from "./NavBar";
import ParkIcon from "@mui/icons-material/Park";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Counter from "./Counter";
import NavBar from "./NavBar";
import garden1 from "../pic/garden1.jpeg";
import garden2 from "../pic/garden2.jpeg";
import garden3 from "../pic/garden3.jpeg";
import Animationlogo from "../pic/Animationlogo.mp4";
const MotionBox = motion(Box);

function About() {
  const navigate = useNavigate();

  const values = [
    {
      title: "Sustainability",
      icon: <EmojiNatureIcon sx={{ fontSize: 50 }} />,
      desc: "Promoting eco-friendly landscaping solutions.",
    },
    {
      title: "Quality",
      icon: <WorkspacePremiumIcon sx={{ fontSize: 50 }} />,
      desc: "Delivering premium outdoor spaces.",
    },
    {
      title: "Innovation",
      icon: <ParkIcon sx={{ fontSize: 50 }} />,
      desc: "Using modern landscaping techniques.",
    },
    {
      title: "Trust",
      icon: <GroupsIcon sx={{ fontSize: 50 }} />,
      desc: "Building long-term client relationships.",
    },
  ];

  return (
    <Box sx={{ background: "#fafafa" }}>
      {/* HERO SECTION */}
      <NavBar />
      <Box
        sx={{
          height: "80vh",
          backgroundImage: `url(${garden1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <MotionBox
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              About Evergreen Landscape
            </Typography>

            <Typography
              variant="h6"
              color="white"
              textAlign="center"
              mt={2}
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Creating beautiful outdoor spaces with innovation,
              sustainability and professional expertise.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* WHO WE ARE */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
             <video
  autoPlay
  
  loop
  playsInline
  style={{
    width: "100%",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    objectFit: "cover"
  }}
>
  <source src={Animationlogo} type="video/mp4" />
</video>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                color="#2e7d32"
                mb={3}
              >
                Who We Are
              </Typography>

              <Typography color="text.secondary" lineHeight={2}>
                Evergreen Landscape is a professional landscaping company
                dedicated to creating sustainable and visually stunning
                outdoor environments.

                We specialize in garden design, lawn maintenance,
                irrigation systems, tree plantation and complete
                landscaping solutions for residential and commercial
                projects.
              </Typography>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* VALUES */}
      <Box sx={{ background: "#f1f8e9", py: 10 }}>
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            color="#2e7d32"
            mb={6}
          >
            Our Core Values
          </Typography>

          <Grid container spacing={4}>
            {values.map((item, index) => (
              <Grid item xs={6} sm={6} md={3} key={index}>
                <MotionBox
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <Card
                    sx={{
                      textAlign: "center",
                      borderRadius: 4,
                      height: 230,
                       width: {
      xs: 160,
      sm: 250,
      md: 250,
    },
                      mx: "auto",
                      boxShadow: 2,
                      transition: "0.3s",
                    }}
                  >
                    <CardContent sx={{ py: 4 }}>
                      <Box sx={{ color: "#2e7d32" }}>
                        {item.icon}
                      </Box>

                      <Typography
                        fontWeight="bold"
                        mt={2}
                        mb={1}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* WHY CHOOSE US */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="#2e7d32"
              mb={3}
            >
              Why Choose Us?
            </Typography>

            <Typography lineHeight={2}>
              ✓ Professional Landscape Experts
              <br />
              ✓ Modern Equipment & Techniques
              <br />
              ✓ Sustainable Garden Solutions
              <br />
              ✓ Timely Project Completion
              <br />
              ✓ Affordable Pricing
              <br />
              ✓ Customer Satisfaction Focused
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={garden3}
                alt="garden"
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                }}
              />
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* COUNTER */}
      <Counter />

      {/* PROCESS */}
      <Box sx={{ py: 10 }}>
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            color="#2e7d32"
            mb={6}
          >
            Our Working Process
          </Typography>

          <Grid container spacing={4}>
            {[
              "Consultation",
              "Design Planning",
              "Project Execution",
              "Maintenance",
            ].map((step, index) => (
              <Grid item xs={6} md={3} key={index}>
                <MotionBox
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card  sx={{
            textAlign: "center",
            p: { xs: 2, md: 3 },
            borderRadius: 3,
            height: 150,
            width: {
              xs: 130,
              md: 200,
            },
            mx: "auto",
            boxShadow: 2,
          }}>
                    <Typography
                      variant="h3"
                      color="#2e7d32"
                      fontWeight="bold"
                    >
                      {index + 1}
                    </Typography>

                    <Typography fontWeight="bold" mt={2}>
                      {step}
                    </Typography>
                  </Card>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          background: "#e8f5e9",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#2e7d32"
          >
            Ready To Transform Your Outdoor Space?
          </Typography>

          <Typography
            color="text.secondary"
            mt={2}
          >
            Let's create a beautiful landscape together.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 4,
              background: "#2e7d32",
              px: 5,
              py: 1.5,
              borderRadius: "30px",
              textTransform: "none",
              "&:hover": {
                background: "#1b5e20",
              },
            }}
            onClick={() => {
              navigate("/Contact");
            }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
