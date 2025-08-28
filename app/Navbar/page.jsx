"use client";

import React, { useState } from "react";
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
  Slide,
  useScrollTrigger,
} from "@mui/material";
import { useRouter } from "next/navigation"; // ✅ Next.js router

// Import icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import ContactMailIcon from "@mui/icons-material/ContactMail";

// Framer Motion
import { motion } from "framer-motion";

// Hide on scroll wrapper
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Header() {
  const router = useRouter(); // ✅ initialize router
  const [mobileOpen, setMobileOpen] = useState(false);

  const topNavItems = [
    { label: "Home", icon: <HomeIcon sx={{ fontSize: 20 }} />, path: "/" },
    { label: "About", icon: <InfoIcon sx={{ fontSize: 20 }} />, path: "/About" },
    { label: "Service", icon: <BuildIcon sx={{ fontSize: 20 }} />, path: "/service" },
    { label: "Product", icon: <ShoppingCartIcon sx={{ fontSize: 20 }} />, path: "/product" },
    { label: "Portfolio", icon: <WorkIcon sx={{ fontSize: 20 }} />, path: "/portfolio" },
    { label: "Career", icon: <SchoolIcon sx={{ fontSize: 20 }} />, path: "/career" },
    { label: "Contact", icon: <ContactMailIcon sx={{ fontSize: 20 }} />, path: "/contact" },
  ];

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            background: "linear-gradient(90deg, #0a2342, #0a2342 , #0a2342, #0f3460)",
            transition: "all 0.3s ease",
            mt: 2,
            mr: {xs:1,sm:3,md:8}, // center align
            width: { xs: "95%", md: "90%" },
            borderRadius: "20px",
            boxShadow: "1px 1px 1px 1px black",
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
              <motion.img
                src="/Netbots.png"
                alt="Logo"
                height="45"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(0,0,0,0.4))",
                  cursor: "pointer",
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onClick={() => router.push("/")} // ✅ Logo click → Home
              />
            </Box>

            {/* Desktop Menu */}
            <Box display={{ xs: "none", md: "flex" }} gap={1.5}>
              {topNavItems.map((item) => (
                <Button
                  key={item.label}
                  startIcon={item.icon}
                  onClick={() => router.push(item.path)} // ✅ navigate
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
      </HideOnScroll>

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
              onClick={() => {
                router.push(item.path); // ✅ route
                setMobileOpen(false);
              }}
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
    </>
  );
}

export default Header;
