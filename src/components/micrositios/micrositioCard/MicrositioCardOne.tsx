import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Microsite } from '../../../api';

interface Props {
  micrositio: Microsite;
}

const MicrositioCardOne: React.FC<Props> = ({ micrositio }) => {
  const navigateTo = useNavigate();

  return (
    <div className="micrositios-card">
      <div
        onClick={() =>navigateTo(`/microsite/${micrositio.id}`)}>
        <div>
          <img src={micrositio.image ?? ''} alt="" />
        </div>
        <div className="info fs-5 fw-bold text text-color-5 text-font-rubik">
          <div className="name">{micrositio.title}</div>
          <div className="mt-3">{micrositio.description}</div>
        </div>
      </div>
    </div>
  );
};

export { MicrositioCardOne };
