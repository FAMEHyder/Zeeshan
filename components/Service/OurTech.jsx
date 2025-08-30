"use client";

import {
  Box,
  Typography,
} from "@mui/material";

// ✅ MUI Icons
import WebIcon from "@mui/icons-material/Web";                  
import CodeIcon from "@mui/icons-material/Code";                
import ArticleIcon from "@mui/icons-material/Article";          
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorageIcon from "@mui/icons-material/Storage";          
import TerminalIcon from "@mui/icons-material/Terminal";        
import MemoryIcon from "@mui/icons-material/Memory";            
import BuildIcon from "@mui/icons-material/Build";              
import SecurityIcon from "@mui/icons-material/Security";        
import CloudIcon from "@mui/icons-material/Cloud";              
import HubIcon from "@mui/icons-material/Hub";                  
import CloudQueueIcon from "@mui/icons-material/CloudQueue";    
import PublicIcon from "@mui/icons-material/Public";            
import PsychologyIcon from "@mui/icons-material/Psychology";    
import TableChartIcon from "@mui/icons-material/TableChart";    
import BugReportIcon from "@mui/icons-material/BugReport";      
import GitHubIcon from "@mui/icons-material/GitHub";            
import CommitIcon from "@mui/icons-material/Commit";            
import BoltIcon from "@mui/icons-material/Bolt";                

// ✅ Structured array with categories
const techStack = [
  {
    category: "Frontend Development",
    items: [
      {
        name: "Next.js 14",
        description: "The React Framework for Production",
        icon: <WebIcon fontSize="large" color="primary" />,
      },
      {
        name: "React 18",
        description: "A JavaScript library for building user interfaces",
        icon: <CodeIcon fontSize="large" color="primary" />,
      },
      {
        name: "WordPress",
        description: "World's most popular CMS platform",
        icon: <ArticleIcon fontSize="large" color="primary" />,
      },
      {
        name: "Shopify",
        description: "Leading e-commerce platform",
        icon: <ShoppingCartIcon fontSize="large" color="primary" />,
      },
    ],
  },
  {
    category: "Backend Development",
    items: [
      {
        name: "Node.js",
        description: "JavaScript runtime built on Chrome's V8 engine",
        icon: <TerminalIcon fontSize="large" color="secondary" />,
      },
      {
        name: "Python",
        description: "Programming language for AI and web development",
        icon: <MemoryIcon fontSize="large" color="secondary" />,
      },
      {
        name: "Go",
        description: "Open source programming language by Google",
        icon: <BuildIcon fontSize="large" color="secondary" />,
      },
      {
        name: "Rust",
        description: "Systems programming language for performance",
        icon: <SecurityIcon fontSize="large" color="secondary" />,
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      {
        name: "Docker",
        description: "Container platform for modern applications",
        icon: <CloudIcon fontSize="large" color="info" />,
      },
      {
        name: "Kubernetes",
        description: "Container orchestration platform",
        icon: <HubIcon fontSize="large" color="info" />,
      },
      {
        name: "AWS",
        description: "Leading cloud computing platform",
        icon: <CloudQueueIcon fontSize="large" color="info" />,
      },
      {
        name: "Azure",
        description: "Microsoft's cloud computing service",
        icon: <PublicIcon fontSize="large" color="info" />,
      },
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      {
        name: "TensorFlow",
        description: "Open source machine learning framework",
        icon: <PsychologyIcon fontSize="large" color="warning" />,
      },
      {
        name: "PyTorch",
        description: "Machine learning library for Python",
        icon: <PsychologyIcon fontSize="large" color="warning" />,
      },
      {
        name: "Jupyter",
        description: "Interactive computing and data science",
        icon: <CodeIcon fontSize="large" color="warning" />,
      },
      {
        name: "Pandas",
        description: "Data manipulation and analysis",
        icon: <TableChartIcon fontSize="large" color="warning" />,
      },
    ],
  },
  {
    category: "Database & Storage",
    items: [
      {
        name: "MongoDB",
        description: "NoSQL database for modern applications",
        icon: <StorageIcon fontSize="large" color="success" />,
      },
      {
        name: "PostgreSQL",
        description: "Advanced open source database",
        icon: <StorageIcon fontSize="large" color="success" />,
      },
      {
        name: "Redis",
        description: "In-memory data structure store",
        icon: <BoltIcon fontSize="large" color="success" />,
      },
      {
        name: "MySQL",
        description: "Popular open-source database",
        icon: <StorageIcon fontSize="large" color="success" />,
      },
    ],
  },
  {
    category: "Tools & Testing",
    items: [
      {
        name: "Jest",
        description: "JavaScript testing framework",
        icon: <BugReportIcon fontSize="large" color="error" />,
      },
      {
        name: "Git",
        description: "Version control system",
        icon: <CommitIcon fontSize="large" color="error" />,
      },
      {
        name: "GitHub",
        description: "Development platform and hosting",
        icon: <GitHubIcon fontSize="large" color="error" />,
      },
      {
        name: "VS Code",
        description: "Popular code editor",
        icon: <CodeIcon fontSize="large" color="error" />,
      },
    ],
  },
];

export default function TechStack() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" textAlign="center" gutterBottom fontWeight={800}
        sx={{
          color: "#0b147f",
          mb: { xs: 4, md: 6 },
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Our Tech Stack
      </Typography>

      {techStack.map((section, idx) => (
        <Box key={idx} sx={{ mt: 5 }}>
          <Typography
            variant="h5"
            sx={{ mb: 3, fontWeight: "bold", color: "primary.main" }}
          >
            {section.category}
          </Typography>

          {/* ✅ Row layout for items */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            {section.items.map((item, i) => (
              <Box
                key={i}
                sx={{
                  flex: "1 1 250px", // min 250px width, responsive adjust
                  maxWidth: "300px",
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                {item.icon}
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
