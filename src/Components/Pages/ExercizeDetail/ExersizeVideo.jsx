import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Loader from '../../Loader';

const ExersizeVideo = ({ name, exerciseVideos }) => {

    if (!exerciseVideos.length) return <Loader />;

    return (
        <Box
            sx={{
                marginTop: { xs: '20px', lg: '200px' }
            }}
            p='20px'
        >
            <Typography
                sx={{ fontSize: { lg: '44px', xs: '25px' } }}
                fontWeight={700} 
                color="#000"
                mb="33px"
            >
                Watch {" "}
                <span
                    style={{
                        color: '#ff2635',
                        textTransform: 'capitalize'
                    }}
                >
                    {name}
                </span> exercise videos
            </Typography>
            <Stack
                justifyContent='center'
                alignItems='center'
                flexWrap='wrap'
                sx={{
                    flexDirection: { lg: 'row' },
                    gap: { xs: 0, lg: '110px' }
                }}
            >
                {exerciseVideos?.slice(0, 4).map((item, index) => (
                    <a
                        key={index}
                        className='exercise-video'
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src={item.video.thumbnails[0].url}
                            alt={item.video.title}
                            style={{
                                borderTopLeftRadius: '45px'
                            }}
                        />
                        <Box>
                            <Typography
                                sx={{ fontSize: { lg: '28px', xs: '18px' } }}
                                color='#000'
                                fontWeight='bold'
                            >
                                {item.video.title}
                            </Typography>
                            <Typography
                                fontSize="14px"
                                color='#000'
                            >
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExersizeVideo;