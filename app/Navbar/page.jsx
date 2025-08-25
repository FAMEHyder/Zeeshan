"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// Import icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Header() {
  const topNavItems = [
    { label: "Home", icon: <HomeIcon sx={{ fontSize: 20 }} /> },
    { label: "About", icon: <InfoIcon sx={{ fontSize: 20 }} /> },
    { label: "Service", icon: <BuildIcon sx={{ fontSize: 20 }} /> },
    { label: "Product", icon: <ShoppingCartIcon sx={{ fontSize: 20 }} /> },
    { label: "Portfolio", icon: <WorkIcon sx={{ fontSize: 20 }} /> },
    { label: "Career", icon: <SchoolIcon sx={{ fontSize: 20 }} /> },
    { label: "Contact", icon: <ContactMailIcon sx={{ fontSize: 20 }} /> },
  ];

  const [elevate, setElevate] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setElevate(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
            // width:{xs: ,sm: ,md ,lg : , xl:},
          background: elevate
            ? "rgba(0,0,0,0.6)"
            : "linear-gradient(90deg, #0a2342, #0a2342 , #0a2342, #0f3460)",
          backdropFilter: elevate ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            height: "10vh",
            
            justifyContent: "space-between",
            px: { xs: 2, md: 5 },
          }}
        >
          {/* Logo */}
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

          {/* Desktop Menu */}
          <Box display={{ xs: "none", md: "flex" }} gap={1.5}>
            {topNavItems.map((item) => (
              <Button
                key={item.label}
                startIcon={item.icon}
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
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            bgcolor: "#0a2342",
            color: "#fff",
          },
        }}
      >
        <List>
          {topNavItems.map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={() => setMobileOpen(false)}
              sx={{
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
              }}
            >
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Spacer for fixed AppBar */}
      <Toolbar />
    </>
  );
}

export default Header;
