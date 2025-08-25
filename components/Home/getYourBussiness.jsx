"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button
} from "@mui/material";
import { motion } from "framer-motion";

const API_KEY = "YOUR_GOOGLE_API_KEY"; // <- replace with your key
const PLACE_ID = "YOUR_GOOGLE_PLACE_ID"; // <- replace with your place id

const GetYourBusiness = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`
        );
        const data = await res.json();
        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  // Animation Variants
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

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        background: "linear-gradient(90deg, #0c3567ff, #0a2342)",
        color: "#fff",
        py: 6,
      }}
    >
      {/* Heading */}
      <Grid component={motion.div} variants={childVariants}>
        <Typography fontWeight={800} fontSize={{ xs: "24px", md: "32px" }} gutterBottom>
          Ready to Transform Your Business?
        </Typography>
        <Typography fontSize={{ xs: "16px", md: "20px" }} color="gray">
          Join hundreds of businesses that have already transformed their operations with NetBots
        </Typography>
      </Grid>

      {/* Buttons */}
      <Box
        display="flex"
        gap={2}
        flexWrap="wrap"
        justifyContent="center"
        mt={5}
        component={motion.div}
        variants={childVariants}
      >
        {/* View Products Button */}
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#007bff",
              px: { xs: 3, sm: 4 },
              py: { xs: 1.2, sm: 1.5 },
              fontSize: { xs: "0.9rem", sm: "1rem" },
              fontWeight: 600,
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": { bgcolor: "#0056b3" },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            View Products
          </Button>
        </motion.div>

        {/* View Services Button */}
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              px: { xs: 3, sm: 4 },
              py: { xs: 1.2, sm: 1.5 },
              fontSize: { xs: "0.9rem", sm: "1rem" },
              fontWeight: 600,
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": {
                borderColor: "#1d8cf8",
                color: "#1d8cf8",
              },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            View Services
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default GetYourBusiness;
