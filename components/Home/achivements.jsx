import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";

const Achievements = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0a1128", // dark navy background
        color: "white",
        textAlign: "center",
        py: 8,
      }}
    >
      {/* Heading */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Our Achievements
      </Typography>
      <Typography variant="subtitle1" color="grey.400" gutterBottom>
        Delivering excellence and innovation to businesses worldwide
      </Typography>

      {/* Cards Section */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ mt: 4, px: 2 }}
      >
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              bgcolor: "#121e36", // dark blue card background
              borderRadius: 3,
              height: "100%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              textAlign: "center",
              p: 2,
            }}
          >
            <CardContent>
              <Typography variant="h4" fontWeight="bold" sx={{ color: "#1e88e5" }}>
                50+
              </Typography>
              <Typography variant="h6" fontWeight="bold" color="white">
                Clients Worldwide
              </Typography>
              <Typography variant="body2" color="grey.400">
                Trusted by businesses across industries
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              bgcolor: "#121e36",
              borderRadius: 3,
              height: "100%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              textAlign: "center",
              p: 2,
            }}
          >
            <CardContent>
              <Typography variant="h4" fontWeight="bold" sx={{ color: "#1e88e5" }}>
                98%
              </Typography>
              <Typography variant="h6" fontWeight="bold" color="white">
                Client Satisfaction
              </Typography>
              <Typography variant="body2" color="grey.400" >
                Based on customer feedback
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              bgcolor: "#121e36",
              borderRadius: 3,
              height: "100%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              textAlign: "center",
              p: 2,
            }}
          >
            <CardContent>
              <Typography variant="h4" fontWeight="bold" sx={{ color: "#1e88e5" }}>
                24/7
              </Typography>
              <Typography variant="h6" fontWeight="bold" color="white">
                Support Available
              </Typography>
              <Typography variant="body2" color="grey.400">
                Round-the-clock expert assistance
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              bgcolor: "#121e36",
              borderRadius: 3,
              height: "100%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              textAlign: "center",
              p: 2,
            }}
          >
            <CardContent>
              <Typography variant="h4" fontWeight="bold" sx={{ color: "#1e88e5" }}>
                10+
              </Typography>
              <Typography variant="h6" fontWeight="bold" color="white">
                Countries Served
              </Typography>
              <Typography variant="body2" color="grey.400">
                Global presence and impact
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Achievements;
