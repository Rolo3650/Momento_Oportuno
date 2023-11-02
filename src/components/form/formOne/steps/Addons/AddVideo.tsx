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

interface Props {}

const AddVideo: React.FC<Props> = () => {
  const { newAdForm, setNewAdForm } = useForm();
  const theme = useTheme();

  return (
    <div className="fw-bold text text-color-5 text-font-l-d subtitle">
      <Checkbox
        color="secondary"
        icon={<VideocamOutlinedIcon color="secondary" />}
        checkedIcon={<VideocamIcon color="primary" />}
        onChange={(e) => {
          setNewAdForm({ extraVideo: e.target.checked });
        }}
        value={newAdForm.extraVideo}
      />
      Agregar Video
      {newAdForm.extraVideo && (
        <>
          {/* <div className="align-items-center d-flex fw-bold text text-color-5 text-font-rubik subtitle">
  <div className="text-nowrap">Video</div>
  <div className="border-pointed w-100 mx-3"> </div>
  <div>
    <SouthIcon color="secondary" />
  </div>
</div> */}
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
              onChange={() => {}}
              value={'name'}
            />
          </div>
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
                Subir un Video
                <input type="file" className="d-none" />
              </Button>
            </ThemeTwo>
          </div>
        </>
      )}
    </div>
  );
};

export default AddVideo;
