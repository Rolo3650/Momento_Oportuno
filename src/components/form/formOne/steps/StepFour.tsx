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

  const getTotal = (price: number) => {
    let total = price;

    if (newAdForm.print.set) {
      if (newAdForm.print.value == 'medio-nac') total += 200;
      if (newAdForm.print.value == 'medio-qro') total += 100;
      if (newAdForm.print.value == 'medio-cam') total += 100;
      if (newAdForm.print.value == 'medio-yuc') total += 100;
      if (newAdForm.print.value == 'medio-tab') total += 100;
      if (newAdForm.print.value == 'medio-chi') total += 100;
      if (newAdForm.print.value == 'medio-ver') total += 100;
      if (newAdForm.print.value == 'medio-baj') total += 100;

      if (newAdForm.print.size == 'impreso-4x4') total += 100;
      if (newAdForm.print.size == 'impreso-4x8') total += 110;
      if (newAdForm.print.size == 'impreso-4x13') total += 120;
      if (newAdForm.print.size == 'impreso-8x4') total += 130;
      if (newAdForm.print.size == 'impreso-8x8') total += 140;
      if (newAdForm.print.size == 'impreso-12x3') total += 150;
      if (newAdForm.print.size == 'impreso-12x8') total += 160;
      if (newAdForm.print.size == 'impreso-12x13') total += 170;
      if (newAdForm.print.size == 'impreso-8x13') total += 180;
      if (newAdForm.print.size == 'impreso-21x8') total += 190;
      if (newAdForm.print.size == 'impreso-21x13') total += 200;
      if (newAdForm.print.size == 'impreso-24x15') total += 210;
    }
    if (newAdForm.feature) total += 100;
    if (newAdForm.socialMedia) total += 100;
    if (newAdForm.extraVideo.set) total += 100;
    if (newAdForm.extraStates.set) {
      if (newAdForm.extraStates.value == '1') total += 100;
      if (newAdForm.extraStates.value == '2') total += 100;
      if (newAdForm.extraStates.value == '3') total += 150;
    }

    if (newAdForm.extraImgs.quantity == 5) total += 100;
    if (newAdForm.extraImgs.quantity == 10) total += 200;

    return total;
  };

  const getName = (name: string): string => {
    if (name == 'Basico Publica tu anuncio por 7 d\u00edas') {
      return 'Básico';
    } else if (name == 'Publica tu anuncio por 14 d\u00edas') {
      return 'Standard';
    } else if (name == 'Publica tu anuncio por 21 d\u00edas') {
      return 'Premium';
    } else {
      return name;
    }
  };

  const getDescription = (desc: string): string => {
    if (desc == 'Publica tu anuncio por 7 d\u00edas') {
      return 'Publica tu anuncio por 7 d\u00edas';
    } else if (desc == 'Tu anuncio en nuestros listados por 14 d\u00edas') {
      return 'Publica tu anuncio por 14 d\u00edas';
    } else if (desc == 'Tu anuncio en nuestros listados por 21 d\u00edas') {
      return 'Publica tu anuncio por 21 d\u00edas';
    } else {
      return desc;
    }
  };

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
        Selecciona el paquete que más te guste
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
                {getName(data.name)}
              </div>
              <div className="desc text text-rubik pb-2 text-color-4">
                {getDescription(data.description ?? '')}
              </div>
              <div className="desc text text-rubik fw-bold pb-2 text-color-secondary">
                $
                {data.price.toLocaleString('es-MX', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>

              <div className="mt-4 fw-bold text text-color-5 text-font-l-d subtitle">
                Complementos
              </div>
              <div className="fw-bold fs-6 text text-color-8 text-font-l-d subtitle mb-3">
                {/* <ul> */}
                {/* {newAdForm.extraStates.set && <li>{newAdForm.extraStates.value}</li>} */}
                {newAdForm.extraImgs.quantity > 3 && (
                  <li>
                    {newAdForm.extraImgs.quantity == 5
                      ? '5 Imágenes +$100'
                      : `10 Imágenes +$200`}
                  </li>
                )}
                {newAdForm.extraStates.set && (
                  <li>
                    {newAdForm.extraStates.value == '1'
                      ? 'Estados del Sureste +$100'
                      : `${
                          newAdForm.extraStates.value == '2'
                            ? 'Nacional +$100'
                            : 'Todos los estados +$200'
                        }`}
                  </li>
                )}
                {newAdForm.print.set && (
                  <>
                    <li>
                      {newAdForm.print.value == 'medio-nac' && (
                        <>El Momento Nacional +$200</>
                      )}
                      {newAdForm.print.value == 'medio-qro' && (
                        <>El Momento Quintana Roo +$100</>
                      )}
                      {newAdForm.print.value == 'medio-cam' && (
                        <>El Momento Campeche +$100</>
                      )}
                      {newAdForm.print.value == 'medio-yuc' && (
                        <>El Momento Yucatán +$100</>
                      )}
                      {newAdForm.print.value == 'medio-tab' && (
                        <>El Momento Tabasco +$100</>
                      )}
                      {newAdForm.print.value == 'medio-chi' && (
                        <>El Momento Chiapas +$100</>
                      )}
                      {newAdForm.print.value == 'medio-ver' && (
                        <>El Momento Veracruz +$100</>
                      )}
                      {newAdForm.print.value == 'medio-baj' && (
                        <>El Momento Baja California Sur +$100</>
                      )}
                    </li>
                    <li>
                      {newAdForm.print.size == 'impreso-4x4' && (
                        <>Anuncio Impreso Modular 4x4cm +$100</>
                      )}
                      {newAdForm.print.size == 'impreso-4x8' && (
                        <>Anuncio Impreso Modular 4x8.7cm +$110</>
                      )}
                      {newAdForm.print.size == 'impreso-4x13' && (
                        <>Anuncio Impreso Modular 4x13.4cm +$120</>
                      )}
                      {newAdForm.print.size == 'impreso-8x4' && (
                        <>Anuncio Impreso Modular 8.3x4cm +$130</>
                      )}
                      {newAdForm.print.size == 'impreso-8x8' && (
                        <>Anuncio Impreso Modular 8.3x8.7cm +$140</>
                      )}
                      {newAdForm.print.size == 'impreso-12x3' && (
                        <>Anuncio Impreso Modular 12.7x3.7cm +$150</>
                      )}
                      {newAdForm.print.size == 'impreso-12x8' && (
                        <>Anuncio Impreso Modular 12.7x8.7cm +$160</>
                      )}
                      {newAdForm.print.size == 'impreso-12x13' && (
                        <>Anuncio Impreso Modular 12.7x13.3cm +$170</>
                      )}
                      {newAdForm.print.size == 'impreso-8x13' && (
                        <>Anuncio Impreso Modular 8.3x13.4cm +$180</>
                      )}
                      {newAdForm.print.size == 'impreso-21x8' && (
                        <>Anuncio Impreso Modular 21.5x8.7cm +$190</>
                      )}
                      {newAdForm.print.size == 'impreso-21x13' && (
                        <>Anuncio Impreso Modular 21.5x13.4cm+$200</>
                      )}
                      {newAdForm.print.size == 'impreso-24x15' && (
                        <>Anuncio Impreso Modular 21.5x13.4cm +$210</>
                      )}
                    </li>
                  </>
                )}
                {newAdForm.feature && <li>Destacado +$100</li>}
                {newAdForm.socialMedia && <li>Redes Social +$100</li>}
                {newAdForm.extraVideo.set && <li>Agregar Video +$100</li>}
                {/* </ul> */}
              </div>

              <div className="price text text-color-primary fw-bold fs-5">
                Total: ${' '}
                {getTotal(data.price)?.toLocaleString('es-MX', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{' '}
                MXN
              </div>
            </div>
          ))}
      </div>
      <div className="mt-5 fw-bold text text-color-5 text-font-l-d subtitle mb-3">
        Selecciona la fecha de salida
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
