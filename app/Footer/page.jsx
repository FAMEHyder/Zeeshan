"use client";

import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Phone,
  Email,
} from "@mui/icons-material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0f172a", // dark background
        color: "rgba(255,255,255,0.85)",
        py: 6,
        px: { xs: 3, md: 10 },
      }}
    >
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <Box
              component="img"
              src="/Netbots.png"
              alt="NetBots Logo"
              height="40px"
            />
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#fff" }}
            >
              
            </Typography>
          </Box>
          <Typography variant="body2" mb={2}>
            Empowering businesses with cutting-edge software solutions and
            AI-driven innovation.
          </Typography>
          <Box display="flex" gap={1}>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <Facebook />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <Twitter />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <LinkedIn />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <Instagram />
            </IconButton>
          </Box>
        </Grid>

        {/* Middle Section */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={2}
            sx={{ color: "#fff" }}
          >
            Quick Links
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            {[
              "Home",
              "About",
              "Services",
              "Products",
              "Portfolio",
              "Training",
              "Career",
              "Contact",
              "Pricing",
            ].map((link) => (
              <Link
                key={link}
                href="#"
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.75)",
                  transition: "0.3s",
                  "&:hover": { color: "#fff" },
                }}
              >
                {link}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={2}
            sx={{ color: "#fff" }}
          >
            Contact
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            NET BOTS (SMC Private) Ltd
          </Typography>
          <Typography variant="body2" mb={2}>
            Hameed Ghar, District Bar Building, Skardu
          </Typography>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Phone fontSize="small" />
            <Typography variant="body2">
              05815 940502 &nbsp; | &nbsp; +92 343 3757372
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Email fontSize="small" />
            <Typography variant="body2">info@netbots.io</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
