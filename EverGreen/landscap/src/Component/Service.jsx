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
      title: "Landscape Lighting",
  description:
    "Elegant outdoor lighting to enhance beauty, safety and ambience.",
  icon: <YardIcon sx={{ fontSize: 55 }} />,
  },
  {
    title: "Garden Renovation",
  description:
    "Refresh existing gardens with creative designs and greenery.",
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
    ["200+", "Projects Completed"],
    ["200+", "Happy Clients"],
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

    
  {/* MODERN PREMIUM LANDSCAPE SERVICES */}
<Box
  sx={{
    position: "relative",
    py: { xs: 7, md: 10 },
    px: { xs: 2, sm: 3 },
    overflow: "hidden",
    background: "#F7FAF7",
  }}
>
  {/* Decorative background shapes */}
  <Box
    sx={{
      position: "absolute",
      top: 50,
      right: -100,
      width: 250,
      height: 250,
      borderRadius: "50%",
      bgcolor: "rgba(129,199,132,0.10)",
      filter: "blur(3px)",
      pointerEvents: "none",
    }}
  />

  <Box
    sx={{
      position: "absolute",
      bottom: 40,
      left: -100,
      width: 230,
      height: 230,
      borderRadius: "50%",
      bgcolor: "rgba(46,125,50,0.07)",
      pointerEvents: "none",
    }}
  />

  <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
    {/* Heading */}
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      sx={{
        textAlign: "center",
        mb: { xs: 5, md: 6 },
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          px: 2,
          py: 0.8,
          mb: 2,
          borderRadius: "30px",
          bgcolor: "#E5F3E6",
          border: "1px solid #CBE5CE",
        }}
      >
        <ParkIcon sx={{ color: "#2E7D32", fontSize: 18 }} />
        <Typography
          sx={{
            color: "#2E7D32",
            fontWeight: 700,
            fontSize: "0.76rem",
            letterSpacing: 2,
          }}
        >
          WHAT WE OFFER
        </Typography>
      </Box>

      <Typography
        variant="h3"
        sx={{
          color: "#173F25",
          fontWeight: 800,
          fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
          lineHeight: 1.2,
          mb: 2,
        }}
      >
        <Box component="span" sx={{ color: "#349139" }}>
         Premium Landscape Services
        </Box>
      </Typography>

      <Typography
        sx={{
          maxWidth: 650,
          mx: "auto",
          color: "#68776B",
          fontSize: { xs: "0.92rem", md: "1rem" },
          lineHeight: 1.9,
        }}
      >
        From beautifully designed gardens to intelligent irrigation,
        we create outdoor spaces that bring nature and modern living together.
      </Typography>
    </MotionBox>

    {/* Service cards */}
    <Grid container spacing={{ xs: 2.5, md: 3 }}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={3} key={service.title}>
          <MotionCard
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            whileHover={{
              y: -8,
              transition: { duration: 0.25 },
            }}
            viewport={{ once: true, amount: 0.2 }}
            sx={{
              height: "100%",
              minHeight: { xs: 250, md: 280 },
              maxWidth: { xs: 250, md: 320 },
              position: "relative",
              overflow: "hidden",
              borderRadius: "22px",
              bgcolor: "#FFFFFF",
              border: "1px solid #E2EBE3",
              boxShadow: "0 5px 22px rgba(24,65,34,0.055)",
              transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              "&:hover": {
                boxShadow: "0 16px 38px rgba(24,65,34,0.13)",
                borderColor: "#A5D6A7",
              },
              "&:hover .service-icon": {
                bgcolor: "#2E7D32",
                color: "#FFFFFF",
                transform: "scale(1.07) rotate(-4deg)",
              },
              "&:hover .service-arrow": {
                transform: "translateX(5px)",
                color: "#2E7D32",
              },
            }}
          >
            {/* Top accent */}
            <Box
              sx={{
                height: 4,
                background: "linear-gradient(90deg, #1B5E20, #81C784)",
              }}
            />

            <CardContent
              sx={{
                p: { xs: 3, md: 3.2 },
                "&:last-child": { pb: 3.2 },
              }}
            >
              {/* Icon and number */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <MotionBox
                  className="service-icon"
                  whileHover={{ scale: 1.07 }}
                  sx={{
                    width: 66,
                    height: 66,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "18px",
                    bgcolor: "#EAF5EB",
                    color: "#2E7D32",
                    transition: "all 0.3s ease",
                  }}
                >
                  {React.cloneElement(service.icon, {
                    sx: { fontSize: 35 },
                  })}
                </MotionBox>

                <Typography
                  sx={{
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    color: "#E5EEE6",
                    lineHeight: 1,
                  }}
                >
                  0{index + 1}
                </Typography>
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontSize: { xs: "1.15rem", md: "1.2rem" },
                  fontWeight: 750,
                  color: "#1D3925",
                  mb: 1.3,
                  lineHeight: 1.4,
                }}
              >
                {service.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: "0.91rem",
                  color: "#718075",
                  lineHeight: 1.8,
                  minHeight: { sm: 78 },
                }}
              >
                {service.description}
              </Typography>

              {/* Bottom detail */}
              <Box
                sx={{
                  mt: 2.5,
                  pt: 2,
                  borderTop: "1px solid #EDF2ED",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
              </Box>
            </CardContent>
          </MotionCard>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

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
                  align:"center",
                  mb:4
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