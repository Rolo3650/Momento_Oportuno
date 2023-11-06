import React, { useEffect } from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { FormOne } from '../../components/form/formOne/FormOne';
import { useAppContext } from '../../context';

interface Props {}

const AddNewAd: React.FC<Props> = () => {
  const { state } = useAppContext();

  useEffect(() => {
    console.log(state?.newAdForm);
  }, [state]);

  return (
    <LayoutThree>
      <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
        Publicar Anuncio
      </h1>
      <div className="mt-4">
        <FormOne />
      </div>
    </LayoutThree>
  );
};

export { AddNewAd };
