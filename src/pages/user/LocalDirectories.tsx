import { LayoutOne } from '../../containers/layout/LayoutOne';
import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';
import { useEffect, useState } from 'react';
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
  useEffect(() => {
    console.log('DIRECTORIES', directories);
    console.log('DIR', directories[0]);
  }, []);
  return (
    <LayoutOne>
      <div
        style={{ padding: 30, marginBottom: 250 }}
        className="d-flex justify-content-center align-items-center w-100"
      >
        <div className={directories.length > 0 ? "w-100" : "w-75"}>
          <div className="d-flex justify-content-between">
            <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
              Directorios Locales
            </h1>
          </div>
          <div className={directories.length > 0 ? "cards" : "d-flex"}>
            {directories.length && directories.length > 0 ? (
              directories.map((dir) => {
                return <DirectorioCardOne directorio={dir} />;
              })
            ) : (
              <EmptyBoxOne
                text="No hay directorios"
                imgSrc="/svg/icons/box_one.svg"
                // button={
                //   <GeneralButton
                //     onClick={() => navigateTo('/panel/directories/create')}
                //     title="Agregar Directorio"
                //     colorPrimary="secondary"
                //     hoverColor="secondary"
                //     endIcon={<ArrowForward />}
                //   />
                // }
              />
            )}
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

export { LocalDirectories };
