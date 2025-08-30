"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { ReactTyped } from "react-typed";

const AboutSection = () => {
    return (
        <Box
            sx={{
                minHeight: "90vh",
                width: "100%",
                background: `
      linear-gradient(135deg, #233262ff 0%, #0a429cff 100%),
      url("https://www.transparenttextures.com/patterns/cubes.png")
    `,
                backgroundRepeat: "repeat",
                backgroundSize: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                px: { xs: 2, sm: 4, md: 8 },
                textAlign: "center",
                overflow: "hidden",
            }}

        >
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: -50 }} // start above with opacity 0
                whileInView={{ opacity: 1, y: 0 }} // animate into view
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Typography
                    sx={{
                        mb: 2,
                        mt: { xs: 3, sm: 5 },
                        fontSize: {
                            xs: "2rem",
                            sm: "2.8rem",
                            md: "2.5rem",
                            lg: "4rem",
                        },
                        lineHeight: 1.2,
                        fontWeight: 800,
                        color: "white",
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    <ReactTyped
                        strings={[
                            "Innovative Solutions for Your Business",
                            "Smart Development for Modern Needs",
                            "Turning Ideas Into Reality"
                        ]}
                        typeSpeed={150}     // speed of typing
                        backSpeed={30}     // speed of backspacing
                        loop               // keeps looping
                    />
                </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Typography
                    sx={{
                        maxWidth: { xs: "100%", sm: "90%", md: "800px" },
                        px: { xs: 1, sm: 2 },
                        mb: { xs: 3, sm: 4 },
                        fontSize: {
                            xs: "1rem",
                            sm: "1.2rem",
                            md: "1.3rem",
                            lg: "1.5rem",
                        },
                        color: "lightgray",
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    From accounting to hospitality, our products are designed to streamline your operations and drive growth.
                </Typography>
            </motion.div>
        </Box>
    );
};

export default AboutSection;
