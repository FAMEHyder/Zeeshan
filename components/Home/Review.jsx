"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const API_KEY = "YOUR_GOOGLE_API_KEY"; // <- replace with your key
const PLACE_ID = "YOUR_GOOGLE_PLACE_ID"; // <- replace with your place id

const Review = () => {
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
        background: "#fff", // White background
        color: "#000",
        py: 6,
      }}
    >
      <Grid>
        <Typography fontWeight={800} fontSize={"30px"} color="#111">
          What Our Clients Say
        </Typography>
        <Typography fontSize={"20px"} color="gray">
          Real reviews from our valued clients
        </Typography>
      </Grid>

      <Grid
        container
        spacing={3}
        mt={3}
        justifyContent="center"
        alignItems="stretch"
      >
        {reviews.length > 0 ? (
          reviews.map((review, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "#f9f9f9", // Light gray background for card
                  color: "#111",
                  textAlign: "left",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box>
                  <Typography fontWeight={600} color="#222">
                    {review.author_name}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <StarIcon
                        key={idx}
                        sx={{ color: "#FFD700", fontSize: 20 }}
                      />
                    ))}
                  </Box>
                  <Typography mt={1} fontSize={"14px"} color="gray">
                    {review.relative_time_description}
                  </Typography>
                </Box>

                <Typography mt={2} fontSize={"15px"} color="#333">
                  “{review.text}”
                </Typography>
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography mt={4} color="gray">
            No reviews available (check API key / place id)
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Review;
