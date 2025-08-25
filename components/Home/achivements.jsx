"use client";
import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const achievements = [
    { number: "50+", title: "Clients Worldwide", desc: "Trusted by businesses across industries" },
    { number: "98%", title: "Client Satisfaction", desc: "Based on customer feedback" },
    { number: "24/7", title: "Support Available", desc: "Round-the-clock expert assistance" },
    { number: "10+", title: "Countries Served", desc: "Global presence and impact" },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#0a1128",
        color: "white",
        textAlign: "center",
        py: 8,
        px: { xs: 2, md: 6 },
      }}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Achievements
        </Typography>
        <Typography variant="subtitle1" color="grey.400" gutterBottom>
          Delivering excellence and innovation to businesses worldwide
        </Typography>
      </motion.div>

      {/* Cards */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          mt: 4,
          flexWrap: { xs: "wrap", md: "nowrap" }, // wrap on small, nowrap on desktop
          alignItems: "stretch", // all cards equal height
        }}
        component={motion.div}
        variants={containerVariants}
      >
        {achievements.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={i}
            component={motion.div}
            variants={cardVariants}
            sx={{ display: "flex" }}
          >
            <Card
              component={motion.div}
              whileHover={{
                scale: 1.08,
                rotateX: 8, // ✅ 3D tilt effect
                rotateY: -8,
                boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              sx={{
                bgcolor: "#121e36",
                borderRadius: 3,
                height: "100%",
                width: "100%",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                textAlign: "center",
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transformStyle: "preserve-3d", // ✅ enables 3D effect
                perspective: "1000px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ color: "#1e88e5" }}
                >
                  {item.number}
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="white">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="grey.400">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Achievements;
