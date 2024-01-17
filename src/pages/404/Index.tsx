import { LayoutOne } from '../../containers/layout/LayoutOne';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

const Page404 = () => {
  const navigateTo = useNavigate();

  return (
    <LayoutOne>
      <div className="d-flex justify-content-center my-5">
        <img src="/svg/404/one.svg" alt="" />
      </div>
      <div className="d-flex justify-content-center my-5">
        <h1 className='text text-font-georgia text-color-5 fw-bold'>Página no encontrada</h1>
      </div>
      <div className="d-flex justify-content-center my-5">
        <Button
          variant="contained"
          onClick={() => {
            navigateTo('/');
          }}
        >
          Regresar al Inicio
        </Button>
      </div>
    </LayoutOne>
  );
};

export { Page404 };
