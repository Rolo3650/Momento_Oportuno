import { LayoutOne } from '../../containers/layout/LayoutOne';
import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';
import { useState } from 'react';
import { DirectoriesServices, Directorio } from '../../api';
import { DirectorioCardOne } from '../../components/directories/DirectorioCardOne';
// import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
// import ArrowForward from '@mui/icons-material/ArrowForward';
// import { useNavigate } from 'react-router-dom';

interface Props {}

const LocalDirectories: React.FC<Props> = () => {
  const [directories, setDirectories] = useState<Directorio[]>([]);
  // const navigateTo = useNavigate();
  DirectoriesServices.getAllDirectorios().then((res) => {
    setDirectories(res.data);
  });
  return (
    <LayoutOne>
      <div
        style={{ padding: 30, marginBottom: 100 }}
        className="d-flex justify-content-center align-items-center w-100"
      >
        <div className="justify-content-center w-75">
          <div>
            <div className="d-flex">
              <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
                Directorios Locales
              </h1>
            </div>
          </div>

          <div>
            {directories.length && directories.length > 0 ? (
              <div className="cards">
                {directories.map((dir) => {
                  return <DirectorioCardOne directorio={dir} />;
                })}
              </div>
            ) : (
              <div className={'justify-content-center d-flex w-100'}>
                <div className="w-75">
                  <EmptyBoxOne
                    text="No hay directorios"
                    imgSrc="/svg/icons/box_one.svg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

export { LocalDirectories };
