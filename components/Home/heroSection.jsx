"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";

function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        background: "linear-gradient(90deg, #0a2342, #0f3460)", // exact dark blue gradient
        color: "#fff",
      }}
    >
      {/* Title */}
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          mb: 2,
          fontSize: { xs: "2rem", md: "3.5rem" },
        }}
      >
        Transform Your Business with{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(90deg, #1d8cf8, #00c6ff)", // gradient text for NetBots
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          NetBots
        </Box>
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h6"
        sx={{
          maxWidth: "700px",
          mb: 4,
          color: "rgba(255,255,255,0.8)", // softer white
        }}
      >
        Innovative software solutions powered by AI and automation to streamline
        your operations and drive growth.
      </Typography>

      {/* Buttons */}
      <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
        <Button
          variant="contained"
          sx={{
            bgcolor: "#007bff", // bright blue button
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": { bgcolor: "#0056b3" },
          }}
        >
          Our Products
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#fff",
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": {
              borderColor: "#1d8cf8",
              color: "#1d8cf8",
            },
          }}
        >
          Our Services
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
