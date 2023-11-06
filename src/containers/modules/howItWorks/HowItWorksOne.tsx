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
        Clic del Sureste <span className=" text text-color-9">te ayuda</span> a
        encontrar lo que necesites
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
          Utiliza nuestro buscador para encontrar exactamente lo que necesitas.
          Nuestro sistema realizará una búsqueda en nuestra base de datos que
          incluye una amplia gama de opciones, como propiedades, automóviles,
          mascotas y artículos de segunda mano. Encuentra lo que necesites,
          contacta con el anunciante del aviso y concreten la compra sin la
          intervención de un tercero. <br />
          Si tienes dudas, puedes contactar a tu vendedor y una vez finalizada
          la transacción, califica tu compra.
          <br />
          ¡Facilitamos todo el proceso para que encuentres lo que buscas de
          manera rápida y sencilla!
        </p>
      </div>
    </div>
  );
};

export { HowItWorksOne };
