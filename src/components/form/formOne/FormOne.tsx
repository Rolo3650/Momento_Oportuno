import React, { useState } from 'react';
import { StepOne } from './steps/StepOne';
import { StepTwo } from './steps/StepTwo';
import StepThree from './steps/StepThree';
import { Addons } from './steps/Addons/Addons';
import { Button } from '@mui/material';
import { useForm } from '../../../hooks';
import Swal from 'sweetalert2';
import { CreateAnuncioParams, ListingAttribute } from '../../../api';
import { useAppContext } from '../../../context';
import { AdsServices } from '../../../api';
import { useNavigate } from 'react-router-dom';
// import {  } from '../../../hooks/querys/usePackages';
import { StepFour } from './steps/StepFour';
// import { OrdersServices } from '../../../api/Orders';

interface Props {}

const FormOne: React.FC<Props> = () => {
  const { newAdForm } = useForm();
  const { state } = useAppContext();
  const { setNewAdForm } = useForm();
  const navigateTo = useNavigate();
  const [loading, setLoading] = useState(false);

  const createNewAd = async () => {
    setLoading(true);
    let error: boolean = false;
    let message: string = '';

    if (!newAdForm.name || newAdForm.name == '') {
      message = 'Ingresa un nombre de publicación válido';
      error = true;
    }
    if (!newAdForm.category || !newAdForm.category.id) {
      message = 'Selecciona una categoría';
      error = true;
    }
    if (
      newAdForm.category?.children.length &&
      newAdForm.category?.children.length > 0 &&
      (!newAdForm.subCategory || !newAdForm.subCategory.id)
    ) {
      message = 'Selecciona una sub-categoría';
      error = true;
    }
    if (!newAdForm.category || !newAdForm.category.id) {
      message = 'Selecciona una categoría';
      error = true;
    }
    if (!newAdForm.state || !newAdForm.state.id) {
      message = 'Selecciona una estado';
      error = true;
    }
    if (!newAdForm.desc || newAdForm.desc == '') {
      message = 'Ingresa una descripción de publicación válido';
      error = true;
    }
    if (!newAdForm.imgs?.length || newAdForm.imgs?.length == 0) {
      message = 'Ingresa mínimo una imagen de publicación';
      error = true;
    }
    if (newAdForm.attributes.length) {
      newAdForm.attributes.forEach((attribute) => {
        if (!attribute.value) {
          message =
            'Ingresa valores válidos para el atributo ' + attribute.set.name;
          error = true;
        }
      });
    }
    if (!newAdForm.package) {
      message = 'Selecciona un paquete';
      error = true;
    }
    if (error) {
      Swal.fire('Error', message, 'error');
    } else {
      const obj: CreateAnuncioParams = {
        title: newAdForm.name,
        category_id: newAdForm.category?.id ?? 0,
        description: newAdForm.desc,
        includes_printing: newAdForm.print.set,
        includes_socials: newAdForm.socialMedia,
        includes_video: newAdForm.extraVideo.set,
        is_featured: newAdForm.feature,
        state_id: newAdForm.state ? newAdForm.state.id : 0,
        subcategory_id: newAdForm.subCategory?.id ?? 0,
        user_id: state.userState?.user.id ? state.userState?.user.id : 0,
        printing_state_id: newAdForm.state ? newAdForm.state.id : 0,
        listingAttributes: [],
      };

      const atributes: ListingAttribute[] = [];

      newAdForm.attributes.forEach((attribute) => {
        if (attribute.set.type == 'text') {
          atributes.push({
            attribute_id: attribute.set.id,
            value: attribute.value?.toString() ?? '',
          });
        } else if (attribute.set.type == 'number') {
          atributes.push({
            attribute_id: attribute.set.id,
            value: attribute.value?.toString() ?? '',
          });
        } else if (attribute.set.type == 'select') {
          const value: string[] = [];
          attribute.set.attributeValues.forEach((atr_value) => {
            if (attribute.value?.toString()?.includes(atr_value.name)) {
              value.push(atr_value.id?.toString());
            }
          });
          atributes.push({
            attribute_id: attribute.set.id,
            value: '[' + value.join(',') + ']',
          });
        }
      });

      obj.listingAttributes = atributes;

      let error_2: boolean = false;

      const response_1 = await AdsServices.createAd(obj);
      // console.log(response_1);

      if (newAdForm.imgs?.length && response_1) {
        for (let i = 0; i < newAdForm.imgs.length; i++) {
          console.log({
            file: newAdForm.imgs[0],
            // id: response_1.data.id,
            id: 38,
          });
          const response_2 = await AdsServices.uploadImage({
            file: newAdForm.imgs[0],
            id: response_1.data.id,
            // id: 47,
          });

          if (!response_2.data.id) {
            error_2 = true;
          }
        }
      } else {
        error_2 = true;
      }

      if (error_2) {
        Swal.fire(
          'Error',
          'Error al conectar con el servidor, por favor intentalo más tarde',
          'error'
        );
      } else {
        Swal.fire('¡Listo!', 'Anuncio creado correctamente', 'success').then(
          () => {
            setNewAdForm({ responseForm: response_1 });
            navigateTo('/panel/listings/pago');
          }
        );
      }
    }
    setLoading(false);
  };

  return (
    <div className="form-custom form-custom-one background background-color-7 rounded-4">
      <StepOne />
      <StepTwo />
      <StepThree />
      <Addons />
      <StepFour />
      <div className="my-3 d-flex justify-content-end">
        <Button
          disabled={loading}
          onClick={createNewAd}
          color="secondary"
          variant="contained"
        >
          Crear Anuncio
        </Button>
      </div>
    </div>
  );
};

export { FormOne };
