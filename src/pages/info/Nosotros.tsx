import { useNavigate } from 'react-router';
import FinesseButton from '../../components/inputs/buttons/FinesseButton';
import { LayoutOne } from '../../containers/layout/LayoutOne';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { TextFieldOne } from '../../components/inputs/text/TextFieldOne';
import { useTheme } from '@mui/material';
import { useState } from 'react';
import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Swal from 'sweetalert2';

const Nosotros = () => {
  const navigateTo = useNavigate();
  const theme = useTheme();

  const [email, setEmail] = useState<string>('');

  const sendEmail = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regexEmail.test(email)) {
      Swal.fire('Correo enviado', 'El correo ha sido enviado', 'success');
    } else {
      Swal.fire('Correo no válido', 'Ingresa un correo válido', 'error');
    }
  };

  return (
    <LayoutOne>
      <div className="page page-about-us background background-color-6">
        <div className="page-container">
          <div className="header-dialog background background-image-1">
            <div className="header-container pt-5 mx-auto">
              <h1 className="text text-color-5 fw-bold text-font-rubik mb-4">
                Nosotros
              </h1>
              {/* <div className="d-flex breadcrumb-container">
                <div className="background background-color-12 py-3 px-4 breadcrumb-custom">
                  <span>Inicio</span>
                  <span className="text text-color-5 mx-2">
                    <img src="/svg/icons/menu_row_right.svg" alt="" />
                  </span>
                  <span>Nosotros</span>
                </div>
              </div> */}
            </div>
          </div>

          <div className="w-100 background background-color-7">
            <div className="body-one mx-auto">
              <div className="info p-4">
                <div className="text-center">
                  <span className="text text-center text-font-l-d background background-color-12 px-3 py-2 rounded fs-4">
                    ¿Quiénes somos?
                  </span>
                  <div className="title text text-center text-font-georgia fs-2 fw-bold mt-3 mb-4">
                    Con más de 20 años de experiencia
                  </div>
                  <div className="pt-2 text-center">
                    El Momento Oportuno se destaca como la principal plataforma
                    de comercio electrónico en la región, congregando a miles de
                    compradores y vendedores para llevar a cabo transacciones de
                    una amplia variedad de productos y servicios sin
                    intermediarios. Arraigados en el medio impreso, hemos
                    presenciado la evolución de la comunicación y adaptado
                    nuestras habilidades para prosperar en un mundo en constante
                    cambio.
                  </div>
                  <div className="title text text-center text-font-georgia fs-2 fw-bold mt-3 mb-4">
                    Nuestra misión
                  </div>
                  <div className="pt-2 text-center">
                    Nuestra misión es democratizar el comercio, por lo que
                    cualquier persona puede vender o comprar en El Momento
                    Oportuno, ¡sólo necesitas conexión a internet! Lo hacemos
                    fácil, "Contigo, en cualquier lugar"
                  </div>
                  <div className="mt-4 text-center">
                    <FinesseButton
                      color={{ text: 'white', background: '#FF5B52' }}
                      icon={{ muiIcon: <ArrowForwardIosOutlinedIcon /> }}
                      text="Ver Anuncios"
                      onClick={() => {
                        navigateTo('/ads');
                      }}
                    />
                  </div>
                </div>
              </div>
              <img
                className="w-100 rounded"
                src="/img/aboutUs/5167881-10.png"
                alt=""
              />
            </div>
          </div>

          <div className="body-two mx-auto text-center mt-5">
            <span className="text text-font-l-d background background-color-12 px-3 py-2 rounded">
              ¿Porqué nosotros?
            </span>
            <div className="title text text-font-georgia fs-1 fw-bold mt-4 mb-5">
              Una nueva propuesta <br /> en anuncios clasificados
            </div>
            <div className="d-flex flex-wrap background background-color-7 p-4 justify-content-between border border-color-15 rounded mb-5">
              <div className="info text-center py-3">
                <div className="d-flex align-items-center justify-content-center text text-color-11">
                  <span className="text text-font-monoton fs-1">120</span>
                  <span className="text text-font-helvetica fs-5">k</span>
                </div>
                <div className="text text-font-l-d fw-bold text-color-5">
                  Anuncios Publicados
                </div>
              </div>
              <div className="info text-center py-3">
                <div className="d-flex align-items-center justify-content-center text text-color-11">
                  <span className="text text-font-monoton fs-1">2.7</span>
                  <span className="text text-font-helvetica fs-5">m</span>
                </div>
                <div className="text text-font-l-d fw-bold text-color-5">
                  de Búsquedas
                </div>
              </div>
              <div className="info text-center py-3">
                <div className="d-flex align-items-center justify-content-center text text-color-11">
                  <span className="text text-font-monoton fs-1">20</span>
                  <span className="text text-font-helvetica fs-5">+</span>
                </div>
                <div className="text text-font-l-d fw-bold text-color-5">
                  Usuarios Registrados
                </div>
              </div>
              <div className="info text-center py-3">
                <div className="d-flex align-items-center justify-content-center text text-color-11">
                  <span className="text text-font-monoton fs-1">50</span>
                  <span className="text text-font-helvetica fs-5">mil</span>
                </div>
                <div className="text text-font-l-d fw-bold text-color-5">
                  Anuncios Publicados
                </div>
              </div>
            </div>
          </div>

          <div className="w-100 background background-color-7 py-3">
            <div className="body-three mx-auto text-center mt-5">
              <span className="text text-font-l-d background background-color-12 px-3 py-2 rounded">
                Encuentra lo que buscas
              </span>
              <div className="title text text-font-georgia fs-1 fw-bold mt-4 mb-5">
                ¿Cómo podemos ayudarte?
              </div>
              <div className="my-5 info">
                <div>
                  <img src="/img/icons/search_two.png" />
                  <div className="d-flex my-3">
                    <div className="w-135-px"></div>
                    <div className="circle rounded-circle"></div>
                    <div className="w-135-px border-custom"></div>
                  </div>
                  <div className="fw-bold text text-font-rubik fs-4 text-color-5">
                    Utiliza nuestro buscador para encontrar lo que buscas
                  </div>
                </div>
                <div>
                  <img src="/img/icons/location_one.png" />
                  <div className="d-flex my-3">
                    <div className="w-135-px  border-custom"></div>
                    <div className="circle rounded-circle"></div>
                    <div className="w-135-px border-custom"></div>
                  </div>
                  <div className="fw-bold text text-font-rubik fs-4 text-color-5">
                    Encuentra entre una gran variedad de anunciantes divididos
                    por región
                  </div>
                </div>
                <div>
                  <img src="/img/icons/pc_one.png" />
                  <div className="d-flex my-3">
                    <div className="w-135-px border-custom"></div>
                    <div className="circle rounded-circle"></div>
                    <div className="w-135-px"></div>
                  </div>
                  <div className="fw-bold text text-font-rubik fs-4 text-color-5">
                    Explora, compara y encuentra tu mejor opción
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="background background-image-2 pb-5">
            <div className="header-container pt-5 mx-auto pb-5">
              <h2 className="text text-color-5 fw-bold text-font-georgia py-5 m-0 text-center">
                Suscríbete y recibe novedades y ofertas
              </h2>
              <div className="d-flex justify-content-center pb-5">
                <div className="p-3 rounded background background-color-7">
                  <TextFieldOne
                    color={{
                      variant: 'secondary',
                      text: '#464748',
                      field: theme.palette.secondary.main,
                      backgroundColor: '#fff',
                    }}
                    text="Email*"
                    icon={{ url: '/svg/icons/arr_frm.svg' }}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  ></TextFieldOne>
                </div>
              </div>
              <div className="d-flex justify-content-center pb-5">
                <div>
                  <GeneralButton
                    title="Suscribirse"
                    endIcon={<ArrowForward />}
                    colorPrimary="primary"
                    onClick={sendEmail}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};
export { Nosotros };
