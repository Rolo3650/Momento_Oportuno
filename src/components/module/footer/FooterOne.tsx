//import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';
// import React from 'react';

const FooterOne = () => {
  //const theme = useTheme();

  return (
    <div className={`footer-one d-flex justify-content-center w-100`}>
      <div className="footer-body align-items-center h-100">
        <div className="contact-text">
          <div className="text-row text">55 5588 5588</div>
          <div className="text-row text">Avenida 10 Norte, con Calle 22, Colonia Gonzalo Guerrero.</div>
          <div className="text-row text">ayuda@clicdelsureste.com</div>
        </div>
        <div className="socialmedia">
          <div className="socialmedia-text">Siguenos en nuestras redes</div>
          <div className="socialmedia-buttons">
            <IconButton
              sx={{
                border: `2px solid #291b22`,
                margin: '4px',
              }}
            ></IconButton>
            <IconButton
              sx={{
                border: `2px solid #291b22`,
                margin: '4px',
              }}
            ></IconButton>
          </div>
        </div>
        <div className="desktop"></div>
      </div>
    </div>
  );
};

export { FooterOne };
