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
        <div className="grid">
          <div className="contact-info sect">
            <div className="contact-text">
              <div className="text-row text">
                <a className="listivo-phone-v3" href="tel:5555885588">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ margin: 5 }}
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                  >
                    <path
                      d="M1.5 0C0.6775 0 0 0.6775 0 1.5V11.8333C0 12.6558 0.6775 13.3333 1.5 13.3333H6.5C7.3225 13.3333 8 12.6558 8 11.8333V1.5C8 0.6775 7.3225 0 6.5 0H1.5ZM1.5 1H6.5C6.78217 1 7 1.21783 7 1.5V11.8333C7 12.1155 6.78217 12.3333 6.5 12.3333H1.5C1.21783 12.3333 1 12.1155 1 11.8333V1.5C1 1.21783 1.21783 1 1.5 1ZM4 2C3.86739 2 3.74022 2.05268 3.64645 2.14645C3.55268 2.24021 3.5 2.36739 3.5 2.5C3.5 2.63261 3.55268 2.75978 3.64645 2.85355C3.74022 2.94732 3.86739 3 4 3C4.13261 3 4.25979 2.94732 4.35355 2.85355C4.44732 2.75978 4.5 2.63261 4.5 2.5C4.5 2.36739 4.44732 2.24021 4.35355 2.14645C4.25979 2.05268 4.13261 2 4 2ZM3.16667 10.3333C3.10041 10.3324 3.03463 10.3446 2.97315 10.3693C2.91166 10.394 2.8557 10.4307 2.80852 10.4773C2.76133 10.5238 2.72386 10.5792 2.69829 10.6403C2.67271 10.7015 2.65955 10.7671 2.65955 10.8333C2.65955 10.8996 2.67271 10.9652 2.69829 11.0263C2.72386 11.0875 2.76133 11.1429 2.80852 11.1894C2.8557 11.2359 2.91166 11.2726 2.97315 11.2973C3.03463 11.322 3.10041 11.3343 3.16667 11.3333H4.83333C4.89959 11.3343 4.96537 11.322 5.02685 11.2973C5.08834 11.2726 5.1443 11.2359 5.19148 11.1894C5.23867 11.1429 5.27614 11.0875 5.30171 11.0263C5.32729 10.9652 5.34046 10.8996 5.34046 10.8333C5.34046 10.7671 5.32729 10.7015 5.30171 10.6403C5.27614 10.5792 5.23867 10.5238 5.19148 10.4773C5.1443 10.4307 5.08834 10.394 5.02685 10.3693C4.96537 10.3446 4.89959 10.3324 4.83333 10.3333H3.16667Z"
                      fill="#FDFDFE"
                    />
                  </svg>
                  55 5588 5588
                </a>
              </div>
              <div className="text-row text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  style={{ margin: 5 }}
                  height="13"
                  viewBox="0 0 10 15"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.99992 0C2.42961 0 0.333252 2.09635 0.333252 4.66667C0.333252 5.38854 0.628564 6.17969 1.0369 7.01458C1.44523 7.85313 1.97752 8.72813 2.51346 9.52656C3.57804 11.1271 4.63898 12.4286 4.63898 12.4286L4.99992 12.8734L5.36086 12.4286C5.36086 12.4286 6.42179 11.1271 7.49002 9.52656C8.02231 8.72813 8.55461 7.85313 8.96294 7.01458C9.37127 6.17969 9.66658 5.38854 9.66658 4.66667C9.66658 2.09635 7.57023 0 4.99992 0ZM4.99998 0.933105C7.06716 0.933105 8.73331 2.59925 8.73331 4.66644C8.73331 5.10394 8.50362 5.82946 8.12445 6.60602C7.74529 7.38623 7.22758 8.23206 6.71352 9.01227C5.92922 10.187 5.37406 10.8791 5.076 11.2507L4.99998 11.3456L4.92395 11.2507C4.62589 10.8791 4.07073 10.187 3.28643 9.01227C2.77237 8.23206 2.25466 7.38623 1.8755 6.60602C1.49633 5.82946 1.26664 5.10394 1.26664 4.66644C1.26664 2.59925 2.93279 0.933105 4.99998 0.933105ZM4.06659 4.66667C4.06659 4.1526 4.48586 3.73333 4.99992 3.73333C5.51398 3.73333 5.93325 4.1526 5.93325 4.66667C5.93325 5.18073 5.51398 5.6 4.99992 5.6C4.48586 5.6 4.06659 5.18073 4.06659 4.66667Z"
                    fill="#FDFDFE"
                  />
                </svg>
                Avenida 10 Norte, con Calle 22, Colonia Gonzalo Guerrero.
              </div>
              <div className="text-row text">
                <a
                  href="mailto:ayuda@clicdelsureste.com"
                  className="listivo-email"
                >
                  ayuda@clicdelsureste.com
                </a>
              </div>
            </div>
            <div className="socialmedia">
              <div className="socialmedia-text text">
                Siguenos en nuestras redes
              </div>
              <div className="socialmedia-buttons">
                <IconButton
                  className="icon-button"
                  sx={{
                    border: `3px solid #291b22`,
                    margin: '4px',
                    width: 40,
                    height: 40,
                    transitionDelay: 1,
                    ':hover': {
                      border: `2px solid orange`,
                    },
                  }}
                >
                  <FacebookOutlinedIcon />
                </IconButton>
                <IconButton
                  className="icon-button"
                  sx={{
                    border: `3px solid #291b22`,
                    margin: '4px',
                    width: 40,
                    height: 40,
                    transitionDelay: 1,
                    ':hover': {
                      border: `2px solid orange`,
                    },
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
                <IconButton
                  className="icon-button"
                  sx={{
                    border: `3px solid #291b22`,
                    margin: '4px',
                    width: 40,
                    height: 40,
                    ':hover': {
                      border: `2px solid orange`,
                      transitionDelay: 2,
                    },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  className="icon-button"
                  sx={{
                    border: `3px solid #291b22`,
                    margin: '4px',
                    width: 40,
                    height: 40,
                    transitionDelay: 1,
                    ':hover': {
                      border: `2px solid orange`,
                    },
                  }}
                ></IconButton>
              </div>
            </div>
          </div>
          <div className="info sect">
            <h3 className="subtitle">Te puede ser útil</h3>
            <ul>
              <li className="list-element text">Nosotros</li>
              <li className="list-element text ">Contáctanos</li>
              <li className="list-element text">Regístrate</li>
            </ul>
          </div>
          <div className="categories sect">
            <h3 className="subtitle">Categorías</h3>
            <ul>
              <li className="list-element text">Comunidad</li>
              <li className="list-element text">Empleos</li>
              <li className="list-element text">Vehículos</li>
              <li className="list-element text">Servicios</li>
              <li className="list-element text">Inmuebles</li>
            </ul>
          </div>
          <div className="recent sect">
            <h3 className="subtitle">Recientemente Publicado</h3>
            <ul>
              <li className="list-element text">
                <a
                  href="ad/cafetera-fox-steel-morelia/index.html"
                  title="Cafetera FOX STEEL MORELIA"
                >
                  <img
                    className="recent-img"
                    src="https://clicdelsureste.empresarialti.com/wp-content/uploads/2023/09/D_NQ_NP_2X_698498-MLM44517794724_012021-F-100x100.webp"
                    alt="Cafetera FOX STEEL MORELIA"
                  />
                </a>
                <div className="listivo-mini-listing__content">
                  <a
                    className="listivo-mini-listing__label"
                    href="ad/cafetera-fox-steel-morelia/index.html"
                    title="Cafetera FOX STEEL MORELIA"
                  >
                    Cafetera FOX STEEL MORELIA{' '}
                  </a>
                  <div className="recent-price">$95,196.00</div>
                </div>
              </li>
              <li className="list-element text">Empleos</li>
              <li className="list-element text">Vehículos</li>
              <li className="list-element text">Servicios</li>
              <li className="list-element text">Inmuebles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FooterOne };
