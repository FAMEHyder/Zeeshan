"use client";

import { Box, Grid, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HotelIcon from "@mui/icons-material/Hotel";
import UpcomingIcon from "@mui/icons-material/Upcoming";

const contentMap = {
  Finance: {
    title: "Accounta",
    text: "Smart accounting and finance management solution for businesses of all sizes",
    features: [
      "Automated bookkeeping and reconciliation",
      "Real-time financial reporting",
      "Invoice and expense management",
      "Tax compliance and filing",
      "Payroll management",
      "Multi-currency support",
      "Financial analytics and forecasting",
    ],
    bgcolor: "#36729cff",
    icon: <AttachMoneyIcon sx={{ color: "#2e7d32" }} />,
  },
  Healthcare: {
    title: "E-Pharma",
    text: "Complete clinical POS and pharmacy management system",
    features: [
      "Inventory management and tracking",
      "Prescription management",
      "Sales and billing",
      "Customer records management",
      "Supplier management",
      "Expiry date tracking",
      "Reports and analytics",
    ],
    bgcolor: "#335bddff",
    icon: <LocalHospitalIcon sx={{ color: "#c62828" }} />,
  },
  Hospitality: {
    title: "Hotel Sync",
    text: "All-in-one hotel management and booking system",
    features: [
      "Room booking and management",
      "Front desk operations",
      "Housekeeping management",
      "Restaurant POS integration",
      "Online booking engine",
      "Guest relationship management",
      "Revenue management",
    ],
    bgcolor: "#723bf2ff",
    icon: <HotelIcon sx={{ color: "#ef6c00" }} />,
  },
  Upcoming: {
    title: "Coming Soon",
    text: "Exciting new products in pilot phase",
    features: [
      "AI-powered business analytics",
      "Smart retail management system",
      "Educational institution management",
      "Advanced CRM solutions",
    ],
    bgcolor: "#4683f5ff",
    icon: <UpcomingIcon sx={{ color: "#4527a0" }} />,
  },
};

export default function SolutionsSection({ isMobile }) {
  const [selected, setSelected] = useState("Finance");

  return (
    <Grid
      width={"100%"}
      sx={{
        height: { xs: "200vh", sm: "210vh", md: "130vh" },
        
      }}
    >
      {/* Buttons */}
      <Box
        flexDirection={isMobile ? "column" : "row"}
        sx={{
          mt: 5,
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
          mb: 4,
          gap: 2,
        }}
      >
        {Object.keys(contentMap).map((key) => (
          <Button
            key={key}
            startIcon={contentMap[key].icon}
            onClick={() => setSelected(key)}
            sx={{
              color: "#000",
              fontWeight: selected === key ? 800 : 500,
              borderBottom: selected === key ? "2px solid #000" : "none",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(0.95)",
              },
            }}
          >
            {key}
          </Button>
        ))}
      </Box>

      {/* Content */}
      <motion.div
        key={selected}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          height={"70%"}
          width={"90%"}
          ml={4}
          display={"flex"}
          flexDirection={isMobile ? "column" : "row"}
          bgcolor={contentMap[selected]?.bgcolor}
          sx={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: 5,
            p: { xs: 2, sm: 4, md: 6 },
            boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              flex: 1,
              fontSize: { xs: 14, sm: 16, md: 18 },
              color: "#212121",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#0d1b2a",
                mb: 2,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              {contentMap[selected].title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              {contentMap[selected].text}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Key Features:
            </Typography>
            <ul style={{ paddingLeft: "20px" }}>
              {contentMap[selected].features.map((f, i) => (
                <li key={i} style={{ marginBottom: "8px" }}>
                  {f}
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </motion.div>
    </Grid>
  );
}
