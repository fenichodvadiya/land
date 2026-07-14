import React, { useEffect, useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import { Card, CardMedia, Typography, Container, Button } from "@mui/material";

import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
function Gallary() {
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setShow(true);
    }, []);
    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8000/EverGallery/getGallery"
                );
                setGallery(res.data.msg || []);
            } catch (err) {
                console.log(err);
                setGallery([]);
            } finally {
                setLoading(false);
            }
        };
        fetchGallery();
    }, []);

    return (
        <Box sx={{ background: "#f6f8f6", minHeight: "100vh" }}>

            {/* NAVBAR */}
            <NavBar />

            {/* HERO SECTION */}
            <Box
                sx={{
                    background:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
                    backgroundSize: "cover",
                    marginTop: { xs: 0, md: 0, lg: 13 },
                    backgroundPosition: "center",
                    height: { xs: "40vh", md: "55vh" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "white",
                    px: 2,
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontSize: { xs: "1.8rem", md: "3rem" },
                            fontWeight: "bold",
                        }}
                    >
                        Evergreen Landscape Gallery
                    </Typography>

                    <Typography
                        sx={{
                            mt: 1,
                            maxWidth: 600,
                            mx: "auto",
                            opacity: 0.9,
                        }}
                    >
                        Explore our beautiful garden designs, modern landscapes and
                        eco-friendly outdoor transformations.
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            mt: 3,
                            background: "#2e7d32",
                            borderRadius: "25px",
                            px: 4,
                            textTransform: "none",
                            "&:hover": { background: "#1b5e20" },
                        }}
                       onClick={() => {
                            navigate("/Contact");   
                       }}
                    >
                        Contact Us
                    </Button>
                </Box>
            </Box>

            {/* CONTENT */}
            <Container sx={{ py: 6 }}>
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    textAlign="center"
                    color="#2e7d32"
                    mb={4}
                    sx={{
                        transform: show ? "translateY(0)" : "translateY(-50px)",
                        opacity: show ? 1 : 0,
                        transition: "all 0.6s ease",
                    }}
                >
                    OUR PROJECT GALLERY
                </Typography>

                {/* GRID */}
                {loading ? (
                    <Typography align="center">Loading gallery...</Typography>
                ) : gallery.length === 0 ? (
                    <Typography align="center">No images found</Typography>
                ) : (
                    <Box
                        sx={{
                            display: "grid",
                            gap: 2,
                            gridTemplateColumns: {
                                xs: "repeat(2, 1fr)",
                                sm: "repeat(3, 1fr)",
                                md: "repeat(3, 1fr)",
                            },
                        }}
                    >
                        {gallery.map((item) => (
                            <Card
                                key={item._id}
                                sx={{
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    height: 260,
                                    boxShadow: 2,
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "scale(1.03)",
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        src={`http://localhost:8000/uploads/${item.image}`}
                                        alt={item.name}
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />

                                    {/* OVERLAY */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            background:
                                                "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                                            color: "#fff",
                                            p: 1,
                                            opacity: 0,
                                            transition: "0.3s",
                                            "&:hover": { opacity: 1 },
                                        }}
                                    >
                                        <Typography fontSize="0.85rem" fontWeight={500} noWrap sx={{ fontFamily: "revert-layer", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                            {item.name}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                        ))}
                    </Box>
                )}
            </Container>
        </Box>
    );
}

export default Gallary;