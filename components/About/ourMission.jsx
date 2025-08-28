"use client";

import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const OurMission = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                background: "linear-gradient(135deg, #0a2342, #1d3557)",
                py: 6,
                px: 2,
            }}
        >
            {/* Heading */}
            <Typography
                variant="h3"
                fontWeight={800}
                sx={{ color: "#fff", mb: 6, textAlign: "center" }}
            >
                Our Mission
            </Typography>

            {/* upper 2 boxes */}
            <Grid container >

                <Grid item xs={12} sm={6} md={5}>
                    <Box
                        sx={{
                            height: "200px",
                            width: '50%',
                            bgcolor: "linear-gradient(135deg, #3e3eb3, #2d2da9)",
                            borderRadius: 3,
                            color: "#fff",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                        }}
                    >
                        <Typography>
                            To empower businesses through innovative software solutions and
                            digital transformation, making technology accessible and impactful
                            for organizations of all sizes.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            height: "200px",
                            width: '50%',
                            bgcolor: "linear-gradient(135deg, #0077b6, #023e8a)",
                            borderRadius: 3,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            p: 3,
                            color: "#fff",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                        }}
                    >
                        <Typography>
                            To be the leading force in digital transformation, creating
                            intelligent solutions that shape the future of business and
                            technology in Pakistan and beyond.
                        </Typography>
                    </Box>
                </Grid>

                {/* Box 3 */}
                <Grid item xs={12} sm={6} md={5}>
                    <Box
                        sx={{
                            height: "200px",
                            bgcolor: "linear-gradient(135deg, #06d6a0, #118ab2)",
                            borderRadius: 3,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            p: 3,
                            color: "#fff",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                        }}
                    >
                        <Typography>
                            To cultivate a culture of innovation, creativity, and excellence
                            that inspires our teams and drives lasting impact in every project
                            we deliver.
                        </Typography>
                    </Box>
                </Grid>

                {/* Box 4 */}
                <Grid item xs={12} sm={6} md={5}>
                    <Box
                        sx={{
                            height: "200px",
                            bgcolor: "linear-gradient(135deg, #ef476f, #d62828)",
                            borderRadius: 3,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            p: 3,
                            color: "#fff",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                        }}
                    >
                        <Typography>
                            To build trust and long-term relationships with our clients by
                            consistently delivering value, integrity, and measurable results.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default OurMission;
