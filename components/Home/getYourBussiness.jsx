"use client";

import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

const API_KEY = "YOUR_GOOGLE_API_KEY"; // replace with your key
const PLACE_ID = "YOUR_GOOGLE_PLACE_ID"; // replace with your place id

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
      transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
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
        backgroundColor: "white", // ✅ clean white background
        color: "black",
        py: { xs: 6, md: 10 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Grid component={motion.div} variants={childVariants}>
          <Typography
            fontWeight={800}
            fontSize={{ xs: "24px", sm: "28px", md: "36px" }}
            gutterBottom
          >
            Ready to Transform Your Business?
          </Typography>
          <Typography
            fontSize={{ xs: "14px", sm: "16px", md: "20px" }}
            color="text.secondary"
            maxWidth="800px"
            mx="auto"
          >
            Join hundreds of businesses that have already transformed their
            operations with NetBots
          </Typography>
        </Grid>

        {/* Buttons */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          gap={2}
          justifyContent="center"
          alignItems="center"
          mt={5}
          component={motion.div}
          variants={childVariants}
        >
          {/* View Products Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#007bff",
                px: { xs: 4, sm: 5 },
                py: { xs: 1.3, sm: 1.5 },
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontWeight: 600,
                borderRadius: "10px",
                textTransform: "none",
                "&:hover": { bgcolor: "#0056b3" },
                width: { xs: "100%", sm: "auto" }, // full width on mobile
              }}
            >
              View Products
            </Button>
          </motion.div>

          {/* View Services Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outlined"
              sx={{
                color: "black",
                borderColor: "black",
                px: { xs: 4, sm: 5 },
                py: { xs: 1.3, sm: 1.5 },
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
      </Container>
    </Box>
  );
};

export default GetYourBusiness;
