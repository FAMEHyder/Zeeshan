"use client";

import React, { useState, useEffect, } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Button
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const API_KEY = "YOUR_GOOGLE_API_KEY"; // <- replace with your key
const PLACE_ID = "YOUR_GOOGLE_PLACE_ID"; // <- replace with your place id

const getYourBussiness = () => {
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

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        background: "linear-gradient(90deg, #0c3567ff)",
        color: "#fff",
        py: 6,
      }}
    >
      <Grid>
        <Typography fontWeight={800} fontSize={"30px"}>
          Ready to Transform Your Business?
        </Typography>
        <Typography fontSize={"20px"} color="gray">
          Join hundreds of businesses that have already transformed their operations with NetBots
        </Typography>
      </Grid>

      <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center" mt={5}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#007bff", // bright blue button
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": { bgcolor: "#0056b3" },
          }}
        >
          View Products
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#fff",
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": {
              borderColor: "#1d8cf8",
              color: "#1d8cf8",
            },
          }}
        >
          View Services
        </Button>
      </Box>
    </Box>
  );
};

export default getYourBussiness;
