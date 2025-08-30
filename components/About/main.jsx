"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const AboutSection = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: "100%",
        background: "linear-gradient(90deg, #f5f1f1ff, #f1f1f2ff)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 4, md: 8 }, // responsive padding
        textAlign: "center",
        overflow: "hidden", // prevent unwanted scroll
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // start above with opacity 0
        whileInView={{ opacity: 1, y: 0 }} // animate into view
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Typography
          sx={{
            mb: 2,
            mt: { xs: 3, sm: 5 },
            fontSize: {
              xs: "2rem",
              sm: "2.8rem",
              md: "3.5rem",
              lg: "4rem",
            },
            lineHeight: 1.2,
            fontWeight: 800,
            color: "#0b147fff",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          About Netbots
        </Typography>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Typography
          sx={{
            maxWidth: { xs: "100%", sm: "90%", md: "800px" },
            px: { xs: 1, sm: 2 },
            mb: { xs: 3, sm: 4 },
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
              md: "1.3rem",
              lg: "1.5rem",
            },
            color: "#103b70ff",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Pioneering the future of software development with innovation and
          excellence.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default AboutSection;
