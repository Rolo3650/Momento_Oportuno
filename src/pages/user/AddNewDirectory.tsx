import React, { useEffect } from 'react';
import { LayoutOne } from '../../containers/layout/LayoutOne';
import { FormDirectoryOne } from '../../components/formDirectory/FormDirectoryOne';

interface Props {}

const AddNewDirectory: React.FC<Props> = () => {
  useEffect(() => {}, []);

  return (
    <LayoutOne>
      <div className="d-flex justify-content-center align-items-center">
        <div className="micrositio-content justify-content-center">
          <div className="directory-text-container">
            <h1 className="directory-title">
              Inscríbete en el directorio local
            </h1>
            <div className="directory-text2">
              {' '}
              Para inscribirte en el directorio local ese necesario llenar el
              formulario y realizar el pago de inscripción que consiste en
              aparecer en el directorio por 30 días
            </div>
            <div className="directory-text3">
              Únete a nosotros y da visibilidad a tu negocio en tu comunidad
            </div>
          </div>

          <div className="mt-4">
            <FormDirectoryOne />
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

export { AddNewDirectory };
