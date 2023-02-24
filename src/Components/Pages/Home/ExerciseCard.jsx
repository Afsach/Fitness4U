import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Typography, Stack } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
    return (
        <Link
            className='exercise-card'
            to={`/exercise/${exercise.id}`}
        >
            <img
                src={exercise.gifUrl}
                alt={exercise.name}
                loading='lazy'
            />
            <Stack
                direction='row'
            >
                <Button
                    sx={{
                        ml: '20px',
                        color: '#fff',
                        backgroundColor: '#ffa9a9',
                        fontSize: '14px',
                        borderRadius: '20px',
                        textTransform: 'capitalize'
                    }}
                    className='bodypart-card-btn'
                >
                    {exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: '20px',
                        color: '#fff',
                        backgroundColor: '#fcc757',
                        fontSize: '14px',
                        borderRadius: '20px',
                        textTransform: 'capitalize'
                    }}
                    className='target-card-btn'
                >
                    {exercise.target}
                </Button>
            </Stack>
            <Typography
                ml='21px'
                color='#000'
                fontWeight='bold'
                fontSize='22px'
                mt='11px'
                pb='10px'
                textTransform='capitalize'
            >
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard;