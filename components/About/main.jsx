import { Box, Typography } from '@mui/material'
import React from 'react'

const main = () => {
    return (
        <Box
            sx={{
                height: '90vh',
                width: '100%',
                background: "linear-gradient(90deg, #f5f1f1ff, #f1f1f2ff)",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',

            }}
        >
            <Typography
                fontWeight="bold"
                sx={{
                    mb: 2,
                    mt: 5,
                    fontSize: {
                        xs: "1.8rem",
                        sm: "2.4rem",
                        md: "3rem",
                        lg: "4rem",
                    },
                    lineHeight: 1.2,
                    backgroundSize: "190% auto",
                    fontWeight: 800,
                    color: '#0b147fff',

                }}
            >
                About Netbots
            </Typography>

            <Typography
                sx={{
                    maxWidth: { xs: "100%", sm: "90%", md: "700px" },
                    mb: { xs: 3, sm: 4 },
                    fontSize: { xs: "1.95rem", sm: "2rem", md: "1.5rem" },
                    color: '#103b70ff',
                    textAlign:'center'
                }}
            >
                Pioneering the future of software development with innovation and excellence.
            </Typography>
        </Box>
    )
}

export default main
