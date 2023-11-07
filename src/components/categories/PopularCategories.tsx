// import React from 'react';

import { useNavigate } from 'react-router-dom';
import { PopularCategoriesButton } from '../inputs/buttons/PopularCategoryButton';

const PopularCategories = () => {

  const navigateTo = useNavigate();

  return (
    <div className="popular-categories">
      <div className='d-flex justify-content-center popular-categories-body'>
        <PopularCategoriesButton
          img="../../../../../img/categories/vehicle_one.png"
          text="Vehículos"
          onClick={() => navigateTo('/ads/vehiculos')}
        />
        <PopularCategoriesButton
          img="../../../../../img/categories/pets_one.png"
          text="Mascotas"
          onClick={() => navigateTo('/ads/mascotas')}
        />
        <PopularCategoriesButton
          img="../../../../../img/categories/real_estate_one.png"
          text="Inmuebles"
          onClick={() => navigateTo('/ads/inmuebles')}
        />
        <PopularCategoriesButton
          img="../../../../../img/categories/jobs_one.png"
          text="Empleos"
          onClick={() => navigateTo('/ads/jobs')}
        />
        <PopularCategoriesButton
          img="../../../../../img/categories/fishing_one.png"
          text="Pesca"
          onClick={() => navigateTo('/ads/pesca')}
        />
      </div>
    </div>
  );
};

export { PopularCategories };
