import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/autenticacion/authContext";
import Barra from "../layout/Barra";
import CardProyectos from "../profile/ProyectosProfile/CardProyectos";
import InputForm from "../profile/InputProfile/InputForm";
import PhotoProfile from '../profile/PhotoProfile/PhotoProfile'

const Profile = () => {
  // Extraer la información de autenticación
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="contenedor-app">
    <div className="seccion-principal">
    <Barra />
        <main>
          <div className="contenedor-tareas">
          <PhotoProfile/>
          <InputForm/>
          <CardProyectos/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
