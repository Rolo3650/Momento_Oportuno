import { LayoutOne } from '../../containers/layout/LayoutOne';
import { IconButton } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { TextFieldOne } from '../../components/inputs/text/TextFieldOne';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
//import { Link } from 'react-router-dom';

const Contactanos = () => {
  const theme = useTheme();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  return (
    <LayoutOne>
      <div className="page page-about-us background background-color-6">
        <div className="page-container">
          <div className="header-dialog background background-image-1">
            <div className="header-container pt-5 mx-auto">
              <h1 className="text text-color-5 fw-bold text-font-rubik mb-4">
                Contáctanos
              </h1>
              <div className="d-flex breadcrumb-container">
                <div className="background background-color-12 py-3 px-4 breadcrumb-custom">
                  <span>Inicio</span>
                  <span className="text text-color-5 mx-2">
                    <img src="/svg/icons/menu_row_right.svg" alt="" />
                  </span>
                  <span className="fw-bold">Contáctanos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us_container">
        <div className="contact-us_sect1">
          <div className="sect1_elmnt1">
            <div className="info-section">
              <span className="info">¿Cómo te podemos ayudar?</span>
            </div>
            <div className="subtitle">Estamos para apoyarte</div>
            <div className="c-text">
              Si tienes dudas por favor escribenos y en breve nos comunicaremos
              contigo
            </div>
            <div className="socialmedia">
              <div className="socialmedia-buttons">
                <IconButton
                  className="icon-button"
                  sx={{
                    border: `2px solid #F9A03F`,
                    margin: '4px',
                    width: 50,
                    height: 50,
                    transition: '.5s ease-in-out',
                    ':hover': {
                      border: `2px solid #E4032E`,
                    },
                  }}
                >
                  <FacebookOutlinedIcon
                    sx={{
                      transition: '.5s ease-in-out',
                      ':hover': {
                        color: `#E4032E`,
                      },
                    }}
                  />
                </IconButton>
                <IconButton
                  className="icon-button"
                  sx={{
                    border: `2px solid #F9A03F`,
                    margin: '4px',
                    width: 50,
                    height: 50,
                    transition: '.5s ease-in-out',
                    ':hover': {
                      border: `2px solid #E4032E`,
                    },
                  }}
                >
                  <WhatsAppIcon
                    sx={{
                      transition: '.5s ease-in-out',
                      ':hover': {
                        color: `#E4032E`,
                      },
                    }}
                  />
                </IconButton>
                <IconButton
                  className="icon-button"
                  sx={{
                    border: `2px solid #F9A03F`,
                    margin: '4px',
                    width: 50,
                    height: 50,
                    transition: '.5s ease-in-out',
                    ':hover': {
                      border: `2px solid #E4032E`,
                    },
                  }}
                >
                  <InstagramIcon
                    sx={{
                      transition: '.5s ease-in-out',
                      ':hover': {
                        color: `#E4032E`,
                      },
                    }}
                  />
                </IconButton>
                <IconButton
                  className="icon-button"
                  sx={{
                    border: `2px solid #F9A03F`,
                    margin: '4px',
                    width: 50,
                    height: 50,
                    transition: '.5s ease-in-out',
                    ':hover': {
                      border: `2px solid #E4032E`,
                    },
                  }}
                ></IconButton>
              </div>
            </div>
          </div>
          <div className="sect1_elmnt2">
            <div className="subtitle">Envíanos un mensaje</div>
            <div className="c-row">
              <TextFieldOne
                color={{
                  variant: 'secondary',
                  text: '#464748',
                  field: theme.palette.secondary.main,
                  backgroundColor: '#fff',
                }}
                text="Nombre"
                icon={{ url: '/svg/icons/usr_frm.svg' }}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="d-flex c-row">
              <div style={{ marginRight: '30px' }}>
                <TextFieldOne
                  color={{
                    variant: 'secondary',
                    text: '#464748',
                    field: theme.palette.secondary.main,
                    backgroundColor: '#fff',
                  }}
                  text="Email"
                  icon={{ url: '/svg/icons/arr_frm.svg' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <TextFieldOne
                  color={{
                    variant: 'secondary',
                    text: '#464748',
                    field: theme.palette.secondary.main,
                    backgroundColor: '#fff',
                  }}
                  text="Teléfono"
                  icon={{ url: '/svg/icons/phone_frm.svg' }}
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center c-row">
              <textarea
                className="input-message"
                placeholder="Escriba su mensaje aquí"
              />
            </div>
            <div className="d-flex justify-content-center">
              <GeneralButton
                title="Enviar un mensaje"
                endIcon={<ArrowForward />}
                colorPrimary="primary"
              />
            </div>
          </div>
        </div>
        <div className="contact-us_sect2">
          <div className="sect2_elmnt">
            <div className="d-flex justify-content-center">
              <div className="c-imgcon">
                <img className="c-img" src="/svg/icons/phone_frm.svg" />
              </div>
            </div>

            <div className="subtitle">Llámanos</div>
            <a href="tel:5555885588" className="c-text">
              {' '}
              55 5588 5588
            </a>
          </div>
          <div className="sect2_elmnt">
            <div className="d-flex justify-content-center">
              <div className="c-imgcon">
                <img className="c-img" src="/svg/icons/arr_frm.svg" />
              </div>
            </div>
            <div className="subtitle">Envíanos un e-mail</div>
            <a href="mailto:ayuda@clicdelsureste.com" className="c-text">
              {' '}
              ayuda@clicdelsureste.com
            </a>
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

export { Contactanos };
