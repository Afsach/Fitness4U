import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import bodyPartImage from '../../../assets/icons/body-part.png'
import targetImage from '../../../assets/icons/target.png'
import equipmentImage from '../../../assets/icons/equipment.png'

const Detail = ({ exercizeDetail }) => {

    const { bodyPart, name, gifUrl, target, equipment } = exercizeDetail;
    const extraDetail = [
        {
            icon: bodyPartImage,
            name: bodyPart
        },
        {
            icon: targetImage,
            name: target
        },
        {
            icon: equipmentImage,
            name: equipment
        }
    ]

    return (
        <Stack
            gap='60px'
            sx={{
                flexDirection: { lg: 'row' },
                p: '20px',
                alignItems: 'center'
            }}
        >
            <img
                src={gifUrl}
                alt={name}
                loading='lazy'
                className='detail-image'
            />
            <Stack
                sx={{
                    gap: { xs: '20px', lg: '35px' }
                }}
            >
                <Typography
                    variant='h3'
                    textTransform='capitalize'
                >
                    {name}
                </Typography>
                <Typography
                    variant='h6'
                >
                    Exercises keep you strong.
                    {name} {' '}
                    is one of the best exercise to target your {target}. It will help you to improve your mood and gain energy
                </Typography>
                {extraDetail.map((item, index) => (
                    <Stack
                        key={index}
                        direction='row'
                        gap='24px'
                        alignItems='center'
                    >
                        <Button
                        sx={{
                            backgroundColor : '#fffedb',
                            borderRadius : '50%',
                            width : '100px'
                        }}
                        >
                            <img
                                src={item.icon}
                                alt={bodyPart}
                                style={{
                                    width : '50px', height : '50px'
                                }}
                            />
                        </Button>
                        <Typography
                            variant='h6'
                            textTransform='capitalize'
                        >
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>

        </Stack>
    )
}

export default Detail