import React, { useContext, useEffect } from "react";
import AuthContext from "../../../context/autenticacion/authContext";

const CardProyectos = () => {
    // Extraer la información de autenticación
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);
  return (
    <h1>
    
      usuario.nombre
    </h1>
  );
};

export default CardProyectos;
