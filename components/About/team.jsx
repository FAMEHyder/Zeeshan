"use client";

import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const team = {
  leadership: [
    { name: "Saqlain Shah", role: "Founder & CEO" },
    { name: "Karamat Ali", role: "COO" },
    { name: "M Abdullah", role: "Team Lead" },
  ],
  development: [
    { name: "Shehbaz Alam", role: "Full Stack Developer" },
    { name: "M Rafiq", role: "Full Stack Developer" },
    { name: "Farukh Hussain", role: "Full Stack Developer" },
  ],
};

const TeamSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0b1320",
        color: "white",
        py: 8,
        px: { xs: 2, md: 8 },
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", mb: 6 }}
      >
        Our Team
      </Typography>

      {/* Leadership Section */}
      <Typography
        variant="h5"
        sx={{ textAlign: "left", color: "#0d6efd", mb: 2, fontWeight: "bold" }}
      >
        Leadership
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          mb: 6,
        }}
      >
        {team.leadership.map((member, index) => (
          <Card
            key={index}
            sx={{
              flex: "1 1 300px",
              bgcolor: "#1c2536",
              borderRadius: 3,
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {member.name}
              </Typography>
              <Typography variant="body1" sx={{ color: "#0d6efd" }}>
                {member.role}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Development Team Section */}
      <Typography
        variant="h5"
        sx={{ textAlign: "left", color: "#0d6efd", mb: 2, fontWeight: "bold" }}
      >
        Development Team
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {team.development.map((member, index) => (
          <Card
            key={index}
            sx={{
              flex: "1 1 300px",
              bgcolor: "#1c2536",
              borderRadius: 3,
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {member.name}
              </Typography>
              <Typography variant="body1" sx={{ color: "#0d6efd" }}>
                {member.role}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TeamSection;
