import { useState } from 'react';

import { LayoutThree } from '../../containers/layout/LayoutThree';
import { useForm } from '../../hooks';
import { Button, useTheme } from '@mui/material';
import { OrdersServices } from '../../api/Orders';
import { TextFieldTwo } from '../../components/inputs/text/TextFieldTwo';
import Swal from 'sweetalert2';
import { PayOne } from '../../components/pay/PayOne';
// import SouthIcon from '@mui/icons-material/South';

const Listings = () => {
  const { newAdForm } = useForm();
  const theme = useTheme();
  const [dir, SetDir] = useState('');

  const onClickPP = async () => {
    if (dir.length == 0) {
      Swal.fire('Error', 'Ingresa una dirección de pago válida', 'error');
    } else {
      const response_3 = await OrdersServices.createOrder({
        billing_address: 'dir',
        package_id: 4,
        payment_method: 'paypal',
        related_id: newAdForm.responseForm ? newAdForm.responseForm.data.id : 0,
        type: 'listing',
      });

      if (response_3.paypal_link) {
        window.location.assign(response_3.paypal_link.replace('\\/', '/'));
      }
    }
  };

  // useEffect(() => {
  //   console.log(newAdForm);

  //   // const response_3 = await OrdersServices.createOrder({
  //   //     billing_address: 'dir',
  //   //     package_id: 4,
  //   //     payment_method: 'paypal',
  //   //     related_id: response_1.data.id,
  //   //     type: 'listing',
  //   //   });

  //   //   console.log(response_3)
  // }, [newAdForm]);

  return (
    <LayoutThree>
      <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
        Pago
      </h1>
      <div className="mt-4 fw-bold text text-color-5 text-font-l-d subtitle mb-3">
        Nombre de la publicación{' '}
        <span className="text text-color-secondary">*</span>
      </div>
      <div className="mt-2 pb-3">
        <div className="d-flex justify-content-center mb-3">
          <TextFieldTwo
            color={{
              variant: 'secondary',
              text: '#464748',
              field: theme.palette.secondary.main,
              backgroundColor: '#fff',
            }}
            text={'Direccoón de pago'}
            onChange={(e) => {
              SetDir(e.target.value);
            }}
            value={dir}
          />
        </div>
        <div className="d-flex justify-content-center my-4">
          <Button
            onClick={onClickPP}
            variant="contained"
            color="secondary"
            size="large"
          >
            Pagar con Paypal
          </Button>
        </div>
        <div className="pay pay-one">
          <PayOne />
        </div>
      </div>
    </LayoutThree>
  );
};

export { Listings };
