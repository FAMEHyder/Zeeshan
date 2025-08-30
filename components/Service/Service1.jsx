"use client";
import React from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WebIcon from "@mui/icons-material/Web";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CampaignIcon from "@mui/icons-material/Campaign";
import ComputerIcon from "@mui/icons-material/Computer";
import MemoryIcon from "@mui/icons-material/Memory";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CloudIcon from "@mui/icons-material/Cloud";
import BlockchainIcon from "@mui/icons-material/Token";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import { motion } from "framer-motion";

export default function Services() {
    const services = [
        {
            icon: <WebIcon sx={{ fontSize: 50, color: "#22d3ee" }} />,
            title: "Web Development",
            body: [
                { text: "Custom Web Applications" },
                { text: "Progressive Web Apps (PWA)" },
                { text: "Headless CMS Integration" },
                { text: "Performance Optimization" },
                { text: "SEO-friendly Architecture" },
                { text: "API Development & Integration" },

            ],
        },
        {
            icon: <DesignServicesIcon sx={{ fontSize: 50, color: "#ec4899" }} />,
            title: "UI/UX Design",
            body: [
                { text: "User Interface Design" },
                { text: "User Experience Design" },
                { text: "Wireframing & Prototyping" },
                { text: "Design Systems" },
                { text: "Usability Testing" },
                { text: "Responsive Design" },
            ],
        },
        {
            icon: <CampaignIcon sx={{ fontSize: 50, color: "#60a5fa" }} />,
            title: "Digital Marketing",
            body: [
                { text: "SEO Optimization" },
                { text: "Social Media Marketing" },
                { text: "Content Marketing" },
                { text: "Email Marketing" },
                { text: "PPC Campaigns" },
                { text: "Analytics & Reporting" },
            ],
        },
        {
            icon: <ComputerIcon sx={{ fontSize: 50, color: "#f97316" }} />,
            title: "Desktop Applications",
            body: [
                { text: "Cross-platform Development" },
                { text: "Native Applications" },
                { text: "Electron Applications" },
                { text: "System Integration" },
                { text: "Database Integration" },
                { text: "Automated Updates" },
            ],
        },
        {
            icon: <MemoryIcon sx={{ fontSize: 50, color: "#8b5cf6" }} />,
            title: "AI & Machine Learning",
            body: [
                { text: "Natural Language Processing" },
                { text: "Computer Vision Solutions" },
                { text: "Predictive Analytics" },
                { text: "Recommendation Systems" },
                { text: "Automated Decision Making" },
                { text: "AI Model Training & Deployment" },
            ],
        },
        {
            icon: <PhoneIphoneIcon sx={{ fontSize: 50, color: "#10b981" }} />,
            title: "Mobile Development",
            body: [
                { text: "iOS & Android Development" },
                { text: "React Native Applications" },
                { text: "Flutter Development" },
                { text: "Mobile UI/UX Design" },
                { text: "App Store Optimization" },
                { text: "Mobile Backend Development" },
            ],
        },
        {
            icon: <CloudIcon sx={{ fontSize: 50, color: "#0ea5e9" }} />,
            title: "Cloud Services",
            body: [
                { text: "Cloud Architecture Design" },
                { text: "AWS & Azure Solutions" },
                { text: "Serverless Applications" },
                { text: "Container Orchestration" },
                { text: "Cloud Security" },
                { text: "DevOps Implementation" },
            ],
        },
        {
            icon: <BlockchainIcon sx={{ fontSize: 50, color: "#eab308" }} />,
            title: "Blockchain Development",
            body: [
                { text: "Smart Contract Development" },
                { text: "DeFi Applications" },
                { text: "NFT Platforms" },
                { text: "Blockchain Integration" },
                { text: "Cryptocurrency Solutions" },
                { text: "Web3 Development" },
            ],
        },
        {
            icon: <DevicesOtherIcon sx={{ fontSize: 50, color: "#f43f5e" }} />,
            title: "IoT Solutions",
            body: [
                { text: "IoT Architecture Design" },
                { text: "Sensor Integration" },
                { text: "Real-time Monitoring" },
                { text: "Edge Computing" },
                { text: "IoT Security" },
                { text: "Data Analytics" },
            ],
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: "#0f172a",
                color: "white",
                py: 8,
                px: { xs: 2, md: 6, lg: 12 },
            }}
        >
            <Box textAlign="center" mb={6}>
                <Typography variant="h4" fontWeight="bold" gutterBottom
                    sx={{
                        mt: { xs: 1, sm: 1, md: 8 },
                        textAlign: "center",
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    Our Services
                </Typography>
                <Typography variant="h5" gutterBottom
                    sx={{
                        mt: { xs: 1, sm: 1, },
                        textAlign: "center",
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    Leveraging cutting-edge technologies to deliver innovative solutions that drive your business forward in the digital age.
                </Typography>
            </Box>

            {/* 3-column Grid */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 4,
                }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Card
                            sx={{
                                backgroundColor: "#1e293b",
                                borderRadius: 3,
                                p: 3,
                                textAlign: "center",
                                height: "100%",
                                boxShadow: "0px 4px 15px rgba(0,0,0,0.4)",
                            }}
                        >
                            <CardContent>
                                <Box mb={2}>{service.icon}</Box>
                                <Typography variant="h6" fontWeight="600" gutterBottom color="white">
                                    {service.title}
                                </Typography>
                                <List dense>
                                    {service.body.map((item, idx) => (
                                        <ListItem key={idx} sx={{ justifyContent: "left", p: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 28 }}>
                                                <CheckCircleIcon sx={{ color: "#22d3ee", fontSize: 18 }} />
                                            </ListItemIcon>
                                            <Typography variant="body2" color="gray">
                                                {item.text}
                                            </Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </Box>
        </Box>
    );
}
