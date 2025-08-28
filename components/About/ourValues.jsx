"use client";

import { Box, Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import StarIcon from "@mui/icons-material/Star";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";

const OurMission = () => {
  const missions = [
    {
      title: "Innovation",
      text: "Pushing boundaries with cutting-edge solutions and creative problem-solving.",
      icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
      bg: "linear-gradient(135deg, #3e3eb3, #2d2da9)",
    },
    {
      title: "Excellence",
      text: "Delivering high-quality solutions that exceed expectations.",
      icon: <StarIcon sx={{ fontSize: 40 }} />,
      bg: "linear-gradient(135deg, #0077b6, #023e8a)",
    },
    {
      title: "Collaboration",
      text: "Working together to achieve remarkable results.",
      icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
      bg: "linear-gradient(135deg, #0667d6ff, #118ab2)",
    },
    {
      title: "Integrity",
      text: "Building trust through honesty and transparency.",
      icon: <CircleIcon sx={{ fontSize: 40 }} />,
      bg: "linear-gradient(135deg, #0625d6ff, #118ab2)",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "96%",
        ml: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
        px: 2,
        borderRadius: "20px",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        fontWeight={800}
        sx={{ color: "#fff", mb: 6, textAlign: "center" }}
      >
        Our Mission
      </Typography>

      {/* Matrix 2x2 */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 3,
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {missions.map((item, i) => (
          <Box
            key={i}
            sx={{
              height: "240px",
              background: item.bg,
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#fff",
              p: 3,
              fontSize: "16px",
              fontWeight: 400,
              boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px) scale(1.03)",
              },
            }}
          >
            {/* Icon */}
            <Box sx={{ mb: 1, color: "white" }}>{item.icon}</Box>

            {/* Title */}
            <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
              {item.title}
            </Typography>

            {/* Text */}
            <Typography variant="body2">{item.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OurMission;
