"use client";
import React, { useEffect, useState, useRef } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const stats = [
  { value: 12, suffix: "+", label: "Team Members" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support" },
];

const Counter = ({ value, suffix, label, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    if (inView) {
      setCount(0); // reset counter
      let start = 0;
      const duration = 2000; // 2 seconds
      const stepTime = Math.max(Math.floor(duration / value), 10); // avoid too small interval

      timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= value) clearInterval(timer);
      }, stepTime);
    }
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <Box textAlign="center" p={2}>
      <Typography
        variant="h3"
        fontWeight="bold"
        color="white"
        fontFamily="Poppins, sans-serif"
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        {count}
        {suffix}
      </Typography>
      <Typography
        variant="body1"
        color="white"
        fontFamily="Poppins, sans-serif"
      >
        {label}
      </Typography>
    </Box>
  );
};

export default function StatsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setInView(entries[0].isIntersecting); // update every time section enters/exits
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="stats-section"
      ref={sectionRef}
      sx={{
        py: 6,
        px: 2,
        background: "linear-gradient(180deg, #002B45, #001829)",
        textAlign: "center",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid key={index} item xs={6} md={3}>
            <Counter {...stat} inView={inView} />
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="h4"
        mt={6}
        fontWeight="bold"
        color="#2196f3"
        fontFamily="Poppins, sans-serif"
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
      >
        Join Our Journey
      </Typography>

      <Typography
        variant="body1"
        mt={2}
        color="gray"
        fontFamily="Poppins, sans-serif"
      >
        Be part of our mission to revolutionize the digital landscape. <br />
        Let's create something extraordinary together.
      </Typography>

      <Box mt={4} display="flex" justifyContent="center" gap={2} flexWrap="wrap">
        <Button
          variant="contained"
          sx={{
            background: "#1976d2",
            fontFamily: "Poppins, sans-serif",
            borderRadius: "10px",
            "&:hover": { background: "#1565c0" },
          }}
        >
          View Careers
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#2196f3",
            borderColor: "#2196f3",
            fontFamily: "Poppins, sans-serif",
            borderRadius: "10px",
            "&:hover": {
              borderColor: "#1565c0",
              color: "#1565c0",
            },
          }}
        >
          Chat with Us
        </Button>
      </Box>
    </Box>
  );
}
