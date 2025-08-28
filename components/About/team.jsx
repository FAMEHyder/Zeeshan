"use client";

import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion"; // 👈 animation import

const MotionCard = motion(Card); // 👈 wrap MUI Card in motion

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
        { name: "Jalal Hussain", role: "Full Stack Developer" },
        { name: "Malika Bano", role: "Web Developer" },
        { name: "Arifa Batool", role: "Web Developer" },
    ],
    Creative_Marketing: [
        { name: "Syed Sibtain", role: "Graphics Designer" },
        { name: "Syed Hasnain", role: "Digital Marketer" },
        { name: "Sania Zahra", role: "Digital Marketer" },
    ],
};

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

            {/* Leadership Section */}
            <Typography
                variant="h5"
                sx={{ textAlign: "left", color: "#0d6efd", mb: 2, fontWeight: "bold" }}
            >
                Leadership
            </Typography>
            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 6 }}>
                {team.leadership.map((member, index) => (
                    <MotionCard
                        key={index}
                        variant="outlined"
                        sx={{
                            flex: "1 1 300px",
                            borderRadius: 3,
                            borderColor: "#3e4248ff",
                            transition: "0.3s",
                            "&:hover": { borderColor: "#084298" },
                        }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#212529" }}>
                                {member.name}
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#070707ff" }}>
                                {member.role}
                            </Typography>
                        </CardContent>
                    </MotionCard>
                ))}
            </Box>

            {/* Development Team Section */}
            <Typography
                variant="h5"
                sx={{ textAlign: "left", color: "#0d6efd", mb: 2, fontWeight: "bold" }}
            >
                Development Team
            </Typography>
            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 6 }}>
                {team.development.map((member, index) => (
                    <MotionCard
                        key={index}
                        variant="outlined"
                        sx={{
                            flex: "1 1 300px",
                            borderRadius: 3,
                            borderColor: "#34373aff",
                            transition: "0.3s",
                            "&:hover": { borderColor: "#084298" },
                        }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#212529" }}>
                                {member.name}
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#060606ff" }}>
                                {member.role}
                            </Typography>
                        </CardContent>
                    </MotionCard>
                ))}
            </Box>

            {/* UI/UX Team Section */}
            <Typography
                variant="h5"
                sx={{ textAlign: "left", color: "#0d6efd", mb: 2, fontWeight: "bold" }}
            >
                UI/UX Team
            </Typography>
            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                {team.Creative_Marketing.map((member, index) => (
                    <MotionCard
                        key={index}
                        variant="outlined"
                        sx={{
                            flex: "1 1 300px",
                            borderRadius: 3,
                            borderColor: "#2c323aff",
                            transition: "0.3s",
                            "&:hover": { borderColor: "#084298" },
                        }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#212529" }}>
                                {member.name}
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#050506ff" }}>
                                {member.role}
                            </Typography>
                        </CardContent>
                    </MotionCard>
                ))}
            </Box>
        </Box>
    );
};

export default TeamSection;
