import React, { ChangeEvent, useEffect, useState } from 'react';
import SouthIcon from '@mui/icons-material/South';
import { ThemeTwo } from '../../../../themes/ThemeTwo';
import { Button } from '@mui/joy';
import { IconButton, useTheme } from '@mui/material';
import BackupIcon from '@mui/icons-material/Backup';
import { useForm } from '../../../../hooks';
import ClearIcon from '@mui/icons-material/Clear';
import Swal from 'sweetalert2';
import ImageIcon from '@mui/icons-material/Image';
import { RadioGroupOne } from './Addons/RadioGroupOne';

type Imgs = string | ArrayBuffer | null;

interface Props {}

const StepThree: React.FC<Props> = () => {
  const [selectedImages, setSelectedImages] = useState<Imgs[]>([]);
  const { newAdForm, setNewAdForm } = useForm();
  const theme = useTheme();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      let files: File[] = [];
      if (newAdForm?.imgs?.length) {
        files = [...newAdForm.imgs];
      }
      for (let i = 0; i < e.target.files.length; i++) {
        if (files?.length < newAdForm.extraImgs.quantity) {
          files.push(e.target.files[i]);
        } else {
          Swal.fire(
            '¿Necesitas más imágenes?',
            'Haz alcanzado el límite de imagens, para subir más, selecciona la cantidad de imágenes que necesitas en el apartado de arriba.',
            'warning'
          );
        }
      }
      setNewAdForm({ imgs: [...files] });
    }
    e.target.files = new DataTransfer().files;
  };

  const onDelete = (index: number) => {
    setNewAdForm({
      imgs: newAdForm.imgs?.filter((_img, index_2) => index_2 != index),
    });
  };

  const promise = (img: File) => {
    return new Promise<string | ArrayBuffer | null>((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          resolve(e.target.result);
        } // Asignamos la URL de la imagen al estado
      };

      reader.readAsDataURL(img);
    });
  };

  const redFiles = async () => {
    if (newAdForm?.imgs?.length) {
      const imgs: Imgs[] = [];
      for (let i = 0; i < newAdForm.imgs.length; i++) {
        const url = await promise(newAdForm.imgs[i]);
        imgs.push(url);
      }
      setSelectedImages(imgs);
    } else {
      setSelectedImages([]);
    }
  };

  useEffect(() => {
    redFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newAdForm.imgs]);

  useEffect(() => {
    if (newAdForm?.imgs?.length) {
      if (newAdForm?.imgs?.length > newAdForm.extraImgs.quantity) {
        const imgs = newAdForm?.imgs?.filter(
          (_img, index) => index < newAdForm.extraImgs.quantity
        );
        setNewAdForm({ imgs: imgs });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newAdForm.extraImgs.quantity, newAdForm?.imgs]);

  return (
    <>
      <div className="mt-3 mt-3 align-items-center d-flex fw-bold text text-color-5 text-font-rubik title">
        <div className="text-nowrap">Imágenes</div>
        <div className="border-pointed w-100 mx-3"> </div>
        <div>
          <SouthIcon color="secondary" />
        </div>
      </div>
      <div className="fw-bold text text-color-5 text-font-l-d subtitle">
        <ImageIcon color="primary" className="me-2" />
        Cantidad de Imágenes
      </div>
      <div>
        <div className="ms-5">
          <RadioGroupOne
            value={newAdForm.extraImgs.value}
            onChange={(e) => {
              setNewAdForm({
                extraImgs: {
                  ...newAdForm.extraImgs,
                  value: e.value,
                  quantity: parseInt(e.value.toString() ?? '3'),
                },
              });
            }}
            defaultValue="5"
            options={[
              {
                label: '3 Imágenes',
                value: '3',
              },
              {
                label: '5 Imágenes + $100',
                value: '5',
              },
              {
                label: '10 Imágenes + $200',
                value: '10',
              },
            ]}
          />
        </div>
      </div>
      <div className="imgs">
        {selectedImages?.length > 0 &&
          selectedImages.map((image, index) => (
            <div
              key={index}
              className="img-container d-flex align-items-center justify-content-center position-relative"
            >
              <img src={image?.toString() ?? ''} alt="img" />
              <IconButton
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  background: theme.palette.secondary.main,
                  color: 'white',
                  ':hover': {
                    background: theme.palette.secondary.main,
                    color: 'white',
                  },
                }}
                onClick={() => onDelete(index)}
              >
                <ClearIcon />
              </IconButton>
            </div>
          ))}
      </div>
      <div className="mt-3">
        <ThemeTwo>
          <Button
            sx={{
              width: '100%',
            }}
            className="py-5 fs-3"
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="outlined"
            color="primary"
            startDecorator={
              <BackupIcon
                sx={{
                  fontSize: '40px',
                }}
              />
            }
          >
            Subir una Imagen
            <input
              type="file"
              className="d-none"
              multiple
              accept="image/*"
              onChange={onChange}
            />
          </Button>
        </ThemeTwo>
      </div>
    </>
  );
};

export default StepThree;
