"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CodeIcon from "@mui/icons-material/Code";
import CheckIcon from "@mui/icons-material/Check";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { motion } from "framer-motion";

const items = [
  {
    icon: <SearchIcon sx={{ fontSize: 50, color: "#1e88e5" }} />,
    title: "Discovery",
    desc: "We analyze your needs and create tailored solution plan.",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 50, color: "#43a047" }} />,
    title: "Development",
    desc: "Our experts build your solution using cutting-edge technology.",
  },
  {
    icon: <CheckIcon sx={{ fontSize: 50, color: "#f4511e" }} />,
    title: "Testing",
    desc: "Rigorous testing ensures quality and reliability.",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 50, color: "#6a1b9a" }} />,
    title: "Deployment",
    desc: "Smooth deployment with minimal disruption to your business.",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 50, color: "#00897b" }} />,
    title: "Support",
    desc: "24/7 support and maintenance to ensure optimal performance.",
  },
];

const HowWeDeliver = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Box
      sx={{
        bgcolor: "white", // ✅ background white
        color: "black",
        textAlign: "center",
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
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
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "black" }}
        >
          How We Deliver
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "grey.600" }} gutterBottom>
          Our proven process ensures successful delivery of your software
          solutions
        </Typography>
      </motion.div>

      {/* Items */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ mt: 4 }}
        component={motion.div}
        variants={containerVariants}
      >
        {items.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={2.4} // ✅ even distribution for 5 items
            key={i}
            component={motion.div}
            variants={cardVariants}
            sx={{ display: "flex" }}
          >
            <Box
              component={motion.div}
              whileHover={{
                scale: 1.05,
                y: -6,
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              sx={{
                bgcolor: "white",
                borderRadius: 3,
                height: "100%",
                width: "100%",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                textAlign: "center",
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {item.icon}
              <Typography
                variant="h6"
                fontWeight="bold"
                color="black"
                mt={2}
                mb={1}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.600" }}>
                {item.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowWeDeliver;
