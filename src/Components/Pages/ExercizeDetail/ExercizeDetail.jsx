import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exercisesOptions, fetchData, youtubeOptions } from '../../../utils/fetchData';

import Detail from './Detail'
import ExersizeVideo from './ExersizeVideo'
import SimilarExercises from './SimilarExercises'

const ExercizeDetail = () => {

  const [exercizeDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,
        exercisesOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await
        fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exercisesOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await
        fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exercisesOptions);
      setEquipmentExercises(equipmentExercisesData);
    }
    fetchExerciseData();
  }, [id])

  return (
    <Box
    sx={{ mt: { lg: '96px', xs: '60px' } }}
    >
      <Detail exercizeDetail={exercizeDetail} />
      <ExersizeVideo exerciseVideos={exerciseVideos} name={exercizeDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExercizeDetail