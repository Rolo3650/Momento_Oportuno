import React from 'react';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Checkbox, useTheme } from '@mui/material';
import { useForm } from '../../../../../hooks';
import { TextFieldOne } from '../../../../inputs/text/TextFieldOne';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { ThemeTwo } from '../../../../../themes/ThemeTwo';
import { Button } from '@mui/joy';
import BackupIcon from '@mui/icons-material/Backup';
import { RadioGroupOne } from './RadioGroupOne';
import Swal from 'sweetalert2';

interface Props {}

const AddVideo: React.FC<Props> = () => {
  const { newAdForm, setNewAdForm } = useForm();
  const theme = useTheme();

  return (
    <div className="fw-bold text text-color-5 text-font-l-d subtitle">
      <Checkbox
        color="secondary"
        onChange={(e) => {
          setNewAdForm({
            extraVideo: {
              ...newAdForm.extraVideo,
              set: e.target.checked,
            },
          });
        }}
        checked={newAdForm.extraVideo.set}
      />
      <Checkbox
        color="secondary"
        icon={<VideocamOutlinedIcon color="secondary" />}
        checkedIcon={<VideocamIcon color="primary" />}
        onChange={(e) => {
          setNewAdForm({
            extraVideo: {
              ...newAdForm.extraVideo,
              set: e.target.checked,
            },
          });
        }}
        checked={newAdForm.extraVideo.set}
      />
      Agregar Video <span className="text text-color-secondary">+$100</span>{' '}
      {newAdForm.extraVideo.set && (
        <>
          {/* <div className="align-items-center d-flex fw-bold text text-color-5 text-font-rubik subtitle">
  <div className="text-nowrap">Video</div>
  <div className="border-pointed w-100 mx-3"> </div>
  <div>
    <SouthIcon color="secondary" />
  </div>
</div> */}
          {newAdForm?.extraVideo.set && (
            <div className="ms-5">
              <RadioGroupOne
                value={newAdForm?.extraVideo.type}
                onChange={(e) => {
                  setNewAdForm({
                    extraVideo: {
                      ...newAdForm.extraVideo,
                      type: e.value,
                      value: null,
                    },
                  });
                }}
                defaultValue="file"
                options={[
                  {
                    label: 'Subir un archivo',
                    value: 'file',
                  },
                  {
                    label: 'Subir tu liga de YouTube o Vimeo',
                    value: 'link',
                  },
                ]}
              />
            </div>
          )}
          <div className="mt-4">
            <p className="fw-normal text text-font-l-d">
              Formatos aceptados: .mp4
            </p>
            <p className="fw-normal text text-font-l-d">
              Tamaño aceptado: Máximo 20 MB
            </p>
          </div>
          {newAdForm.extraVideo.type == 'link' && (
            <div className="mt-3 mb-3">
              <TextFieldOne
                color={{
                  variant: 'secondary',
                  text: '#464748',
                  field: theme.palette.secondary.main,
                  backgroundColor: '#fff',
                }}
                text="https://www.ejemplo.mp4"
                icon={{
                  mui: <DriveFileRenameOutlineIcon color="secondary" />,
                }}
                onChange={(e) => {
                  setNewAdForm({
                    extraVideo: {
                      ...newAdForm.extraVideo,
                      value: e.target.value,
                    },
                  });
                }}
                value={newAdForm.extraVideo.value?.toString() ?? ''}
              />
            </div>
          )}
          {newAdForm.extraVideo.type == 'file' && (
            <div className="mt-3 mb-3">
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
                  {newAdForm.extraVideo.value instanceof File
                    ? newAdForm.extraVideo.value.name
                    : 'Subir un Video'}
                  <input
                    type="file"
                    accept="video/*"
                    className="d-none"
                    onChange={(e) => {
                      if (e.target.files?.length) {
                        const maxFileSizeInBytes = 1024 * 1024 * 20; // 1 MB (cambia esto según tus necesidades)

                        if (e.target.files[0].size > maxFileSizeInBytes) {
                          Swal.fire(
                            'Demasiado Pesado',
                            'El archivo seleccionado pesa más de 20MB, por favor ingresa un archivo de menor peso',
                            'warning'
                          );
                        } else {
                          setNewAdForm({
                            extraVideo: {
                              ...newAdForm.extraVideo,
                              value: e.target.files[0],
                            },
                          });
                        }
                      }
                    }}
                  />
                </Button>
              </ThemeTwo>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AddVideo;
