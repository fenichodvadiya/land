import CountUp from "react-countup";
import { Box, Container, Grid, Typography } from "@mui/material";

function Counter() {
  return (
    <Box
      sx={{
        position: "relative",
        py: 10,
        color: "white",

        // 🔥 scrolling background effect
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* DARK OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={5} textAlign="center">
          
          {/* COUNTER 1 */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold">
              <CountUp start={0} end={500} duration={3} />
              +
            </Typography>

            <Typography sx={{ mt: 1, fontSize: "1.2rem" }}>
              Happy Clients
            </Typography>
          </Grid>

          {/* COUNTER 2 */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold">
              <CountUp start={0} end={500} duration={3} />
              +
            </Typography>

            <Typography sx={{ mt: 1, fontSize: "1.2rem" }}>
              Garden Completed
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Counter;