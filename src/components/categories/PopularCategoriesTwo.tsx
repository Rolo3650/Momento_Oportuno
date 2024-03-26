// import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { PopularCategoriesButtonTwo } from '../inputs/buttons/PopularCategoryButtonTwo';

const PopularCategoriesTwo = () => {
  const navigateTo = useNavigate();

  return (
    <div className="popular-categories-two">
      <Box
        height={'72px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        className='mb-3'
      >
        <p className="text-center text text-color-7 text-font-georgia fs-2 fw-bold mb-0 ">
          Categorías
        </p>
      </Box>
      <Box
        height={'320px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Box height={'320px'} width={'100%'} maxWidth={'1328px'} overflow={'auto'}>
          <div className="categories-container background">
            <PopularCategoriesButtonTwo img='/img/examples/vehiculos(1).png' text='Vehículos' onClick={() => navigateTo('/ads/vehiculos')}/>
            <PopularCategoriesButtonTwo img='/img/examples/MO job.jpg' text='Empleos'  onClick={() => navigateTo('/ads/jobs')}/>
            <PopularCategoriesButtonTwo img='/img/examples/Inmuebles (1).png' text='Inmuebles'  onClick={() => navigateTo('/ads/inmuebles')}/>
            <PopularCategoriesButtonTwo img='/img/examples/mascotas(1).png' text='Mascotas'  onClick={() => navigateTo('/ads/mascotas')}/>
            <PopularCategoriesButtonTwo img='/img/examples/MO fishing.jpg' text='Pesca'  onClick={() => navigateTo('/ads/pesca')}/>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export { PopularCategoriesTwo };
