"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

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
        px: { xs: 2, sm: 3, md: 6 },
        background: "linear-gradient(90deg, #0a2342, #0f3460)",
        color: "#fff",
      }}
    >
      {/* Title */}
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          mb: 2,
          fontSize: {
            xs: "1.8rem", // mobile
            sm: "2.4rem", // tablet
            md: "1rem", // laptop
            lg: "4rem",   // desktop
          },
          lineHeight: 1.2,
          background:
            "linear-gradient(to right, #E0E0E0, #1962ea, #FAFAFA, #dca138, #E0E0E0)",
          backgroundSize: "190% auto",
          fontWeight: 800,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradient 10s linear infinite",
          "@keyframes gradient": {
            "0%": { backgroundPosition: "0% center" },
            "100%": { backgroundPosition: "200% center" },
          },
        }}
      >
        Transform Your Business with Netbots
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h6"
        sx={{
          maxWidth: { xs: "100%", sm: "90%", md: "700px" },
          mb: { xs: 3, sm: 4 },
          fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Innovative software solutions powered by AI and automation to streamline
        your operations and drive growth.
      </Typography>

      {/* Buttons */}
      <Box
        display="flex"
        gap={2}
        flexDirection={{ xs: "column", sm: "row" }}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Our Products Button */}
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#007bff",
              px: { xs: 3, sm: 4 },
              py: { xs: 1.2, sm: 1.5 },
              fontSize: { xs: "0.9rem", sm: "1rem" },
              fontWeight: 600,
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": { bgcolor: "#0056b3" },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Our Products
          </Button>
        </motion.div>

        {/* Our Services Button */}
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              px: { xs: 3, sm: 4 },
              py: { xs: 1.2, sm: 1.5 },
              fontSize: { xs: "0.9rem", sm: "1rem" },
              fontWeight: 600,
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": {
                borderColor: "#1d8cf8",
                color: "#1d8cf8",
              },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Our Services
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}

export default HeroSection;
