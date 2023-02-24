import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Stack, TextField } from '@mui/material';
import { exercisesOptions, fetchData } from '../../../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart,}) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);


  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();

  }, [])
  

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
      
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }
  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      mt='37px'
      p='20px'
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { xs: '30px', lg: '44px' }
        }}
        mb='50px'
        textAlign='center'
      >
        Awesome Exercizes You <br /> Should Know
      </Typography>
      <Box
        position='relative'
        mb='72px'
      >
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { xs: '350px', lg: '800px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          value={search}
          onChange={(e) => { setSearch(e.target.value.toLowerCase()); }}
          height='76px'
          type='text'
          placeholder='Search Exercises'
        />
        <Button className='search-btn'
          sx={{
            backgroundColor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { xs: '80px', lg: '175px' },
            fontSize: { xs: '14px', lg: '20px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
      sx={{
        position : 'relative',
        width : '100%',
        p : '20px',
      }}
      >
        <HorizontalScrollbar 
        data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        isBodyParts
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises
