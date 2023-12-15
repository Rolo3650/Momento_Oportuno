import React, { useEffect } from 'react';
import { FormMicrositioOne } from '../../components/formMicrositio/FormMicrositioOne';
import { LayoutOne } from '../../containers/layout/LayoutOne';

interface Props {}

const CreateMicrositio: React.FC<Props> = () => {
  useEffect(() => {}, []);

  return (
    <LayoutOne>
      <div className="d-flex justify-content-center align-items-center">
        <div className="micrositio-content justify-content-center">
          <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
            Crear Micrositio
          </h1>
          <div className="mt-4">
            <FormMicrositioOne />
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

export { CreateMicrositio };
