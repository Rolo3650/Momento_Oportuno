import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
// import { useAppContext } from '../../context';
import { FormTwo } from '../../components/form/formOne/FormTwo';

interface Props {}

const EditAd: React.FC<Props> = () => {
  // const { state } = useAppContext();

  return (
    <LayoutThree>
      <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
        Publicar Anuncio
      </h1>
      <div className="mt-4 pb-5">
        <FormTwo />
      </div>
    </LayoutThree>
  );
};

export { EditAd };
