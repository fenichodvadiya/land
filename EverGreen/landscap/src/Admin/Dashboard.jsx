import * as React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { createTheme } from "@mui/material/styles";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Grid,
  Avatar,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";

import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";

import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import CampaignIcon from "@mui/icons-material/Campaign";
import LogoutIcon from "@mui/icons-material/Logout";

import GallaryForm from "./GallaryForm";
import CarouselAdd from "./CarouselAdd";
import Advertisement from "./Advertisement";
const NAVIGATION = [
  {
    segment: "gallery",
    title: "Gallery",
    icon: <PhotoLibraryIcon />,
  },
  {
    segment: "carousel",
    title: "Carousel",
    icon: <ViewCarouselIcon />,
  },
  {
    segment: "advertisement",
    title: "Advertisement",
    icon: <CampaignIcon />,
  },
];
const demoTheme = createTheme({
  palette: {
    primary: {
      main: "#15803d",
    },
    background: {
      default: "#f5f5f5",
    },
  },

  typography: {
    fontFamily: "Poppins",
  },
});
function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  return React.useMemo(
    () => ({
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(path),
    }),
    [pathname]
  );
}
export default function Dashboard(props) {

  const navigate = useNavigate();

  const { window } = props;

  const router = useDemoRouter("/dashboard");

  const demoWindow = window ? window() : undefined;

  const [anchorEl, setAnchorEl] = React.useState(null);

  // const admin = JSON.parse(localStorage.getItem("admin"));

  // const token = localStorage.getItem("adminToken");

  // if (!admin || !token) {
  //   return <Navigate to="/adminlogin" replace />;
  // }
  //   const handleMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const admin = {
  name: "EvergreenOwner",
  email: "admin@gmail.com",
};
const handleMenuOpen = (event) => {
  setAnchorEl(event.currentTarget);
};

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("adminToken");

    navigate("/adminlogin");
  };
    return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>

        <PageContainer>

          {/* Header */}

          <Box
            sx={{
              mb: 4,
              p: 4,
              borderRadius: 4,
              background: "linear-gradient(135deg,#15803d,#22c55e)",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: 4,
            }}
          >

            <Box>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                Welcome {admin.name} 👋
              </Typography>

              <Typography sx={{ mt: 1 }}>
                Manage Evergreen Landscape Website
              </Typography>

            </Box>

            <Box>

              <Tooltip title={admin.name}>

                <IconButton onClick={handleMenuOpen}>

                  <Avatar
                    sx={{
                      bgcolor: "#fff",
                      color: "#15803d",
                      width: 55,
                      height: 55,
                      fontWeight: "bold",
                    }}
                  >
                    {admin.name.charAt(0).toUpperCase()}
                  </Avatar>

                </IconButton>

              </Tooltip>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >

                <MenuItem disabled>
                  {admin.name}
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleLogout();
                    handleMenuClose();
                  }}
                >
                  <LogoutIcon sx={{ mr: 1 }} />
                  Logout
                </MenuItem>

              </Menu>

            </Box>

          </Box>

          {/* Cards */}

          <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>

              <Card
                onClick={() => router.navigate("/gallery")}
                sx={{
                  cursor: "pointer",
                  borderRadius: 4,
                  transition: ".3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >

                <CardContent>

                  <Stack direction="row" spacing={2} alignItems="center">

                    <Avatar
                      sx={{
                        bgcolor: "#15803d",
                        width: 60,
                        height: 60,
                      }}
                    >
                      <PhotoLibraryIcon />
                    </Avatar>

                    <Box>

                      <Typography variant="h6" fontWeight="bold">
                        Gallery
                      </Typography>

                      <Typography color="text.secondary">
                        Add / Edit / Delete Images
                      </Typography>

                    </Box>

                  </Stack>

                </CardContent>

              </Card>

            </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>

              <Card
                onClick={() => router.navigate("/carousel")}
                sx={{
                  cursor: "pointer",
                  borderRadius: 4,
                  transition: ".3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >

                <CardContent>

                  <Stack direction="row" spacing={2} alignItems="center">

                    <Avatar
                      sx={{
                        bgcolor: "#2563eb",
                        width: 60,
                        height: 60,
                      }}
                    >
                      <ViewCarouselIcon />
                    </Avatar>

                    <Box>

                      <Typography variant="h6" fontWeight="bold">
                        Carousel
                      </Typography>

                      <Typography color="text.secondary">
                        Manage Slider Images
                      </Typography>

                    </Box>

                  </Stack>

                </CardContent>

              </Card>

            </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>

              <Card
                onClick={() => router.navigate("/advertisement")}
                sx={{
                  cursor: "pointer",
                  borderRadius: 4,
                  transition: ".3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >

                <CardContent>

                  <Stack direction="row" spacing={2} alignItems="center">

                    <Avatar
                      sx={{
                        bgcolor: "#dc2626",
                        width: 60,
                        height: 60,
                      }}
                    >
                      <CampaignIcon />
                    </Avatar>

                    <Box>

                      <Typography variant="h6" fontWeight="bold">
                        Advertisement
                      </Typography>

                      <Typography color="text.secondary">
                        Add / Edit / Delete Ads
                      </Typography>

                    </Box>

                  </Stack>

                </CardContent>

              </Card>

            </Grid>

          </Grid>
                    <Box sx={{ mt: 4 }}>

            {router.pathname === "/gallery" && (
              <GallaryForm />
            )}

            {router.pathname === "/carousel" && (
              <CarouselAdd />
            )}

            {router.pathname === "/advertisement" && (
              <Advertisement />
            )}

          </Box>
                  </PageContainer>

      </DashboardLayout>

    </AppProvider>
  );
}