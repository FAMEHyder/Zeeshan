"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

const OurMission = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "96%",
        ml:3,
        background: "linear-gradient(135deg, #0e114fff, #1d3557)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
        px: 2,
        borderRadius:'20px 20px 20px 20px',
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
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, // mobile 1x4, desktop 2x2
          gap: 3,
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
          <Box
            key={i}
            sx={{
              height: "220px",
              bgcolor:
                i === 0
                  ? "linear-gradient(135deg, #3e3eb3, #2d2da9)"
                  : i === 1
                  ? "linear-gradient(135deg, #0077b6, #023e8a)"
                  : i === 2
                  ? "linear-gradient(135deg, #06d6a0, #118ab2)"
                  : "linear-gradient(135deg, #ef476f, #d62828)",
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#fff",
              p: 2,
              fontSize: "20px",
              fontWeight: 500,
              boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
            }}
          >
            {text}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OurMission;
