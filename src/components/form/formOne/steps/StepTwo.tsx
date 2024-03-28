import React from 'react';
import { useEffect } from 'react';
import Textarea from '@mui/joy/Textarea';
import { Box } from '@mui/joy';
import SouthIcon from '@mui/icons-material/South';
import { ThemeTwo } from '../../../../themes/ThemeTwo';
import { useForm } from '../../../../hooks';

interface Props {}

const StepTwo: React.FC<Props> = () => {
  const { newAdForm, setNewAdForm } = useForm();

  const maxChar = () => {
    if (newAdForm.package?.id == 5) {
      return 400;
    } else if (newAdForm.package?.id == 6) {
      return 600;
    } else if (newAdForm.package?.id == 8) {
      return 700;
    } else if (newAdForm.package?.id == 4) {
      return 200;
    } else if (
      newAdForm.package?.id &&
      newAdForm.package.max_number_of_characters
    ) {
      return newAdForm.package.max_number_of_characters;
    } else {
      return 200;
    }
  };

  useEffect(() => {
    if (newAdForm.desc.length > maxChar()) {
      setNewAdForm({
        desc: newAdForm.desc.slice(0, maxChar()),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newAdForm.package]);

  return (
    <>
      <div className="mt-3 align-items-center d-flex fw-bold text text-color-5 text-font-rubik title">
        <div className="text-nowrap">Da más detalles de tu publicación</div>
        <div className="border-pointed w-100 mx-3"> </div>
        <div>
          <SouthIcon color="secondary" />
        </div>
      </div>
      <div className="mt-3">
        <div className="text text-font-l-d d-flex justify-content-end m-0 p-0">
          {newAdForm.desc?.length} de {maxChar()}
        </div>
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
                    e.target.value?.length <= maxChar()
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
