import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

interface Props {
  name: string;
  desc: string;
  total: number;
  id: number;
}

const OrderOne: React.FC<Props> = ({ name, desc, total, id }) => {
  useEffect(() => {
    console.log({
      name,
      desc,
      total,
      id,
    });
    // console.log(typeof desc)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateTo = useNavigate();
  return (
    <div className={`order order-one p-3`}>
      <div className="name text text-font-l-d fw-bold fs-5 pb-3 text-color-5">
        {/* Orden {`${id}`}{' '}
        {name
          ?.replace('listing', 'anuncio')
          ?.replace('directory', 'directorio')
          ?.replace('microsite', 'micrositio')} */}
      </div>
      {/* <div className="desc text text-rubik pb-2">
        {`${desc
          ?.replace('Order for', 'Orden para')
          ?.replace('listing', 'anuncio')
          ?.replace('directory', 'directorio')
          ?.replace('microsite', 'micrositio')}`}
      </div> */}

      <div className="price text text-color-primary fw-bold fs-4">
        {/* Total ${' '}
        {`${total
        // .toLocaleString('es-MX', {
        //   minimumFractionDigits: 2,
        //   maximumFractionDigits: 2,
        // })
        }`} */}
        <div className="w-100 mt-3 d-flex justify-content-center btn-container">
          <Button
            variant="contained"
            className="mx-auto"
            color="secondary"
            onClick={() => {
              // // navigateTo('/comprobante/' + id);
              // navigateTo('/comprobante/');
              if (id) {
                navigateTo(`/comprobante/${id ?? 0}`);
              }
            }}
          >
            Ver Detalle
          </Button>
        </div>
      </div>
    </div>
  );
};

export { OrderOne };
