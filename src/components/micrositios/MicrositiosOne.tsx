import React, { useEffect } from 'react';
import { MicrositioCardOne } from './micrositioCard/MicrositioCardOne';
import { useMicrositios } from '../../hooks/micrositios';

interface Props {
  cityId?: number;
}

const MicrositiosOne: React.FC<Props> = ({ cityId }) => {
  // const { data, isLoading, refetch: refresh } = useMicrositios();
  const { data, isLoading } = useMicrositios();

  const micrositios = data?.data.filter((ms) => ms.state.id === cityId);

  useEffect(() => {
    console.log('MICROSITIOS', micrositios);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="microsites">
      <div className="wrap">
        {!data || isLoading ? (
          <p>Cargando</p>
        ) : micrositios?.length && micrositios?.length > 0 ? (
          micrositios?.map((ms) => {
            return <MicrositioCardOne micrositio={ms} />;
          })
        ) : (
          <p>No hay micrositios</p>
        )}
      </div>  
    </div>
  );
};

export { MicrositiosOne };
