import { useNavigate } from 'react-router';
// import FinesseButton from '../../../components/inputs/buttons/FinesseButton';
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { GeneralButton } from '../../../components/inputs/buttons/GeneralButton';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';

const AboutUsOne = () => {
  const navigateTo = useNavigate();

  return (
    // <div className="w-100 d-flex align-items-center">
    <>
      {/* <div className="container mx-auto">
        <div className="container-info">
          <div className="d-flex">
            <div className="info-section">
              <span className="info">Acerca de Nosotros</span>
            </div>
          </div>
        </div>
      </div> */}

      <div className="page page-about-us-2 background background-color-6">
        <div className="w-100 background background-color-7">
          <div className="body-one mx-auto">
            <div className="info p-4">
              <div className="text-center">
                <span className="text text-center text-font-l-d background background-color-12 px-3 py-2 rounded">
                  Acerca de Nosotros
                </span>
                <div className="title text text-center text-font-georgia fs-1 fw-bold mt-3 mb-4">
                  Con más de 20 años de experiencia
                </div>
                <div className="pt-2 text-center">
                  El Momento Oportuno se destaca como la principal plataforma de
                  comercio electrónico en la región, congregando a miles de
                  compradores y vendedores para llevar a cabo transacciones de
                  una amplia variedad de productos y servicios sin
                  intermediarios. Arraigados en el medio impreso, hemos
                  presenciado la evolución de la comunicación y adaptado
                  nuestras habilidades para prosperar en un mundo en constante
                  cambio.
                </div>
                <div className="title text text-center text-font-georgia fs-1 fw-bold mt-3 mb-4">
                  Nuestra misión
                </div>
                <div className="pt-2 text-center">
                  Nuestra misión es democratizar el comercio, por lo que
                  cualquier persona puede vender o comprar en El Momento
                  Oportuno, ¡sólo necesitas conexión a internet! Lo hacemos
                  fácil, "Contigo, en cualquier lugar"
                </div>
                {/* <div className="mt-4 text-center">
                  <FinesseButton
                    color={{ text: 'white', background: '#FF5B52' }}
                    icon={{ muiIcon: <ArrowForwardIosOutlinedIcon /> }}
                    text="Ver Anuncios"
                    onClick={() => {
                      navigateTo('/ads');
                    }}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="body-two mx-auto text-center mt-5">
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
            <div>
          <GeneralButton
            title="Conoce más"
            endIcon={<AddCircleOutline />}
            colorPrimary="secondary"
            width="250px"
            onClick={()  => {
              navigateTo('/about-us')
            }}
          />
            </div>
          </div>
      </div>

      {/* <div className="container mx-auto">
        <div className="container-img">
          <img className="img" src="./img/aboutUs/5167881-01.png" />
        </div>

        <div className="d-flex align-items-center">
          <div className="container-info">
            <div className="info-title">¿Buscas algo en tu región?</div>
            <div className="info-text">
              El Momento Oportuno te brinda una plataforma confiable y fácil
              para publicar tus anuncios. Confía en nosotros para encontrar lo
              que necesitas o vender con éxito.
            </div>
            <div className="info-row">
              <div className="fact">
                <div className="fact-text">
                  <div className="big">100</div>
                  <div className="small">mil</div>
                </div>
                <div className="fact-description">
                  Anuncios cargados diariamente
                </div>
              </div>
              <div className="fact">
                <div className="fact-text">
                  <div className="big">20</div>
                  <div className="small">+</div>
                </div>
                <div className="fact-description">Transacciones por hora</div>
              </div>
              <div className="fact">
                <div className="fact-text">
                  <div className="big">50</div>
                  <div className="small">mil</div>
                </div>
                <div className="fact-description">Usuarios registrados</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
    // </div>
  );
};

export { AboutUsOne };
