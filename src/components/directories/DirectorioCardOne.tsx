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
    <div>
       <div>{directorio.title}</div>
       <div>Dirección:{directorio.address}</div> 
       <div>Correo:{directorio.email}</div> 
       <div>Tipo de Negocio:{directorio.type}</div> 
       <div>Estado:{directorio.state.name}</div> 
       <div>Horario:{directorio.hours}</div> 
       <div>Teléfono:{directorio.phone}</div> 
       {/* <div>Sitio Web:<a href={directorio.thumbnail}>{directorio.thumbnail}</a></div>  */}
    </div>
</div>
  );
};

export { DirectorioCardOne };
