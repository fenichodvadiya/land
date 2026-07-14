import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../Api/Axious";
import Counter from "./Counter";
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
import CarouselGal from "./CarouselGal";
import { useNavigate } from "react-router-dom";
import contact from "./Contact"
import ParkIcon from "@mui/icons-material/Park";
import GrassIcon from "@mui/icons-material/Grass";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ForestIcon from "@mui/icons-material/Forest";
const MotionBox = motion.create(Box);
function Home() {
    const [advertisement, setAdvertisement] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdvertisement = async () => {
            try {
                const res = await API.get(
                    "https://land-8m43.onrender.com/Advertisement/GetAdver"
                );

                setAdvertisement(res.data.msg || []);

            } catch (err) {
                setAdvertisement([]);
            }
        };

        fetchAdvertisement();

    }, []);

    const services = [
        { title: "Garden Design", icon: <ParkIcon />, desc: "Modern landscape planning" },
        { title: "Lawn Care", icon: <GrassIcon />, desc: "Clean & healthy maintenance" },
        { title: "Water System", icon: <WaterDropIcon />, desc: "Smart irrigation setup" },
        { title: "Tree Plantation", icon: <ForestIcon />, desc: "Eco-friendly greenery" },
    ];

    return (
        <Box sx={{ background: "#fafafa" }}>

            {/* HERO */}
            <CarouselGal />

            {/* TITLE */}
            <Container sx={{ py: 10 }}>

                <MotionBox

                    initial={{
                        opacity: 0,
                        y: 100
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 1.5
                    }}


                >


                    <Typography
                        variant="h3"
                        textAlign="center"
                        fontWeight="bold"
                        color="#2e7d32"
                    >

                        EVERGREEN LANDSCAPE SERVICES

                    </Typography>



                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{
                            mt: 2,
                            maxWidth: 800,
                            mx: "auto",
                            lineHeight: 2
                        }}

                    >

                        We create beautiful, modern and sustainable outdoor environments with professional landscaping solutions.

                    </Typography>


                </MotionBox>


            </Container>

            {/* SERVICES */}
            {/* ADVERTISEMENT */}

            <Counter />
            {/* ADVERTISEMENT */}

            <Container sx={{ pb: 8 }}>


                <Typography
                    variant="h4"
                    fontWeight="bold"
                    textAlign="center"
                    mb={5}
                    color="#2e7d32"
                    sx={{ margin: 5 }}
                >
                    OUR WORK
                </Typography>



                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                >


                    {
                        advertisement.slice(0, 6).map((item) => (


                            <Grid
                                item
                                key={item._id}
                            >


                                <Card

                                    sx={{

                                        width: {
                                            xs: "300px",
                                            sm: "350px",
                                            md: "550px"
                                        },

                                        height: "400px",

                                        borderRadius: 4,

                                        overflow: "hidden",

                                        boxShadow: 3,

                                        transition: "0.3s",

                                        "&:hover": {

                                            transform: "translateY(-8px)",

                                            boxShadow: 8

                                        }

                                    }}

                                >


                                    <Box

                                        component="img"

                                        src={` https://land-8m43.onrender.com/uploads/${item.image}`}

                                        alt="advertisement"

                                        sx={{

                                            width: "100%",

                                            height: "260px",

                                            objectFit: "cover"

                                        }}

                                    />



                                    <CardContent

                                        sx={{

                                            textAlign: "center",

                                            p: 3

                                        }}

                                    >


                                        <Typography

                                            variant="h5"

                                            fontWeight="bold"

                                            color="#2e7d32"

                                        >

                                            {item.title || "Evergreen Work"}

                                        </Typography>



                                        <Typography

                                            variant="body1"

                                            color="text.secondary"

                                            mt={1}

                                        >

                                            {item.description || "Professional landscaping solutions"}

                                        </Typography>


                                    </CardContent>


                                </Card>



                            </Grid>


                        ))

                    }


                </Grid>


            </Container>

            {/* CTA */}
            <Box sx={{ background: "#e8f5e9", py: 6 }}>
                <Container sx={{ textAlign: "center" }}>
                    <Typography variant="h5" fontWeight="bold">
                        Let’s Build Your Dream Garden
                    </Typography>

                    <Typography color="text.secondary" mt={1}>
                        Contact us for professional landscaping solutions
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            mt: 3,
                            background: "#2e7d32",
                            px: 4,
                            borderRadius: "25px",
                            textTransform: "none",
                            "&:hover": { background: "#1b5e20" },
                        }}
                        onClick={() => {
                            navigate("/Contact");
                        }}
                    >
                        Contact Us
                    </Button>
                </Container>
            </Box>

            {/* FOOTER */}
            <Box sx={{ background: "#1b5e20", color: "white", py: 4 }}>
                <Container>
                    <Typography textAlign="center" fontSize="0.9rem">
                        © {new Date().getFullYear()} Evergreen Landscape. All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}

export default Home;