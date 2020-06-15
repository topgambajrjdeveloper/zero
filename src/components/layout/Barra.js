import React, { useEffect, useContext } from "react";
import AuthContext from "../../context/autenticacion/authContext";
import { Link } from "react-router-dom";

const Barra = () => {
  // Extraer la información de autenticación
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado, usuario, cerrarSesion } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);

  return (
    <header className="app-header">
      {usuario ? (
        <p className="nombre-usuario">
          Hola{" "}
          <Link className="nombre-usuario" to="/profile">
            <span style={{ "text-transform": "capitalize" }}>
              {usuario.nick}
            </span>
          </Link>
        </p>
      ) : null}

      <div className="options"></div>

      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => cerrarSesion()}
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};
export default Barra;
