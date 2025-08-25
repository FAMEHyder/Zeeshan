"use client";
import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CodeIcon from "@mui/icons-material/Code";
import CheckIcon from "@mui/icons-material/Check";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { motion } from "framer-motion";

const items = [
  {
    icon: <SearchIcon sx={{ fontSize: 50 }} />,
    title: "Discovery",
    desc: "We analyze your needs and create tailored solution plan.",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 50 }} />,
    title: "Development",
    desc: "Our experts build your solution using cutting-edge technology.",
  },
  {
    icon: <CheckIcon sx={{ fontSize: 50 }} />,
    title: "Testing",
    desc: "Rigorous testing ensures quality and reliability.",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 50 }} />,
    title: "Deployment",
    desc: "Smooth deployment with minimal disruption to your business.",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 50 }} />,
    title: "Support",
    desc: "24/7 support and maintenance to ensure optimal performance.",
  },
];

const HowWeDeliver = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // small screen check

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        background: "linear-gradient(90deg, #131b25ff)",
        color: "#fff",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Typography fontWeight={800} fontSize={{ xs: "24px", md: "30px" }}>
          How We Deliver
        </Typography>
        <Typography fontSize={{ xs: "14px", md: "20px" }} color="gray">
          Our proven process ensures successful delivery of your software
          solutions
        </Typography>
      </motion.div>

      {/* Items */}
      <Box
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: isMobile ? "nowrap" : "nowrap", // laptop/desktop ek hi line
          gap: 4,
        }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Box
              sx={{
                px: 2,
                minWidth: isMobile ? "100%" : "200px",
                maxWidth: "250px",
              }}
            >
              {item.icon}
              <Typography
                fontWeight={800}
                fontSize={{ xs: "20px", md: "24px" }}
                mt={1}
              >
                {item.title}
              </Typography>
              <Typography
                fontSize={{ xs: "13px", md: "15px" }}
                color="gray"
                mt={1}
              >
                {item.desc}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default HowWeDeliver;
