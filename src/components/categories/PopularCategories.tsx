// import React from 'react';

import { PopularCategoriesButton } from '../inputs/buttons/PopularCategoryButton';

const PopularCategories = () => {
  return (
    <div className="d-flex justify-content-center">
      <PopularCategoriesButton
        img="../../../../../img/categories/vehicle_one.png"
        text="Vehículos"
      />
      <PopularCategoriesButton
        img="../../../../../img/categories/pets_one.png"
        text="Mascotas"
      />
      <PopularCategoriesButton
        img="../../../../../img/categories/real_estate_one.png"
        text="Inmuebles"
      />
      <PopularCategoriesButton
        img="../../../../../img/categories/jobs_one.png"
        text="Empleos"
      />
      <PopularCategoriesButton
        img="../../../../../img/categories/fishing_one.png"
        text="Pesca"
      />
    </div>
  );
};

export { PopularCategories };
