// import React from 'react';
import { useEffect } from 'react';
import { usePackages } from '../../../../hooks/querys/usePackages';
import { useForm } from '../../../../hooks';
import { useTheme } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SouthIcon from '@mui/icons-material/South';
import moment from 'moment';

const StepFour = () => {
  const { data } = usePackages('listing');
  const theme = useTheme();
  const { setNewAdForm, newAdForm } = useForm();

  useEffect(() => {
    if (data?.data.length) {
      if (data.data[0] != newAdForm.package) {
        setNewAdForm({
          package: data.data[0],
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.data]);

  return (
    <>
      <div className="mt-3 align-items-center d-flex fw-bold text text-color-5 text-font-rubik title">
        <div className="text-nowrap">Paquetes</div>
        <div className="border-pointed w-100 mx-3"></div>
        <div>
          <SouthIcon color="secondary" />
        </div>
      </div>
      <div className="mt-2 fw-bold text text-color-5 text-font-l-d subtitle mb-3">
        Selecciona la cantidad de días
        <span className="text text-color-secondary">*</span>
      </div>
      <div className="packages mt-4">
        {data?.data.length != 0 &&
          data?.data.map((data) => (
            <div
              className={`package p-3 ${
                newAdForm?.package?.id == data?.id ? 'active' : ''
              }`}
              onClick={() => {
                setNewAdForm({
                  package: data,
                });
              }}
            >
              <div className="name text text-font-l-d fw-bold fs-5 pb-3 text-color-5">
                {data.name}
              </div>
              <div className="desc text text-rubik fw-bold pb-2">
                {data.description}
              </div>

              <div className="price text text-color-primary fw-bold fs-4">
                ${' '}
                {data.price?.toLocaleString('es-MX', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>
          ))}
      </div>
      <div className="mt-5 fw-bold text text-color-5 text-font-l-d subtitle mb-3">
        Selecciona la fecha de publicación
        <span className="text text-color-secondary">*</span>
      </div>
      <div className="">
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              minDate={moment(new Date())}
              defaultValue={moment(new Date())}
              label="Selecciona una fecha"
              sx={{
                borderColor: theme.palette.primary.main,
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </>
  );
};

export { StepFour };
