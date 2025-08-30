"use client";
import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Discovery",
    description:
      "Understanding your business needs, goals, and technical requirements through in-depth consultation.",
  },
  {
    number: "2",
    title: "Planning",
    description:
      "Creating detailed project roadmap, architecture design, and technology stack selection.",
  },
  {
    number: "3",
    title: "Development",
    description:
      "Implementing solutions using agile methodology with regular updates and feedback loops.",
  },
  {
    number: "4",
    title: "Testing",
    description:
      "Rigorous quality assurance to ensure reliability, security, and optimal performance.",
  },
];

export default function DevelopmentProcess() {
  return (
    <Box sx={{ bgcolor: "#0d1b2a", color: "white", py: 8, px: { xs: 2, md: 6 } }}>
      {/* Heading */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" color="primary.light">
          Our Development Process
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, color: "gray.300", maxWidth: 600, mx: "auto" }}
        >
          A systematic approach to turning your ideas into reality, ensuring
          quality and efficiency at every step.
        </Typography>
      </Box>

      {/* Steps in one row */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          pb: 2,
          heigth:'200vh',
          "&::-webkit-scrollbar": { display: "none" }, // hide scrollbar
            border:"2px solid red",

          
        }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ minWidth: "250px", flexShrink: 0 }} // prevent wrapping
          >
            <Paper
              elevation={6}
              sx={{
                position: "relative",
                p: 3,
                bgcolor: "#1b263b",
                borderRadius: 3,
                minHeight: 220,
                width:270,
                transition: "0.3s",

                "&:hover": { boxShadow: "0 8px 20px rgba(0,0,0,0.5)" },
                
              }}
            >
                
              {/* Step number circle */}
              <Box
                sx={{
                  position: "absolute",
                  top: -40,
                  left: 1,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  boxShadow: 3,
                  mt:3,
                  zIndex:1,
                }}
              >
                {step.number}
              </Box>

              {/* Step content */}
              <Typography variant="h6" mt={3} fontWeight="bold">
                {step.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "gray.300" }}>
                {step.description}
              </Typography>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
