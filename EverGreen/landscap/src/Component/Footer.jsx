import React from "react";
import './Footer.css'
import logo from '../pic/003.jpg'
import Grass from '../pic/Grass.jpg'
import { Box, Grid, Typography, Divider } from "@mui/material";
function Footer() {
    return (
        <>
            <Box component="footer"
                sx={{
                    backgroundImage:`url(${Grass})`,
                    backgroundSize:'cover',
                    color: "#fff",
                    width:"100%",
                    px: { xs: 2, sm: 6 },
                    py: 8,
                    boxSizing:"border-box"
                }}
            >
                <Grid container spacing={4} alignItems="center"  justifyContent="space-around" sx={{ px: { xs: 2, sm: 6 } }}>
                    <Grid xs={12} md={4}>
                        <Typography variant="h5" sx={{ color: "#C8E6C9", mb: 1 }}>Contact Us</Typography>
                        <Typography variant="h6">📞 +91 XXXXXXXXXX</Typography>
                        <Typography variant="h6">📧 info@evergreenlandscape.com</Typography>
                        <Typography variant="h6">📍 Your Address Here</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} textAlign="center">
                        <img src={logo} style={{height:"150px"}}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ color: "#C8E6C9", mb: 1 }}>
            Services
          </Typography>
          <Typography>Landscape Design</Typography>
          <Typography>Garden Maintenance</Typography>
          <Typography>Tree Care</Typography>
        </Grid>
                </Grid>
            </Box>
            </>
    )
}
export default Footer;