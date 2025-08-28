"use client";

import { Box, Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import StarIcon from "@mui/icons-material/Star";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import { motion } from "framer-motion";

const OurValues = () => {
  const missions = [
    {
      title: "Innovation",
      text: "Pushing boundaries with cutting-edge solutions and creative problem-solving.",
      icon: <RocketLaunchIcon sx={{ fontSize: { xs: 35, md: 40 } }} />,
      bg: "linear-gradient(135deg, #1e3a8a, #2563eb)", // navy → royal blue
    },
    {
      title: "Excellence",
      text: "Delivering high-quality solutions that exceed expectations.",
      icon: <StarIcon sx={{ fontSize: { xs: 35, md: 40 } }} />,
      bg: "linear-gradient(135deg, #2563eb, #3b82f6)", // royal blue → bright blue
    },
    {
      title: "Collaboration",
      text: "Working together to achieve remarkable results.",
      icon: <HandshakeIcon sx={{ fontSize: { xs: 35, md: 40 } }} />,
      bg: "linear-gradient(135deg, #1d4ed8, #60a5fa)", // indigo → sky blue
    },
    {
      title: "Integrity",
      text: "Building trust through honesty and transparency.",
      icon: <CircleIcon sx={{ fontSize: { xs: 35, md: 40 } }} />,
      bg: "linear-gradient(135deg, #1e3a8a, #2563eb)", // navy → royal blue
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "96%",
        ml: "auto",
        mr: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, md: 6 },
        px: 2,
        borderRadius: "20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        fontWeight={800}
        sx={{
            color: "#0b147fff",
          mb: { xs: 4, md: 6 },
          textAlign: "center",
            fontFamily: "Poppins, sans-serif",
        }}
      >
        Our Values
      </Typography>

      {/* Matrix 2x2 */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
          },
          gap: { xs: 2, md: 3 },
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {missions.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Box
              sx={{
                height: { xs: "auto", md: "240px" },
                background: item.bg,
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
                p: { xs: 2, md: 3 },
                fontWeight: 400,
                boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.03)",
                },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {/* Icon */}
              <Box sx={{ mb: 1, color: "white" }}>{item.icon}</Box>

              {/* Title */}
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                  mb: 1,
                  fontSize: { xs: "16px", md: "18px" },
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {item.title}
              </Typography>

              {/* Text */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default OurValues;
