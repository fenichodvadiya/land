import React, { useEffect, useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import API from "../Api/Axious";
import NavBar from "./NavBar";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";
function HeroSlider() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  // FETCH IMAGES
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await API.get("/Carousel/GetCarousel");

        console.log("Hero Images:", res.data);

        setImages(
          Array.isArray(res.data.msg) ? res.data.msg : []
        );
      } catch (err) {
        console.log("Hero Image Error:", err);
        setImages([]);
      }
    };

    fetchImages();
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  // NEXT
  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // PREVIOUS
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (!images.length) {
    return (
      <Box
        sx={{
          height: { xs: "60vh", md: "85vh" },
          background: "#1b5e20",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography variant="h4">
          Evergreen Landscape Services
        </Typography>
      </Box>
    );
  }

  const image = images[current];

  return (
    <Box
      sx={{
        position: "relative",
        height: {
          xs: "70vh",
          sm: "75vh",
          md: "85vh",
          lg: "90vh",
        },
        minHeight: {
          xs: "500px",
          md: "600px",
        },
        overflow: "hidden",
      }}
    >
      {/* NAVBAR */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
      >
        <NavBar />
      </Box>

      {/* IMAGE */}
      <AnimatePresence mode="wait">
        <motion.img
          key={image._id}
          src={`https://land-8m43.onrender.com/uploads/${image.image}`}
          alt={image.name || "Evergreen Landscape"}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          onError={() =>
            console.log("IMAGE NOT LOADED:", image.image)
          }
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.2))",
          zIndex: 2,
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 5,
          top: "50%",
          left: {
            xs: "6%",
            sm: "8%",
            md: "10%",
          },
          transform: "translateY(-50%)",
          color: "white",
          width: {
            xs: "88%",
            sm: "80%",
            md: "70%",
          },
          maxWidth: {
            xs: "90%",
            sm: "600px",
            md: "650px",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            sx={{
               fontSize: { xs: "1.8rem", md: "3rem" },
                            fontWeight: "bold",
              
            }}
          >
            Evergreen
            <br />
            Landscape Services
          </Typography>

          <Typography

            sx={{
              mt: {
                xs: 1.5,
                md: 2,
              },
              fontSize: {
                xs: "0.85rem",
                sm: "1rem",
                md: "1.2rem",
              },
              lineHeight: 1.6,
              opacity: 0.9,
              maxWidth: {
                xs: "100%",
                md: 550,
              },
            }}>
            We design beautiful, modern and sustainable
            outdoor spaces that bring nature closer to you.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: {
                xs: 2,
                md: 3,
              },
              px: {
                xs: 3,
                md: 4,
              },
              py: {
                xs: 1,
                md: 1.3,
              },
              borderRadius: "30px",
              background: "#2e7d32",
              textTransform: "none",
              fontSize: {
                xs: "0.9rem",
                md: "1rem",
              },
              "&:hover": {
                background: "#1b5e20",
              },
            }}
            onClick={() => navigate("/contact")}
          >
            Get Started
          </Button>
        </motion.div>
      </Box>

      {/* LEFT ARROW */}
      {images.length > 1 && (
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            zIndex: 10,
            left: {
              xs: 5,
              sm: 15,
              md: 25,
            },
            top: "50%",
            transform: "translateY(-50%)",
            width: {
              xs: 38,
              md: 48,
            },
            height: {
              xs: 38,
              md: 48,
            },
            top: "50%",
            color: "white",
            border: "1px solid rgba(255,255,255,0.5)",
            background: "rgba(0,0,0,0.25)",
            "&:hover": {
              background: "rgba(0,0,0,0.5)",
            },
          }}
        >
          <ChevronLeft />
        </IconButton>
      )}

      {/* RIGHT ARROW */}
      {images.length > 1 && (
        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            zIndex: 10,
            right: {
              xs: 5,
              sm: 15,
              md: 25,
            },
            top: "50%",
            transform: "translateY(-50%)",
            width: {
              xs: 38,
              md: 48,
            },
            height: {
              xs: 38,
              md: 48,
            },
            top: "50%",
            color: "white",
            border: "1px solid rgba(255,255,255,0.5)",
            background: "rgba(0,0,0,0.25)",
            "&:hover": {
              background: "rgba(0,0,0,0.5)",
            },
          }}
        >
          <ChevronRight />
        </IconButton>
      )}

      {/* DOTS */}
      {images.length > 1 && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 10,
            bottom: 25,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrent(index)}
              sx={{
                width: current === index ? 30 : 9,
                height: 9,
                borderRadius: "10px",
                background:
                  current === index
                    ? "#fff"
                    : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "0.3s",
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default HeroSlider;