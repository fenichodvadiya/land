import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Tooltip,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Menu,
  MenuItem,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ImageIcon from "@mui/icons-material/Image";
import BuildIcon from "@mui/icons-material/Build";
import PhoneIcon from "@mui/icons-material/Phone";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import About from "./About";
import logo from "../pic/logo5.png";
import "./EverMain.css";
import Login from "./Login";
function NavBar() {
  const navigate = useNavigate();
 const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = React.useState(false);
const location = useLocation();
const isActive = (path) => location.pathname === path;

const [openLogin, setOpenLogin] = React.useState(!user);
const [showLoginButton, setShowLoginButton] =React.useState(true);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const openmenu = () => {
    setOpen(!open);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    handleCloseUserMenu();

    window.location.reload();
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={3}
        sx={{
          backgroundColor: "#F5F7F4",
          height: { xs: 70, sm: 80, md: 100 },
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, md: 6 },
          }}
        >
          {/* Mobile Menu */}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#2E7D32",
            }}
            onClick={openmenu}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          {/* Logo */}
          <Box>
            <img
              src={logo}
              alt="EverGreen Logo"
              style={{
                height: "auto",
                maxHeight: "70px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            />
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span
              className="text"
              onClick={() => navigate("/home")}
            >
              Home
            </span>

            <span className="text" onClick={() =>
                navigate("/About")}>
              About
            </span>

            <span
              className="text"
              onClick={() =>
                navigate("/Gallary")
              }
            >
              Gallery
            </span>

            <span
              className="text"
              onClick={() =>
                navigate("/Service")
              }
            >
              Services
            </span>

            <span
              className="text"
              onClick={() =>
                navigate("/Contact")
              }
            >
              Contact
            </span>
          </Box>

          {/* Login / Avatar */}
         <Box>
  {user ? (
    <>
      <Tooltip title="Profile">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar sx={{ bgcolor: "#2E7D32" }}>
            {user?.name?.charAt(0)?.toUpperCase()}
          </Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem disabled>
          {user?.name}
        </MenuItem>

        <MenuItem onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </>
  ) : (
    showLoginButton && (
      <Button
        variant="contained"
        sx={{
          bgcolor: "#2E7D32",
          borderRadius: "20px",
        }}
        onClick={() =>
          setOpenLogin(true)
        }
      >
        Login
      </Button>
    )
  )}
</Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
     <Drawer
  anchor="right"
  open={open}
  onClose={openmenu}
  PaperProps={{
    sx: {
      width: 260,
      borderTopLeftRadius: 16,
      borderBottomLeftRadius: 16,
    },
  }}
>
  {/* Header */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      p: 2,
      borderBottom: "1px solid #eee",
    }}
  >
    <Typography fontWeight="bold" color="#2E7D32">
      Menu
    </Typography>

    <IconButton onClick={openmenu}>
      <CloseIcon />
    </IconButton>
  </Box>

  {/* Menu Items */}
  <Box sx={{ p: 2 }}>

    {/* Home */}
    <Box
      onClick={() => {
        navigate("/home");
        setOpen(false);
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 1.5,
        borderRadius: 2,
        cursor: "pointer",
        bgcolor: isActive("/home") ? "#e8f5e9" : "transparent",
        color: isActive("/home") ? "#2E7D32" : "inherit",
        "&:hover": { bgcolor: "#f5f5f5" },
      }}
    >
      <HomeIcon />
      <Typography>Home</Typography>
    </Box>

    {/* About */}
    <Box
      onClick={() => {
        navigate("/About");
        setOpen(false);
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 1.5,
        borderRadius: 2,
        cursor: "pointer",
        bgcolor: isActive("/About") ? "#e8f5e9" : "transparent",
        color: isActive("/About") ? "#2E7D32" : "inherit",
        "&:hover": { bgcolor: "#f5f5f5" },
      }}
    >
      <InfoIcon />
      <Typography>About</Typography>
    </Box>

    {/* Gallery */}
    <Box
      onClick={() => {
        navigate("/Gallary");
        setOpen(false);
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 1.5,
        borderRadius: 2,
        cursor: "pointer",
        bgcolor: isActive("/Gallary") ? "#e8f5e9" : "transparent",
        color: isActive("/Gallary") ? "#2E7D32" : "inherit",
        "&:hover": { bgcolor: "#f5f5f5" },
      }}
    >
      <ImageIcon />
      <Typography>Gallery</Typography>
    </Box>

    {/* Services */}
    <Box
      onClick={() => {
        navigate("/Service");
        setOpen(false);
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 1.5,
        borderRadius: 2,
        cursor: "pointer",
        bgcolor: isActive("/Service") ? "#e8f5e9" : "transparent",
        color: isActive("/Service") ? "#2E7D32" : "inherit",
        "&:hover": { bgcolor: "#f5f5f5" },
      }}
    >
      <BuildIcon />
      <Typography>Services</Typography>
    </Box>

    {/* Contact */}
    <Box
      onClick={() => {
        navigate("/Contact");
        setOpen(false);
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 1.5,
        borderRadius: 2,
        cursor: "pointer",
        bgcolor: isActive("/Contact") ? "#e8f5e9" : "transparent",
        color: isActive("/Contact") ? "#2E7D32" : "inherit",
        "&:hover": { bgcolor: "#f5f5f5" },
      }}
    >
      <PhoneIcon />
      <Typography>Contact</Typography>
    </Box>

  </Box>
</Drawer>
<Login
  open={openLogin}
  handleClose={() => setOpenLogin(false)}
/>
    </Box>
  );
}

export default NavBar;