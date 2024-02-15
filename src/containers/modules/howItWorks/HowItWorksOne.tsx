// import React, { ReactNode } from 'react';

import { StepaOne } from '../../../components/howItWorks/StepOne';
// import { useTheme } from '@mui/material/styles';

// interface Props {
//   children: ReactNode;
// }

const HowItWorksOne = () => {
  // const theme = useTheme();

  return (
    <div className="d-flex flex-column how-it-works how-it-works-one justify-content-center align-items-center">
      <span className="badge bg-secondary text text-font-l-d fw-normal fs-6 py-2 mx-auto background background-color-8 px-3">
        ¿Cómo funciona?
      </span>
      <div className="text-center text text-font-georgia fs-2 mt-3 fw-bold text-color-5">
        {/* El Momento Oportuno <span className=" text text-color-9">te ayuda</span> a
        encontrar lo que necesites */}
        Publicar un anuncio es fácil. Selecciona la categoría adecuada y realiza tu publicación de manera rápida y sencilla.
      </div>
      <div className="text text-color-10 mt-3 text-font-r-h-d">
        Te lo explicamos en 4 sencillos pasos
      </div>
      <div className="w-100 steps d-flex justify-content-center flex-wrap mt-5">
        <StepaOne
          color={{
            fill: '11',
            constrast: '12',
          }}
          icon={{ url: './img/icons/search_one.png' }}
          step="Busca un anuncio"
        />
        <StepaOne
          color={{
            fill: '11',
            constrast: '12',
          }}
          icon={{ url: './img/icons/win_one.png' }}
          step="Encuentra lo que necesites"
        />
        <StepaOne
          color={{
            fill: '11',
            constrast: '12',
          }}
          icon={{ url: './img/icons/conversation_one.png' }}
          step="Contacta al vendedor"
        />
        <StepaOne
          color={{
            fill: '11',
            constrast: '12',
          }}
          icon={{ url: './img/icons/box_one.png' }}
          step="¡Compra y recibe!"
        />
        <p className="text-center fs-5 fw-regular text text-font-helvetica">
        Utiliza nuestro buscador para encontrar exactamente lo que necesitas. Explora opciones como propiedades, automóviles, mascotas y artículos de segunda mano en nuestra amplia base de datos. 
          <br />
          Contacta directamente con el anunciante para concretar la compra sin intermediarios. Ante cualquier duda, comunícate con tu vendedor y, al finalizar la transacción, califica tu compra. Simplificamos el proceso para que encuentres lo que buscas de manera rápida y fácil.
        </p>
      </div>
    </div>
  );
};

export { HowItWorksOne };
