//import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
// import React from 'react';

const FooterOne = () => {
  //const theme = useTheme();

  return (
    <div className={`container-footer`}>
      <div className={`footer-one d-flex justify-content-center w-100`}>
        <div className="footer-body h-100">
          <div className="grid">
            <div className="contact-info sect">
              <div className="contact-text">
                <div className="text-row text">
                  <a className="listivo-phone-v3 text" href="tel:5555885588">
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.99992 0C2.42961 0 0.333252 2.09635 0.333252 4.66667C0.333252 5.38854 0.628564 6.17969 1.0369 7.01458C1.44523 7.85313 1.97752 8.72813 2.51346 9.52656C3.57804 11.1271 4.63898 12.4286 4.63898 12.4286L4.99992 12.8734L5.36086 12.4286C5.36086 12.4286 6.42179 11.1271 7.49002 9.52656C8.02231 8.72813 8.55461 7.85313 8.96294 7.01458C9.37127 6.17969 9.66658 5.38854 9.66658 4.66667C9.66658 2.09635 7.57023 0 4.99992 0ZM4.99998 0.933105C7.06716 0.933105 8.73331 2.59925 8.73331 4.66644C8.73331 5.10394 8.50362 5.82946 8.12445 6.60602C7.74529 7.38623 7.22758 8.23206 6.71352 9.01227C5.92922 10.187 5.37406 10.8791 5.076 11.2507L4.99998 11.3456L4.92395 11.2507C4.62589 10.8791 4.07073 10.187 3.28643 9.01227C2.77237 8.23206 2.25466 7.38623 1.8755 6.60602C1.49633 5.82946 1.26664 5.10394 1.26664 4.66644C1.26664 2.59925 2.93279 0.933105 4.99998 0.933105ZM4.06659 4.66667C4.06659 4.1526 4.48586 3.73333 4.99992 3.73333C5.51398 3.73333 5.93325 4.1526 5.93325 4.66667C5.93325 5.18073 5.51398 5.6 4.99992 5.6C4.48586 5.6 4.06659 5.18073 4.06659 4.66667Z"
                      fill="#FDFDFE"
                    />
                  </svg>
                  Avenida 10 Norte, con Calle 22, Colonia Gonzalo Guerrero.
                </div>
                <div className="text-row text">
                  <a
                    href="mailto:ayuda@clicdelsureste.com"
                    className="listivo-email text"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      style={{ margin: 5 }}
                      viewBox="0 0 11 11"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.666748 5.33334C0.666748 2.57636 2.90976 0.333344 5.66675 0.333344C8.42373 0.333344 10.6667 2.57636 10.6667 5.33334C10.6667 8.09033 8.42373 10.3333 5.66675 10.3333C2.90976 10.3333 0.666748 8.09033 0.666748 5.33334ZM9.91675 5.33334C9.91675 2.98169 8.0184 1.08334 5.66675 1.08334C3.31509 1.08334 1.41675 2.98169 1.41675 5.33334C1.41675 7.685 3.31509 9.58334 5.66675 9.58334C8.0184 9.58334 9.91675 7.685 9.91675 5.33334ZM5.66675 1.83334C3.73811 1.83334 2.16675 3.40471 2.16675 5.33334C2.16675 7.26198 3.73811 8.83334 5.66675 8.83334C6.09853 8.83334 6.51381 8.75498 6.89673 8.61118C7.02369 8.56519 7.11613 8.4545 7.13874 8.32137C7.16136 8.18824 7.11066 8.05324 7.00601 7.9679C6.90135 7.88257 6.75891 7.86008 6.63306 7.90903C6.33297 8.02172 6.00797 8.08334 5.66675 8.08334C4.14338 8.08334 2.91675 6.85671 2.91675 5.33334C2.91675 3.80998 4.14338 2.58334 5.66675 2.58334C7.19011 2.58334 8.41675 3.80998 8.41675 5.33334V5.70834C8.41675 6.0579 8.1413 6.33334 7.79175 6.33334C7.44219 6.33334 7.16675 6.0579 7.16675 5.70834V3.95834C7.16826 3.76767 7.02645 3.60621 6.83718 3.5831C6.64791 3.55999 6.47142 3.68258 6.427 3.86801C6.17391 3.68941 5.87117 3.58334 5.54175 3.58334C4.62879 3.58334 3.91675 4.39021 3.91675 5.33334C3.91675 6.27648 4.62879 7.08334 5.54175 7.08334C6.00443 7.08334 6.41482 6.87538 6.70776 6.54819C6.96013 6.87236 7.35256 7.08334 7.79175 7.08334C8.54669 7.08334 9.16675 6.46329 9.16675 5.70834V5.33334C9.16675 3.40471 7.59538 1.83334 5.66675 1.83334ZM6.41675 5.33334C6.41675 4.75998 6.00729 4.33334 5.54175 4.33334C5.0762 4.33334 4.66675 4.75998 4.66675 5.33334C4.66675 5.90671 5.0762 6.33334 5.54175 6.33334C6.00729 6.33334 6.41675 5.90671 6.41675 5.33334Z"
                        fill="#FDFDFE"
                      />
                    </svg>
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
                      transition: '.5s ease-in-out',
                      ':hover': {
                        border: `2px solid #FD542A`,
                      },
                    }}
                  >
                    <FacebookOutlinedIcon
                      sx={{
                        transition: '.5s ease-in-out',
                        ':hover': {
                          color: `#FD542A`,
                        },
                      }}
                    />
                  </IconButton>
                  <IconButton
                    className="icon-button"
                    sx={{
                      border: `3px solid #291b22`,
                      margin: '4px',
                      width: 40,
                      height: 40,
                      transition: '.5s ease-in-out',
                      ':hover': {
                        border: `2px solid #FD542A`,
                      },
                    }}
                  >
                    <WhatsAppIcon
                      sx={{
                        transition: '.5s ease-in-out',
                        ':hover': {
                          color: `#FD542A`,
                        },
                      }}
                    />
                  </IconButton>
                  <IconButton
                    className="icon-button"
                    sx={{
                      border: `3px solid #291b22`,
                      margin: '4px',
                      width: 40,
                      height: 40,
                      transition: '.5s ease-in-out',
                      ':hover': {
                        border: `2px solid #FD542A`,
                      },
                    }}
                  >
                    <InstagramIcon
                      sx={{
                        transition: '.5s ease-in-out',
                        ':hover': {
                          color: `#FD542A`,
                        },
                      }}
                    />
                  </IconButton>
                  <IconButton
                    className="icon-button"
                    sx={{
                      border: `3px solid #291b22`,
                      margin: '4px',
                      width: 40,
                      height: 40,
                      transition: '.5s ease-in-out',
                      ':hover': {
                        border: `2px solid #FD542A`,
                      },
                    }}
                  ></IconButton>
                </div>
              </div>
            </div>
            <div className="info sect">
              <h3 className="subtitle">Te puede ser útil</h3>
              <Link to="/about-us" className="list-link">
              <div className="list-element text animated">
                Nosotros
              </div>
              </Link>
              <Link to="/contact-us" className="list-link">
              <div className="list-element text animated">
                Contáctanos
              </div>
              </Link>
              <Link to="/login-register?tab=register" className="list-link">
                <div className="list-element text animated">Regístrate</div>
              </Link>
            </div>
            <div className="categories sect">
              <h3 className="subtitle">Categorías</h3>

              <div className="list-element text animated">Comunidad</div>
              <div className="list-element text animated">Empleos</div>
              <div className="list-element text animated">Vehículos</div>
              <div className="list-element text animated">Servicios</div>
              <div className="list-element text animated">Inmuebles</div>
            </div>
            <div className="recent sect">
              <h3 className="subtitle">Recientemente Publicado</h3>

              <div className="list-element">
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
                <div className="recent-content">
                  <a
                    className="text2"
                    href="ad/cafetera-fox-steel-morelia/index.html"
                    title="Cafetera FOX STEEL MORELIA"
                  >
                    Cafetera FOX STEEL MORELIA{' '}
                  </a>
                  <div className="recent-price">$95,196.00</div>
                </div>
              </div>
              <div className="list-element">
                <a
                  href="ad/cafetera-fox-steel-morelia/index.html"
                  title="Cafetera FOX STEEL MORELIA"
                >
                  <img
                    className="recent-img"
                    src="https://clicdelsureste.empresarialti.com/wp-content/uploads/2023/09/Cafe-La-fuente-Producto4-100x100.jpg"
                    alt="Cloe Café"
                  />
                </a>
                <div className="recent-content">
                  <a
                    className="text2"
                    href="ad/publicacion-con-micrositio/index.html"
                    title="Cloe Café"
                  >
                    Cloe Café{' '}
                  </a>
                  <div className="recent-price">$1,000.00</div>
                </div>
              </div>
              <div className="list-element">
                <a
                  href="ad/cafetera-fox-steel-morelia/index.html"
                  title="Cafetera FOX STEEL MORELIA"
                >
                  <img
                    className="recent-img"
                    src="https://clicdelsureste.empresarialti.com/wp-content/uploads/2023/09/D_NQ_NP_2X_673145-MLM51674413262_092022-F-100x100.webp"
                    alt="274 Piezas Kit De Accesorios De Anzuelos Pesca Con Caja"
                  />
                </a>
                <div className="recent-content">
                  <a
                    className="text2"
                    href="ad/publicacion-con-micrositio/index.html"
                    title="274 Piezas Kit De Accesorios De Anzuelos Pesca Con Caja"
                  >
                    274 Piezas Kit De Accesorios De Anzuelos Pesca Con Caja{' '}
                  </a>
                  <div className="recent-price">$500.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rights_reserved">
        <div className="rights_reserved-text">
          Momento Oportuno © 2023 - Todos los derechos reservados
        </div>
      </div>
    </div>
  );
};

export { FooterOne };
