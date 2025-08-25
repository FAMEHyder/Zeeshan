"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
} from "@mui/material";

function Header() {
  const topNavItems = [
    "Home",
    "About",
    "Service",
    "Product",
    "Portfolio",
    "Career",
    "Contact",
  ];

  const [elevate, setElevate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setElevate(true);
      } else {
        setElevate(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: elevate
            ? "4px 20px rgba(0,0,0,0.6)" // on scroll (dark semi-transparent)
            : "linear-gradient(90deg, #0a2342, #0a2342 , #0a2342, #0f3460)", // initial blue gradient
          backdropFilter: elevate ? "blur(12px)" : "none",
       
        }}
      >
        <Toolbar
          sx={{
            height: "10vh",
            justifyContent: "space-between",
            px: { xs: 2, md: 5 },
          }}
        >
          {/* Left: Logo */}
          <Box display="flex" alignItems="center" gap={2}>
            <Box
              component="img"
              src="/CompanyLogo.png"
              alt="Logo"
              height="45px"
              sx={{
                filter: "drop-shadow(0 0 8px rgba(0,0,0,0.4))",
                cursor: "pointer",
              }}
            />
          </Box>

          {/* Right: Buttons */}
          <Box display={{ xs: "none", md: "flex" }} gap={1.5}>
            {topNavItems.map((text) => (
              <Button
                key={text}
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  px: 2,
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.15)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Spacer for fixed AppBar */}
      <Toolbar />
    </>
  );
}

export default Header;
