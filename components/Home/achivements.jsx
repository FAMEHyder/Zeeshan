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
        overflowX: "auto", // scroll agar jagah kam ho
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
        sx={{ mt: 4, px: 2, flexWrap: "nowrap" }} // wrap disable
      >
        {[
          { number: "50+", title: "Clients Worldwide", desc: "Trusted by businesses across industries" },
          { number: "98%", title: "Client Satisfaction", desc: "Based on customer feedback" },
          { number: "24/7", title: "Support Available", desc: "Round-the-clock expert assistance" },
          { number: "10+", title: "Countries Served", desc: "Global presence and impact" },
        ].map((item, i) => (
          <Grid item xs={3} key={i}>
            <Card
              sx={{
                bgcolor: "#121e36",
                borderRadius: 3,
                height: "100%",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                textAlign: "center",
                p: 2,
                minWidth: 200,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h4" fontWeight="bold" sx={{ color: "#1e88e5" }}>
                  {item.number}
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="white">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="grey.400">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Achievements;
