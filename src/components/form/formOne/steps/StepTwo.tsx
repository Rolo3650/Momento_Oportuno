import React from 'react';
import Textarea from '@mui/joy/Textarea';
import { Box } from '@mui/joy';
import SouthIcon from '@mui/icons-material/South';
import { ThemeTwo } from '../../../../themes/ThemeTwo';
import { useForm } from '../../../../hooks';

interface Props {}

const StepTwo: React.FC<Props> = () => {
  const { newAdForm, setNewAdForm } = useForm();

  return (
    <>
      <div className="mt-3 align-items-center d-flex fw-bold text text-color-5 text-font-rubik title">
        <div className="text-nowrap">Descripción</div>
        <div className="border-pointed w-100 mx-3"> </div>
        <div>
          <SouthIcon color="secondary" />
        </div>
      </div>
      <div className="mt-3">
        <div className='text text-font-l-d d-flex justify-content-end m-0 p-0'>{newAdForm.desc?.length} de 700</div>
        <ThemeTwo>
          <Box
            sx={{
              py: 2,
              display: 'grid',
              gap: 2,
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Textarea
              color="primary"
              placeholder="Descripción"
              variant="outlined"
              minRows={5}
              maxRows={10}
              onChange={(e) => {
                setNewAdForm({
                  desc:
                    e.target.value?.length < 701
                      ? e.target.value
                      : newAdForm.desc,
                });
              }}
              value={newAdForm.desc}
            />
          </Box>
        </ThemeTwo>
      </div>
    </>
  );
};

export { StepTwo };
