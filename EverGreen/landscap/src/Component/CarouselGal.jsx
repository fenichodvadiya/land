import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../Api/Axious";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import NavBar from "./NavBar";

function CarouselGal() {
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await API.get(
          "https://land-8m43.onrender.com/Carousel/GetCarousel"
        );
        setCarousel(res.data.msg || []);
      } catch (err) {
        setCarousel([]);
      }
    };
    fetchGallery();
  }, []);

  
  return (
    <Box sx={{ position: "relative" }}>
      
      {/* NAVBAR */}
      <NavBar />

      {/* 🔥 TOP CONTENT OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 10,
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          px: 2,
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.8rem", md: "3rem" },
            fontWeight: "bold",
          }}
        >
          Evergreen Landscape Services
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontSize: { xs: "0.9rem", md: "1.2rem" },
            opacity: 0.85,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          We design beautiful outdoor spaces with modern landscaping solutions.
        </Typography>

        {/* <Button
          variant="contained"
          sx={{
            mt: 3,
            background: "#2e7d32",
            px: 4,
            borderRadius: "30px",
            textTransform: "none",
            "&:hover": {
              background: "#1b5e20",
            },
          }}
        >
          Explore Services
        </Button> */}
      </Box>

      {/* DARK OVERLAY FOR BETTER READABILITY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.25))",
          zIndex: 2,
        }}
      />

      {/* CAROUSEL */}
      <Carousel
       key={carousel.length}  
        autoPlay={true}
        interval={3500}
        infiniteLoop={true}
         transitionTime={800}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        swipeable={true}
        emulateTouch={true}
      >
        {carousel.map((item, index) => (
          <Box key={index}>
            <Box
              component="img"
              src={` https://land-8m43.onrender.com/${item.image}`}
              alt="carousel"
              sx={{
                width: "100%",
                height: { xs: "60vh", md: "85vh" },
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default CarouselGal;