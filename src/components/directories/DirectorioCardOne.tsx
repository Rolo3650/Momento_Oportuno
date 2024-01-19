import React from 'react';
import { Directorio } from '../../api';
import { GeneralButton } from '../inputs/buttons/GeneralButton';
import SendIcon from '@mui/icons-material/Send';
import PinDropIcon from '@mui/icons-material/PinDrop';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';

interface Props {
  directorio: Directorio;
}

const DirectorioCardOne: React.FC<Props> = ({ directorio }) => {
  //   const navigateTo = useNavigate();

  return (
    // <div className="directorio-card">
    //   <div className="directorio-card-img-container">
    //     <img
    //       className="directorio-card-img"
    //       src={directorio.media[0].original_url}
    //     />
    //   </div>
    //   <div className="directorio-card-text-container">
    //     <div className="directorio-card-title">{directorio.title}</div>
    //     <div className="directorio-card-text">
    //       Dirección: {directorio.address}
    //     </div>
    //     <div className="directorio-card-text">Correo: {directorio.email}</div>
    //     <div className="directorio-card-text">
    //       Tipo de Negocio: {directorio.type}
    //     </div>
    //     <div className="directorio-card-text">
    //       Estado: {directorio.state.name}
    //     </div>
    //     <div className="directorio-card-text">Horario: {directorio.hours}</div>
    //     <div className="directorio-card-text">Teléfono: {directorio.phone}</div>
    //     <div>
    //       Sitio Web:<a href={directorio.thumbnail}>{directorio.thumbnail}</a>
    //     </div>
    //   </div>
    // </div>
    <ul className="cards">
      <li>
        <a className="card">
          <img src={directorio.thumbnail} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img className="card__thumb" src={directorio.thumbnail} alt="" />
              <div className="card__header-text">
                <h3 className="directorio-card-title">{directorio.title}</h3>
                <div className="directorio-card-text">{directorio.type}</div>
                <div className="directorio-card-text">
                  {directorio.state.name}
                </div>
              </div>
            </div>
            <div className=" d-flex justify-content-center align-items-center">
              <div className="directorio-desc-body">
                <div className="directorio-desc-element">
                  <div className="directorio-desc-element-icon"><PinDropIcon color="secondary" /></div>
                  <div className="directorio-desc-element-text dic-address">
                    {directorio.address}
                  </div>
                </div>
                <div className="directorio-desc-element">
                  <div className="directorio-desc-element-icon"><AccessTimeIcon color="secondary"/></div>
                  <div className="directorio-desc-element-text">
                    {directorio.hours}
                  </div>
                </div>
                <div className="directorio-desc-element">
                  <div className="directorio-desc-element-icon"><PhoneIcon color="secondary" /></div>
                  <div className="directorio-desc-element-text">
                    {directorio.phone}
                  </div>
                </div>
                <div>
                  <GeneralButton
                    title="Enviar correo"
                    colorPrimary="primary"
                    endIcon={<SendIcon />}
                    onClick={() => window.location.href = `mailto:${directorio.email}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  );
};

export { DirectorioCardOne };
