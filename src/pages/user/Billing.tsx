import { Box, Card, CardContent } from '@mui/material';
import { LayoutOne } from '../../containers/layout/LayoutOne';
import { FormFive } from '../../components/form/formFive/FormFive';
import { useEffect } from 'react';
import { useAppContext } from '../../context';

const Billing = () => {
  const { state } = useAppContext();

  useEffect(() => {
    if ((!state.userState?.token || !state.billingSettings.id) && state.init) {
      window.location.assign('/');
    }
  }, [state]);

  return (
    <LayoutOne>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Box maxWidth={'1200px'} padding={'60px'}>
          <div className="d-flex justify-content-between mb-4">
            <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
              Facturación
            </h1>
          </div>
          <Card>
            <CardContent>
              <FormFive />
            </CardContent>
          </Card>
        </Box>
      </Box>
    </LayoutOne>
  );
};

export { Billing };
