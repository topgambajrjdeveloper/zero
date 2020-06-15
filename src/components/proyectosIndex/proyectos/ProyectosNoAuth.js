import React, { useContext } from "react";
import "./ProyectosNoAuth.css";
import proyectoContext from "../../../context/proyectos/proyectoContext";
import {Link} from'react-router-dom';

const ProyectosNoAuth = () => {
  // Obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);      
  const { proyectos } = proyectosContext;
  console.log(proyectos);
  
  

  return (
    <div className="center">
   
      <div className="property-card">
          <Link to="/login">
            <div className="property-image">
              <div className="property-image-title">
                <h5>nombre</h5>
              </div>
            </div>
          </Link>
          <div className="property-description">
            <h5> categoria </h5>
          </div>
        </div>      
    </div>
  );
};

export default ProyectosNoAuth;
