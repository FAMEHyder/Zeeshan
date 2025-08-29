"use client";

import React from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import { motion } from "framer-motion"; // 👈 animation import

const MotionCard = motion(Card); // 👈 wrap MUI Card in motion

const team = {
  leadership: [
    { name: "Saqlain Shah", role: "Founder & CEO", image: "/saqlain.jpg" },
    { name: "Karamat Ali", role: "COO" }, // no image
    { name: "M Abdullah", role: "Team Lead", image: "/abdullah.png" },
  ],
  development: [
    { name: "Shehbaz Alam", role: "Full Stack Developer" },
    { name: "M Rafiq", role: "Full Stack Developer" },
    { name: "Farukh Hussain", role: "Full Stack Developer", image: "/farukh.png" },
    { name: "Jalal Hussain", role: "Full Stack Developer" },
    { name: "Malika Bano", role: "Web Developer" },
    { name: "Arifa Batool", role: "Web Developer" },
  ],
  Creative_Marketing: [
    { name: "Syed Sibtain", role: "Graphics Designer" },
    { name: "Syed Hasnain", role: "Digital Marketer", image: "/hasnain.jpg" },
    { name: "Sania Zahra", role: "Digital Marketer" },
  ],
};

// 👇 Member Card
const MemberCard = ({ member, index }) => (
  <MotionCard
    key={index}
    variant="outlined"
    sx={{
      flex: "1 1 250px",
      borderRadius: 3,
      borderColor: "#3e4248ff",
      transition: "0.3s",
      "&:hover": { borderColor: "#084298", transform: "translateY(-5px)" },
      textAlign: "center", // center content
    }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
  >
    <CardContent>
      {/* Avatar: Image if available, otherwise initials */}
      <Avatar
        src={member.image || ""}
        alt={member.name}
        sx={{
          bgcolor: "#0d6efd",
          color: "#fff",
          width: 80,
          height: 80,
          fontWeight: "bold",
          mx: "auto", // center align avatar
          mb: 2,
          fontSize: "1.25rem",
        }}
      >
        {!member.image &&
          member.name
            .split(" ")
            .map((word) => word[0])
            .join("")}{" "}
        {/* Initials */}
      </Avatar>

      {/* Name */}
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#212529" }}>
        {member.name}
      </Typography>

      {/* Role */}
      <Typography variant="body1" sx={{ color: "#070707ff" }}>
        {member.role}
      </Typography>
    </CardContent>
  </MotionCard>
);

const TeamSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f8f9fa",
        py: 8,
        px: { xs: 2, md: 8 },
        textAlign: "center",
      }}
    >
      {/* Title */}
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
        Our Team
      </Typography>

      {/* Leadership */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "left",
          color: "#0d6efd",
          mb: 2,
          fontWeight: "bold",
        }}
      >
        Leadership
      </Typography>
      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 6 }}>
        {team.leadership.map((m, i) => (
          <MemberCard key={i} member={m} index={i} />
        ))}
      </Box>

      {/* Development */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "left",
          color: "#0d6efd",
          mb: 2,
          fontWeight: "bold",
        }}
      >
        Development Team
      </Typography>
      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 6 }}>
        {team.development.map((m, i) => (
          <MemberCard key={i} member={m} index={i} />
        ))}
      </Box>

      {/* Creative/Marketing */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "left",
          color: "#0d6efd",
          mb: 2,
          fontWeight: "bold",
        }}
      >
        UI/UX Team
      </Typography>
      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
        {team.Creative_Marketing.map((m, i) => (
          <MemberCard key={i} member={m} index={i} />
        ))}
      </Box>
    </Box>
  );
};

export default TeamSection;
