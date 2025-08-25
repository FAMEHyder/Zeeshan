import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';
import CheckIcon from '@mui/icons-material/Check';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const howWedeliver = () => {
    return (
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                px: 2,
                background: "linear-gradient(90deg, #131b25ff)", // exact dark blue gradient
                color: "#fff",
            }}
        >
            <Grid
                sx={{
                    borderRadius: 3,
                    height: '100%',
                    width: '100%',
                    textAlign: "center",
                }}
            >
                <Typography fontWeight={800} fontSize={'30px'}>How We Deliver</Typography>
                <Typography fontSize={'20px'} color='gray'>Our proven process ensures successful delivery of your software solutions</Typography>

            </Grid>

            <Grid
                sx={{
                    mt: 5,
                    borderRadius: 3,
                    height: '100%',
                    width: '100%',
                    textAlign: "center",
                    display: 'flex'
                }}

            >
                <Box>   <SearchIcon sx={{ fontSize: 50 }} />
                    <Typography fontWeight={800} fontSize={'30px'}>Discovery</Typography>
                    <Typography fontSize={'15px'} color='gray'>We analyze your needs and create tailored solution plan.</Typography>
                </Box>
                <Box>
                    <CodeIcon sx={{ fontSize: 50 }} />
                    <Typography fontWeight={800} fontSize={'30px'}>Development</Typography>
                    <Typography fontSize={'15px'} color='gray'>Our experts build your solution using cutting-edge technology.</Typography>
                </Box>
                <Box>
                    <CheckIcon sx={{ fontSize: 50 }}/>
                    <Typography fontWeight={800} fontSize={'30px'}>Testing</Typography>
                    <Typography fontSize={'15px'} color='gray'>Rigorous testing ensures quality and reliability.</Typography>
                </Box>
                <Box>
                    <RocketLaunchIcon sx={{ fontSize: 50 }}/>
                    <Typography fontWeight={800} fontSize={'30px'}>Deployment</Typography>
                    <Typography fontSize={'15px'} color='gray'>Smooth deployment with minimal disruption to your business.</Typography>
                </Box>
                <Box>
                    <SupportAgentIcon sx={{ fontSize: 50 }}/>
                    <Typography fontWeight={800} fontSize={'30px'}>Support
                    </Typography>
                    <Typography fontSize={'15px'} color='gray'>24/7 support and maintenance to ensure optimal performance.</Typography>
                </Box>

            </Grid>

        </Box>
    )
}

export default howWedeliver
