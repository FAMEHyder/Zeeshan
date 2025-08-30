// "use client";

// import { Box, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// import React from "react";

// const AboutSection = () => {
//   return (
//     <Box
//       sx={{
//         minHeight: "90vh",
//         width: "100%",
//         background: "linear-gradient(90deg, #f5f1f1ff, #f1f1f2ff)",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         px: { xs: 2, sm: 4, md: 8 }, // responsive padding
//         textAlign: "center",
//         overflow: "hidden", // prevent unwanted scroll
//       }}
//     >
//       {/* Title */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }} // start above with opacity 0
//         whileInView={{ opacity: 1, y: 0 }} // animate into view
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         <Typography
//           sx={{
//             mb: 2,
//             mt: { xs: 3, sm: 5 },
//             fontSize: {
//               xs: "2rem",
//               sm: "2.8rem",
//               md: "3.5rem",
//               lg: "4rem",
//             },
//             lineHeight: 1.2,
//             fontWeight: 800,
//             color: "#0b147fff",
//             fontFamily: "Poppins, sans-serif",
//           }}
//         >
//           About Netbots
//         </Typography>
//       </motion.div>

//       {/* Description */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         <Typography
//           sx={{
//             maxWidth: { xs: "100%", sm: "90%", md: "800px" },
//             px: { xs: 1, sm: 2 },
//             mb: { xs: 3, sm: 4 },
//             fontSize: {
//               xs: "1rem",
//               sm: "1.2rem",
//               md: "1.3rem",
//               lg: "1.5rem",
//             },
//             color: "#103b70ff",
//             fontFamily: "Poppins, sans-serif",
//           }}
//         >
//           Pioneering the future of software development with innovation and
//           excellence.
//         </Typography>
//       </motion.div>
//     </Box>
//   );
// };

// export default AboutSection;



"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Box } from "@mui/material";

const AboutSection = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: "100%",
        background: "linear-gradient(135deg, #233262ff 0%, #0a429cff 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Particle Text */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 0 },
            shape: {
              type: "char",
              character: {
                value: ["About NetBots"], // 👈 tumhara text yahan likho
                font: "Poppins",
                style: "",
                weight: "800",
              },
            },
            color: { value: "#ffffff" },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0,
                sync: false,
              },
            },
            size: { value: 16 },
            move: {
              enable: true,
              speed: 5,
              outModes: "destroy",
              random: true,
            },
          },
          interactivity: {
            events: {
              onClick: { enable: true, mode: "repulse" },
              onHover: { enable: true, mode: "bubble" },
            },
            modes: {
              bubble: { size: 25, distance: 100 },
              repulse: { distance: 200 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
};

export default AboutSection;
