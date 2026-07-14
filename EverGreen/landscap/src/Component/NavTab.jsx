import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

function NavTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          "& .MuiTab-root": {
            fontSize: "16px",
            fontWeight: 600,
            textTransform: "none",
            color: "#2E7D32",
          },
          "& .Mui-selected": {
            color: "#1B5E20",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#1B5E20",
            height: "3px",
          },
        }}
      >
        <Tab label="Garden Design" />
        <Tab label="Landscape Maintenance" />
        <Tab label="Irrigation System" />
        <Tab label="Tree Plantation" />
        <Tab label="Lawn Care" />
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ p: { xs: 2, md: 4,color:"white" } }}>
        {value === 0 && (
          <Typography>
            Creative garden designs that blend beauty with nature for a
            refreshing outdoor experience.
          </Typography>
        )}

        {value === 1 && (
          <Typography>
            Complete landscape maintenance including trimming, cleaning, and
            seasonal care.
          </Typography>
        )}

        {value === 2 && (
          <Typography>
            Smart irrigation solutions for water-efficient and healthy gardens.
          </Typography>
        )}

        {value === 3 && (
          <Typography>
            Tree plantation services to create greener and sustainable spaces.
          </Typography>
        )}

        {value === 4 && (
          <Typography>
            Professional lawn care services for lush green and healthy grass.
          </Typography>
        )}
      </Box>

        </div>
    )
}
export default NavTab;