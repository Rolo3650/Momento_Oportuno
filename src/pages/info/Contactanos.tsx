import { LayoutOne } from '../../containers/layout/LayoutOne';

const Contactanos = () => {
  return (
    <LayoutOne>
      <div className="d-flex justify-content-center">
        <div className="contact-us_container">
          <div className="contact-us_sect1">
            <div className="sect1_elmnt1">
              <div className="title">Contáctanos</div>
              <div className="info-section">
                <span className="info">¿Cómo te podemos ayudar?</span>
              </div>
            </div>
            <div className="sect1_elmnt2"></div>
          </div>
          <div className="contact-us_sect2">
            <div className="sect2_elmnt"></div>
            <div className="sect2_elmnt"></div>
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

export { Contactanos };
