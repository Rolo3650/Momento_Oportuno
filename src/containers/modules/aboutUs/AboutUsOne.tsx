const AboutUsOne = () => {
  return (
    // <div className="w-100 d-flex align-items-center">
      <div className="container mx-auto">
        <div className="container-img">
          <img className="img" src="./img/aboutUs/aboutUs1.jpeg" />
        </div>

        <div className="d-flex align-items-center">
          <div className="container-info">
            <div className="d-flex">
              <div className="info-section">
                <span className="info">Acerca de Nosotros</span>
              </div>
            </div>
            <div className="info-title">¿Estás buscando algo en tu área?</div>
            <div className="info-text">
              ¿Estás buscando algo en tu región? ¡El Momento Oportuno está aquí
              para ayudarte! Somos una empresa seria que se dedica a
              proporcionar una plataforma confiable y fácil de usar para
              publicar tus avisos de ocasión. Nuestro objetivo es funcionar como
              un enlace entre un gran número de compradores interesados. Confía
              en nosotros para encontrar lo que necesitas o vender lo que tienes
              a la venta.
            </div>
            <div className="info-row">
              <div className="fact">
                <div className="fact-text">
                  <div className="big">100</div><div className="small">mil</div>
                </div>
                <div className="fact-description">Anuncios cargados diariamente</div>
              </div>
              <div className="fact">
                <div className="fact-text">
                  <div className="big">20</div><div className="small">+</div>
                </div>
                <div className="fact-description">Transacciones por hora</div>
              </div>
              <div className="fact">
                <div className="fact-text">
                  <div className="big">50</div><div className="small">mil</div>
                </div>
                <div className="fact-description">Usuarios registrados</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    // </div>
  );
};

export { AboutUsOne };
