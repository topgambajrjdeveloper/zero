import React, { useContext, useEffect } from "react";
import AuthContext from "../../../context/autenticacion/authContext";
import proyectoContext from '../../../context/proyectos/proyectoContext';
import noavatar from "../../../assets/img/anonymous.png";

const PhotoProfile = () => {
  // Extraer la información de autenticación
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado, usuario } = authContext;

  // Extrar proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const {proyectos, obtenerProyectos } = proyectosContext;

  useEffect(() => {
    usuarioAutenticado();
    obtenerProyectos();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      {usuario ? (
        <div class="profile">
          <div class="profile-image">
            <img
              className="profile-barra"
              src={noavatar || usuario.avatar}
              title={usuario.nick}
              alt={usuario.nick}
            />
          </div>

          <div class="profile-user-settings">
            <h1 class="profile-user-name" style={{ "text-transform": "capitalize" }}>{usuario.nombre}</h1>

            <button class="btn profile-edit-btn">Editar</button>
          </div>

          <div class="profile-stats">
            <ul>
              <li>
                <span class="profile-stat-count">164</span> Proyectos
              </li>
              <li>
                <span class="profile-stat-count">188</span> followers
              </li>
              <li>
                <span class="profile-stat-count">206</span> following
              </li>
            </ul>
          </div>

          <div class="profile-bio">
            <p>
            {proyectos.nombre}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PhotoProfile;
