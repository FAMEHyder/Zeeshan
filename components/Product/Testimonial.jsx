"use client";

import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Testimonials Array
const testimonials = [
    {
        text: "Accounta has completely transformed how we handle our finances. It's so easy to use, and we've saved countless hours on bookkeeping. The real-time reports help us make better business decisions.",
        name: "Sarah M.",
        role: "Business Owner, Tech Solutions Ltd",
    },
    {
        text: "E-Pharma is exactly what our pharmacy needed. Stock management is a breeze now, and we never miss expiry dates. The prescription management system is particularly impressive.",
        name: "Dr. Ahmed K.",
        role: "Pharmacy Manager, LifeCare Pharmacy",
    },
    {
        text: "Hotel Sync has streamlined our entire operation. From bookings to housekeeping, everything is now perfectly coordinated. Our staff loves how user-friendly it is.",
        name: "Michael R.",
        role: "Hotel Manager, Grand Plaza Hotel",
    },
    {
        text: "The support from NetBots has been exceptional. They really understood our needs and delivered a solution that works perfectly for our business.",
        name: "Lisa T.",
        role: "Operations Director, Global Ventures",
    },
    {
        text: "We've tried several accounting software before, but Accounta is in a league of its own. The automation features have reduced our accounting work by 70%.",
        name: "James W.",
        role: "Finance Manager, Innovation Corp",
    },
    {
        text: "E-Pharma's inventory management is fantastic. We've eliminated stockouts and improved our cash flow significantly since implementing it.",
        name: "Maria H.",
        role: "Pharmacy Owner, MediCare Plus",
    },
    {
        text: "The NetBots team went above and beyond to customize Hotel Sync for our specific needs. Our booking efficiency has improved by 85% since implementation.",
        name: "Robert L.",
        role: "General Manager, Skyline Hotels",
    },
];

export default function TestimonialsSlider() {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <Box>

            <Typography
                variant="h4" textAlign="center" gutterBottom fontWeight={800}
                sx={{
                    color: "#0b147f",
                    mb: { xs: 4, md: 6 },
                    textAlign: "center",
                    fontFamily: "Poppins, sans-serif",
                }}
            >What Our Clients Say</Typography>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ mt: 6, px: 2 }}
            >
                <IconButton onClick={handlePrev}>
                    <ArrowBackIosNewIcon />
                </IconButton>

                {/* Testimonial Box */}
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        maxWidth: "100%",
                        background: "#21499eff",
                        padding: "30px",
                        borderRadius: "16px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="body1" sx={{ fontStyle: "italic", mb: 3, color: "white",fontSize:'20px',fontFamily: "Poppins, sans-serif",}}>
                        "{testimonials[index].text}"
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
                        {testimonials[index].name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "lightgray" }}>
                        {testimonials[index].role}
                    </Typography>
                </motion.div>

                {/* Right Arrow */}
                <IconButton onClick={handleNext}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box>
    );
}
