import React from 'react';
import { Directorio } from '../../api';

interface Props {
  directorio: Directorio;
}

const DirectorioCardOne: React.FC<Props> = ({ directorio }) => {
  //   const navigateTo = useNavigate();

  return (
<div className="directorio-card">
    <div className="directorio-card-img-container">
        <img className="directorio-card-img" src={directorio.media[0].original_url} />
    </div>
    <div className="directorio-card-text-container">
       <div className="directorio-card-title">{directorio.title}</div>
       <div className="directorio-card-text">Dirección: {directorio.address}</div> 
       <div className="directorio-card-text">Correo: {directorio.email}</div> 
       <div className="directorio-card-text">Tipo de Negocio: {directorio.type}</div> 
       <div className="directorio-card-text">Estado: {directorio.state.name}</div> 
       <div className="directorio-card-text">Horario: {directorio.hours}</div> 
       <div className="directorio-card-text">Teléfono: {directorio.phone}</div> 
       {/* <div>Sitio Web:<a href={directorio.thumbnail}>{directorio.thumbnail}</a></div>  */}
    </div>
</div>
  );
};

export { DirectorioCardOne };
