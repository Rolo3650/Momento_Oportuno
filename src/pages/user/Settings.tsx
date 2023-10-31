import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';

interface Props {}

const Setting: React.FC<Props> = () => {
  return (
    <LayoutThree>
      <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
        Ajustes
      </h1>
    </LayoutThree>
  );
};

export { Setting };
