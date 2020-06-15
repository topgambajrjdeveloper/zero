import React, { useState, useContext, useEffect } from "react";
import {Link} from 'react-router-dom'
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from '../../context/autenticacion/authContext'

const Login = (props) => {

  //Extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { iniciarSesion, mensaje, autenticado } = authContext;

  //En caso de que password o email no exista
  useEffect(()=> {
    if(autenticado) {
      props.history.push('/proyectos')
    }
    if(mensaje) {
      mostrarAlerta(
        mensaje.msg, mensaje.categoria
      );
    }

  }, [mensaje, autenticado, mostrarAlerta, props.history])
  
  //State para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });
  //Extraer usuario
  const { email, password } = usuario;

  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  //Guardo el usuario que quiere iniciar sesion
  const onSubmitLogin = e => {
    e.preventDefault();

    //Validad que no haya campos vacios
    if(email.trim() === "" || password.trim() === ""){
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");      
    }
    //Pasarlo al action
    iniciarSesion({email, password})
  }

  
  return (
    <div className="form-usuario">
    {alerta ? (
      <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
    ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmitLogin} noValidate autoComplete="off">
          <div className="campo-form">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Introduce tu correo electrónico"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Introduce tu password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
          
             <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            /> 
          </div>
        </form>
        <Link to={'/nueva-cuenta'} className="enlace-cuenta"> Crear una cuenta </Link>
        <Link to={'/'} className="enlace-cuenta"> Salir </Link>
      </div>
    </div>
  );
};

export default Login;
