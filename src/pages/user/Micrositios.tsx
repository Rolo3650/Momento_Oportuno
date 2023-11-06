import React, { useEffect } from 'react';
import { LayoutOne } from '../../containers/layout/LayoutOne';
import { useGetStates } from '../../hooks/querys/useStates';
import { MicrositiosOne } from '../../components/micrositios/MicrositiosOne';

interface Props {
  cityName: string;
}

const Micrositios: React.FC<Props> = ({cityName}) => {
  const { data } = useGetStates();
  const city = data?.data?.find((c) => c.name===cityName);
  // useEffect(() => {}, []);
  
  return (
    <LayoutOne>
      <div className="d-flex justify-content-center align-items-center">
        <div className="micrositio-content justify-content-center">
          <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
            Micrositios | {cityName}
          </h1>
          <div className="mt-4">
            <MicrositiosOne cityId={ city?.id }/>
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

export { Micrositios };
