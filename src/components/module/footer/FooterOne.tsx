//import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
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
          <div className="socialmedia-text text">Siguenos en nuestras redes</div>
          <div className="socialmedia-buttons">
            <IconButton
              sx={{
                border: `4px solid #291b22`,
                margin: '4px',
                width: 40,
                height: 40,
              }}
            ><FacebookOutlinedIcon /></IconButton>
            <IconButton
              sx={{
                border: `4px solid #291b22`,
                margin: '4px',
                width: 40,
                height: 40,
              }}  
            ><WhatsAppIcon /></IconButton>
            <IconButton
              sx={{
                border: `4px solid #291b22`,
                margin: '4px',
                width: 40,
                height: 40,
              }}
            ><InstagramIcon /></IconButton>
            <IconButton
              sx={{
                border: `4px solid #291b22`,
                margin: '4px',
                width: 40,
                height: 40,
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
