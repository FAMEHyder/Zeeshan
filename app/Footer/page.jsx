"use client";
import React from "react";
import { Box, Grid, Typography, Link, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Facebook, Twitter, LinkedIn, Instagram, Phone, Email } from "@mui/icons-material";

function Footer() {
  const socialLinks = [
    { icon: <Facebook />, color: "#1877F2", href: "#" },
    { icon: <Twitter />, color: "#1DA1F2", href: "#" },
    { icon: <LinkedIn />, color: "#0077B5", href: "#" },
    { icon: <Instagram />, color: "#E1306C", href: "#" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0f172a",
        color: "rgba(255,255,255,0.85)",
        py: 6,
        px: { xs: 3, md: 10 },
        
      }}
    >
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <Box component="img" src="/Netbots.png" alt="NetBots Logo" height="40px" />
          </Box>
          <Typography variant="body2" mb={2}>
            Empowering businesses with cutting-edge software solutions and AI-driven innovation.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              mt: 2,
            }}
          >
            {socialLinks.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.15,
                  rotateZ: [0, 5, -5, 0],
                  boxShadow: `0 10px 25px ${item.color}80`,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  href={item.href}
                  sx={{
                    bgcolor: item.color,
                    color: "#fff",
                    minWidth: 50,
                    minHeight: 50,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: { xs: 20, sm: 24, md: 28 },
                    transition: "all 0.3s ease-in-out",
                    "&:hover": { bgcolor: "#fff", color: item.color },
                  }}
                >
                  {item.icon}
                </Button>
              </motion.div>
            ))}
          </Box>
        </Grid>

        {/* Middle Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
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
          <Typography variant="h6" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
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
