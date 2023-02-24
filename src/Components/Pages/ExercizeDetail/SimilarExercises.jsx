import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import HorizontalScrollbar from '../Home/HorizontalScrollbar';
import Loader from '../../Loader';

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
    return (
        <Box
            sx={{
                mt: { xs: 0, lg: '100px' }
            }}
        >
            <Typography
                sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }}
                fontWeight={700}
                color="#000"
                mb="33px"
                variant='h3'
            >
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }} > target Muscle </span> exercises
            </Typography>
            <Stack
                direction='row'
                sx={{
                    p: '2',
                    position: 'relative'
                }}
            >
                {targetMuscleExercises.length !== 0 ?
                    <HorizontalScrollbar data={targetMuscleExercises} />
                    :
                    <Loader />
                }
            </Stack>
            <Typography
                sx={{
                    fontSize: { lg: '44px', xs: '25px' },
                    ml: '20px',
                    mt: { lg: '100px', xs: '60px' }
                }}
                fontWeight={700}
                color="#000"
                mb="33px"
            >
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}> Equipment </span> exercises
            </Typography>
            <Stack
                direction='row'
                sx={{
                    p: '2',
                    position: 'relative'
                }}
            >
                {equipmentExercises.length !== 0 ?
                    <HorizontalScrollbar data={equipmentExercises} />
                    :
                    <Loader />
                }
            </Stack>
        </Box>
    )
}

export default SimilarExercises