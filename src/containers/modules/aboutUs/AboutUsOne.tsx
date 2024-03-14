const AboutUsOne = () => {
  return (
    // <div className="w-100 d-flex align-items-center">
    <>
      <div className="container mx-auto">
      <div className="container-info">
        <div className="d-flex">
          <div className="info-section">
            <span className="info">Acerca de Nosotros</span>
          </div>
        </div>
      </div>
      </div>
      <div className="container mx-auto">
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
      </div>
    </>
    // </div>
  );
};

export { AboutUsOne };
