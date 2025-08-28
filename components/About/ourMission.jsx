"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const OurMission = () => {
  // Container for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  // Each box animation
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "96%",
        ml: { xs: 1, sm: 2, md: 3 },
        background: "linear-gradient(135deg, #0e114fff, #1d3557)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
        px: 2,
        borderRadius: "20px",
      }}
    >
      {/* Heading with animation */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h3"
          fontWeight={800}
          sx={{
            color: "#fff",
            mb: 6,
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Our Mission
        </Typography>
      </motion.div>

      {/* 2x2 Grid with stagger */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr", // <-- 2 by 2 layout
          gap: "24px",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {[
          "To empower businesses through innovative software solutions and digital transformation, making technology accessible and impactful for organizations of all sizes.",
          "To be the leading force in digital transformation, creating intelligent solutions that shape the future of business and technology in Pakistan and beyond.",
          "To drive growth and efficiency by delivering smart, scalable, and secure digital solutions that transform the way businesses operate.",
          "To bridge the gap between technology and business needs, creating solutions that are practical, reliable, and future-ready.",
        ].map((text, i) => (
          <motion.div key={i} variants={itemVariants}>
            <Box
              sx={{
                height: "220px",
                background: "linear-gradient(135deg, #05054fff, #020255ff)",
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
                p: 2,
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: 500,
                boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {text}
            </Box>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default OurMission;
