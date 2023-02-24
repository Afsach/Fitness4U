import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ExercizeDetail from './Components/Pages/ExercizeDetail/ExercizeDetail';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Footer/Footer';


const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExercizeDetail />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;

