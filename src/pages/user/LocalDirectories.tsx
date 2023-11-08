import { LayoutOne } from '../../containers/layout/LayoutOne';
import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';
// import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
// import ArrowForward from '@mui/icons-material/ArrowForward';
// import { useNavigate } from 'react-router-dom';

interface Props {}

const LocalDirectories: React.FC<Props> = () => {
  // const navigateTo = useNavigate();
  return (
    <LayoutOne>
      <div
        style={{ padding: 30, marginBottom: 250 }}
        className="d-flex justify-content-center align-items-center w-100"
      >
        <div className="w-75">
          <div className="d-flex justify-content-between">
            <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
              Directorios Locales
            </h1>
          </div>

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
        </div>
      </div>
    </LayoutOne>
  );
};

export { LocalDirectories };
