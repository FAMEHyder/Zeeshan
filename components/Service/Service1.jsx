"use client";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FaReact, FaGoogle } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Services() {
  const services = [
    {
      icon: <FaReact size={50} color="#06b6d4" />,
      title: "Web Development",
      description:
        "Building modern, responsive, and scalable web applications using cutting-edge technologies and best practices.",
      points: [
        "Custom Web Applications",
        "Progressive Web Apps (PWA)",
        "Headless CMS Integration",
        "Performance Optimization",
        "SEO-friendly Architecture",
        "API Development & Integration",
      ],
    },
    {
      icon: <SiFigma size={50} color="#ec4899" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user experiences with modern design principles and user-centered approach.",
      points: [
        "User Interface Design",
        "User Experience Design",
        "Wireframing & Prototyping",
        "Design Systems",
        "Usability Testing",
        "Responsive Design",
      ],
    },
    {
      icon: <FaGoogle size={50} color="#3b82f6" />,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing solutions to boost your online presence and drive business growth.",
      points: [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "PPC Campaigns",
        "Analytics & Reporting",
      ],
    },
  ];

  return (
    <Box sx={{ bgcolor: "#0f172a", color: "white", py: 8, px: { xs: 3, md: 6, lg: 10 } }}>
      {/* Heading */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" color="gray" maxWidth="700px" mx="auto">
          Leveraging cutting-edge technologies to deliver innovative solutions
          that drive your business forward in the digital age.
        </Typography>
      </Box>

      {/* Cards */}
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card
              sx={{
                bgcolor: "#1e293b",
                borderRadius: 4,
                height: "100%",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                },
              }}
            >
              <CardContent>
                <Box mb={3}>{service.icon}</Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="gray" mb={2}>
                  {service.description}
                </Typography>
                <List dense>
                  {service.points.map((point, i) => (
                    <ListItem key={i} disableGutters>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircleIcon sx={{ color: "#06b6d4", fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={point}
                        primaryTypographyProps={{ variant: "body2", color: "white" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
