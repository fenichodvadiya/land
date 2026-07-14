import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Container,
} from "@mui/material";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";
import GrassIcon from "@mui/icons-material/Grass";
import ParkIcon from "@mui/icons-material/Park";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import YardIcon from "@mui/icons-material/Yard";

import NavBar from "./NavBar";

import { motion } from "framer-motion";
import garden4 from "../pic/garden4.jpeg";
import garden5 from "../pic/garden5.jpeg";
const MotionBox = motion(Box);
const MotionCard = motion(Card);
const services = [
  {
    title: "Garden Design",
    description:
      "Modern & beautiful garden designs crafted for every space.",
    icon: <ParkIcon sx={{ fontSize: 55 }} />,
  },
  {
    title: "Lawn Maintenance",
    description:
      "Professional lawn care and maintenance services.",
    icon: <GrassIcon sx={{ fontSize: 55 }} />,
  },
  {
    title: "Irrigation Systems",
    description:
      "Smart watering and irrigation systems for landscapes.",
    icon: <WaterDropIcon sx={{ fontSize: 55 }} />,
  },
  {
    title: "Outdoor Landscaping",
    description:
      "Transform outdoor spaces into premium environments.",
    icon: <YardIcon sx={{ fontSize: 55 }} />,
  },
];
export default function LandscapeServices() {
  const navigate = useNavigate();
  return (
    <Box sx={{ background: "#f6fff7" }}>
      <NavBar />
      <Box
  sx={{
    minHeight: "90vh",
    background:
      `linear-gradient(rgba(38, 38, 38, 0.55), rgba(50, 51, 50, 0.55)) ,url(${garden4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    mt: { xs: 0, md: 10 },
  }}
>
  <Container maxWidth="lg">
    <MotionBox
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Typography
        sx={{
          color: "#81C784",
          letterSpacing: 3,
          fontWeight: 700,
          mb: 2,
        }}
      >
        PREMIUM LANDSCAPE SOLUTIONS
      </Typography>

      <Typography
        variant="h1"
        fontWeight="bold"
        sx={{
          fontSize: {
            xs: "3rem",
            md: "5rem",
          },
          mb: 3,
          
        }}
      >
        Evergreen
        <br />
        Landscape
      </Typography>

      <Typography
        sx={{
          maxWidth: 700,
          mx: "auto",
          fontSize: "1.2rem",
          opacity: .9,
          mb: 5,
          lineHeight: 1.8,
        }}
      >
        Creating luxurious outdoor spaces with
        innovative landscape design, greenery,
        irrigation systems and sustainable
        environmental solutions.
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{
          bgcolor: "#43A047",
          px: 5,
          py: 2,
          borderRadius: "50px",
          fontWeight: 700,
          textTransform: "none",
          fontSize: "1rem",
          "&:hover": {
            bgcolor: "#2E7D32",
          },
        }}
        onClick={() => {
          window.location.href = "/Service";
        }}  
      >
        Explore Services
      </Button>
    </MotionBox>
  </Container>
</Box>
<Box sx={{ py: 8, bgcolor: "#fff" }}>
  <Container>
   <Grid container spacing={3}>
  {[
    ["500+", "Projects Completed"],
    ["500+", "Happy Clients"],
    ["10+", "Years Experience"],
    ["24/7", "Support"],
  ].map((item, index) => (
    <Grid
      item
      xs={6}
      md={3}
      key={index}
      sx={{ display: "flex" }}
    >
      <MotionBox
        whileHover={{ scale: 1.05 }}
        sx={{
        width: {
            xs: 125, // Mobile (2 cards)
            sm: 180,
            md: 200, // Laptop (4 cards)
            lg: 220,
          },
          height: 160,
          bgcolor: "#fff",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          p: 2.5,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.6rem", md: "2.4rem" },
            fontWeight: "bold",
            color: "#2E7D32",
          }}
        >
          {item[0]}
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontSize: { xs: "0.8rem", md: "1rem" },
          }}
        >
          {item[1]}
        </Typography>
      </MotionBox>
    </Grid>
  ))}
</Grid>
  </Container>
</Box>
<Box sx={{ py: 12 }}>
  <Container maxWidth="lg">

    <Typography
      sx={{
        textAlign: "center",
        color: "#43A047",
        fontWeight: 700,
        letterSpacing: 2,
        mb: 1,
      }}
    >
      WHAT WE OFFER
    </Typography>

    <Typography
      variant="h3"
      fontWeight="bold"
      textAlign="center"
      mb={8}
      color="#1B5E20"
    >
      Premium Landscape Services
    </Typography>
    <Grid container spacing={4}>
  {services.map((service, index) => (
    <Grid item xs={12} sm={6} md={3} key={index}>

      <MotionCard
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
        }}
        whileHover={{
          y: -15,
          scale: 1.03,
        }}
        viewport={{ once: true }}
        sx={{
          position: "relative",
          overflow: "hidden",
          height: "100%",
          borderRadius: "30px",
          background: "#fff",
          border: "1px solid #e8f5e9",
          boxShadow:
            "0 15px 40px rgba(0,0,0,.08)",
            width: {
              xs: "100%",
              sm: "100%",
              md: 555,
            },
        }}
      >
        <Box
  sx={{
    position: "absolute",
    top: 0,
    left: 0,
    maxwidth: "500px",
    height: 6,
    background:
      "linear-gradient(90deg,#2E7D32,#81C784)",
  }}
/>
<CardContent sx={{ p: 4 }}>
  <Box
  sx={{
    width: 90,
    height: 90,
    borderRadius: "25px",
    background:
      "linear-gradient(135deg,#E8F5E9,#C8E6C9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#2E7D32",
    mb: 3,
    
  }}
>
  {service.icon}
</Box>
<Typography
  variant="h5"
  fontWeight="bold"
  mb={2}
>
  {service.title}
</Typography>
<Typography
  color="text.secondary"
  sx={{
    lineHeight: 1.8,
    mb: 3,
  }}
>
  {service.description}
</Typography>
<Button
  sx={{
    color: "#2E7D32",
    fontWeight: 700,
    p: 0,
    textTransform: "none",
  }}
>
  Learn More →
</Button>
</CardContent>
</MotionCard>

    </Grid>
  ))}
</Grid>

  </Container>
</Box>
<Box
  sx={{
    py: 12,
    bgcolor: "#fff",
  }}
>
  <Container maxWidth="lg">
    <Grid
      container
      spacing={8}
      alignItems="center"
    >
      <Grid item xs={12} md={6}>
  <MotionBox
    initial={{
      opacity: 0,
      x: -100,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      duration: 0.8,
    }}
    viewport={{ once: true }}
    sx={{
      position: "relative",
    }}
  >
    <Box
      component="img"
      src={garden5}
      alt=""
      sx={{
        width: "100%",
        height: 550,
        objectFit: "cover",
        borderRadius: "35px",
        boxShadow:
          "0 30px 70px rgba(0,0,0,.18)",
      }}
    />

    <Box
      sx={{
        position: "absolute",
        bottom: -30,
        right: -20,
        bgcolor: "#2E7D32",
        color: "#fff",
        p: 4,
        borderRadius: "25px",
        boxShadow:
          "0 20px 40px rgba(46,125,50,.35)",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
      >
        10+
      </Typography>

      <Typography>
        Years Experience
      </Typography>
    </Box>
  </MotionBox>
</Grid>
<Grid item xs={12} md={6}>
  <MotionBox
    initial={{
      opacity: 0,
      x: 100,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      duration: 0.8,
    }}
    viewport={{ once: true }}
  >
    <Typography
  variant="h3"
  fontWeight="bold"
  color="#1B5E20"
  mb={3}
>
  Transforming Outdoor Spaces Into Living Masterpieces
</Typography>
<Typography
  color="text.secondary"
  sx={{
    lineHeight: 2,
    mb: 4,
    fontSize: "1.05rem",
  }}
>
  Evergreen Landscape specializes in creating
  elegant, sustainable and innovative outdoor
  environments. From luxury garden design and
  lawn care to smart irrigation and landscape
  architecture, we deliver exceptional outdoor
  experiences tailored to every client.
</Typography>
<Grid container spacing={3}>
<Grid item xs={12} sm={6}>
  <Card
    sx={{
      borderRadius: "20px",
      boxShadow:
        "0 10px 30px rgba(0,0,0,.08)",
      p: 2,
    }}
  >
    <Typography
      fontWeight="bold"
      color="#2E7D32"
    >
      ✔ Premium Design
    </Typography>

    <Typography
      color="text.secondary"
      mt={1}
    >
      Luxury landscaping solutions.
    </Typography>
  </Card>
</Grid>
<Grid item xs={12} sm={6}>
  <Card
    sx={{
      borderRadius: "20px",
      boxShadow:
        "0 10px 30px rgba(0,0,0,.08)",
      p: 2,
    }}
  >
    <Typography
      fontWeight="bold"
      color="#2E7D32"
    >
      ✔ Expert Team
    </Typography>

    <Typography
      color="text.secondary"
      mt={1}
    >
      Skilled landscape specialists.
    </Typography>
  </Card>
</Grid>
<Grid item xs={12} sm={6}>
  <Card
    sx={{
      borderRadius: "20px",
      boxShadow:
        "0 10px 30px rgba(0,0,0,.08)",
      p: 2,
    }}
  >
    <Typography
      fontWeight="bold"
      color="#2E7D32"
    >
      ✔ Sustainable Solutions
    </Typography>

    <Typography
      color="text.secondary"
      mt={1}
    >
      Eco-friendly landscaping methods.
    </Typography>
  </Card>
</Grid>
<Grid item xs={12} sm={6}>
  <Card
    sx={{
      borderRadius: "20px",
      boxShadow:
        "0 10px 30px rgba(0,0,0,.08)",
      p: 2,
    }}
  >
    <Typography
      fontWeight="bold"
      color="#2E7D32"
    >
      ✔ Quality Assurance
    </Typography>

    <Typography
      color="text.secondary"
      mt={1}
    >
      Reliable and lasting results.
    </Typography>
     
  </Card>
</Grid>
</Grid>
 <Card
        sx={{
          mt: 3,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          borderRadius: "30px",
        }}
      >
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
      </Card>
  </MotionBox>
</Grid>

    </Grid>
  </Container>
</Box>
    </Box>
  );
}