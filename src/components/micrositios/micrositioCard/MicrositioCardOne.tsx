import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Microsite } from '../../../api';
import { Button } from '@mui/material';

interface Props {
  micrositio: Microsite;
}

const MicrositioCardOne: React.FC<Props> = ({ micrositio }) => {
  const navigateTo = useNavigate();

  return (
    <div className="box rounded-4">
      <div className="box-top">
        <img
          className="box-image rounded-3"
          src={
            micrositio.media && micrositio.media.length > 0
              ? micrositio.media[0].original_url
              : ''
          }
          alt="Girl Eating Pizza"
        />
        <div className="title-flex">
          <h3 className="box-title w-100 text-center justify-content-center">{micrositio.title}</h3>
          {/* <p className="user-follow-info">{micrositio.email}</p> */}
        </div>
        {/* <p className="description">{micrositio.phone}</p> */}
      </div>
      <Button
        variant="contained"
        color='primary'
        onClick={() => navigateTo(`/micrositio/${micrositio.id}`)}
        className="button"
      >
        Entrar a Micrositio
      </Button>
    </div>
  );
};

export { MicrositioCardOne };
