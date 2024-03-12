// import React, { ReactNode } from 'react';

import { Box } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// interface Props {
//   children: ReactNode;
// }

const HowItWorksTwo = () => {
  // const theme = useTheme();

  return (
    <div className="d-flex flex-column how-it-works how-it-works-one justify-content-center align-items-center">
      <span className="badge bg-secondary text text-font-l-d fw-normal fs-6 py-2 mx-auto background background-color-8 px-3">
        ¿Cómo funciona?
      </span>
      <div className="text-center text text-font-georgia fs-2 mt-3 fw-bold text-color-5">
        {/* El Momento Oportuno <span className=" text text-color-9">te ayuda</span> a
        encontrar lo que necesites */}
        <Box maxWidth={'1020px'}>
          Publicar un anuncio es fácil. Selecciona la categoría adecuada y
          realiza tu publicación de manera rápida y sencilla.
        </Box>
      </div>
      <div
        //  style="padding:56.25% 0 0 0;position:relative;"
        style={{
          position: 'relative',
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/e6vTGtWBrdY?si=s-XoBKcSPWDG5Wys&amp;controls=0"
          // frameborder="0"
          allow="autoplay; fullscreen;"
          // style="position:absolute;top:0;left:0;width:100%;height:100%;"
          className="frame-1"
          title="MOMENTO OPORTUNO"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};

export { HowItWorksTwo };
