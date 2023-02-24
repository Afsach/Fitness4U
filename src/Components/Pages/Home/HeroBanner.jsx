import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../../../assets/images/banner.png';

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { xs: '70px', lg: '212px' },
                ml: { sm: '50px' }
            }}
            position="relative"
            p="20px"
        >
            <Typography
                fontSize="26px"
                fontWeight='600'
                color='#ff2625'
            >
                Fitness club
            </Typography>
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { xs: '40px', lg: '44px' }
                }}
            >
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography
                fontSize="22px"
                lineHeight="35px"
                mb={3}
            >
                Check out the most effective exercises
            </Typography>
            <Button
                variant='contained'
                color='error'
                href='#exercises'
                sx={{
                    backgroundColor : '#ff2625',
                    padding : '10px'
                }}
            >
                Explore Exercises
            </Button>
            <Typography
            fontSize="200px"
            fontWeight={600}
            color='#ff2625'
            sx={{
                opacity : '0.1',
                display : {xs : 'none', lg : 'block' }
            }}>
                Exersises
            </Typography>
            <img
                src={HeroBannerImage}
                alt='banner'
                className="hero-banner-img"
            />
        </Box>
    )
}

export default HeroBanner;