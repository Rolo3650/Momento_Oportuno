import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { OffCanvasOne } from '../../components/offCanvas/OffCanvasOne';
import { useSettings } from '../../hooks';
import { FormThree } from '../../components/form/formThree/FormThree';
import { FormFour } from '../../components/form/formFour/FormFour';

interface Props {}

const Setting: React.FC<Props> = () => {
  const { acountSettings, setAcountSettings, socialMediaSettings, setSocialMediaSettings } = useSettings();

  return (
    <LayoutThree>
      <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
        Ajustes
      </h1>
      <div className="py-5">
        <div>
        <OffCanvasOne
          title="Detalles de cuenta"
          open={acountSettings.open}
          onClick={() => {
            setAcountSettings({ open: !acountSettings.open });
          }}
        >
          <FormThree />
        </OffCanvasOne>
        </div>
        <div className='mt-5'>
        <OffCanvasOne
          title="Redes Sociales"
          open={socialMediaSettings.open}
          onClick={() => {
            setSocialMediaSettings({ open: !socialMediaSettings.open });
          }}
        >
          <FormFour />
        </OffCanvasOne>
        </div>
      </div>
    </LayoutThree>
  );
};

export { Setting };
