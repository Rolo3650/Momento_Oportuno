import { LayoutOne } from '../../containers/layout/LayoutOne';
import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';
import { useEffect, useState } from 'react';
import { DirectoriesServices, Directorio } from '../../api';
import { DirectorioCardOne } from '../../components/directories/DirectorioCardOne';
import { useParams } from 'react-router';
// import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
// import ArrowForward from '@mui/icons-material/ArrowForward';
// import { useNavigate } from 'react-router-dom';

interface Props {}

const LocalDirectories: React.FC<Props> = () => {
  const [directories, setDirectories] = useState<Directorio[]>([]);
  const { id } = useParams();
  // const navigateTo = useNavigate();

  useEffect(() => {
    let state = '0';
    if (id == 'directorios-campeche') {
      state = '1';
    } else if (id == 'directorios-chiapas') {
      state = '4';
    } else if (id == 'directorios-quintana-roo') {
      state = '3';
    } else if (id == 'directorios-yucatán') {
      state = '2';
    }
    DirectoriesServices.getAllDirectorios(state ?? undefined).then((res) => {
      setDirectories(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
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
