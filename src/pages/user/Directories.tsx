import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';

interface Props {}

const Directories: React.FC<Props> = () => {
  return (
    <LayoutThree>
      <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
        Directorios
      </h1>
    </LayoutThree>
  );
};

export { Directories };
