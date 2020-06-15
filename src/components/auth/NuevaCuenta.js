import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";

const NuevaCuenta = (props) => {
  //Extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { registrarUsuario, mensaje, autenticado } = authContext;

  //En caso de que hay un registro duplicado
  useEffect(() => {
    if (autenticado) {
      props.history.push("/proyectos");
    }
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado, mostrarAlerta, props.history]);

  //State para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    nick: "",
    nombre: "",
    email: "",
    password: "",
    repetir: ""
  });
  //Extraer usuario
  const { nick, nombre, email, password, repetir } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  
  //Guardo el usuario que quiere iniciar sesion
  const onSubmitLogin = (e) => {
    e.preventDefault();

    //Validad que no haya campos vacios
    if (
      nick.trim() === "" ||
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      repetir.trim() === "" 
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    //Password min 6 caracteres
    if (password.length < 6) {
      mostrarAlerta(
        "La contraseña debe ser minimo de 6 caracteres",
        "alerta-error"
      );
      return;
    }

    //Comprobar password iguales
    if (password !== repetir) {
      mostrarAlerta("Las contraseñas no son iguales", "alerta-error");
      return;
    }

    //Pasarlo al action
    registrarUsuario({
      nick,
      nombre,
      email,
      password
    });
  };
  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Crear cuenta</h1>
        <form onSubmit={onSubmitLogin} noValidate autoComplete="off">
          <div className="campo-form">
            <input
              type="text"
              id="nick"
              name="nick"
              placeholder="Introduce tu nick"
              value={nick}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Introduce tu nombre"
              value={nombre}
              onChange={onChange}
            />
          </div>
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
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="password"
              id="repetir"
              name="repetir"
              placeholder="Repite tu contraseña"
              value={repetir}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Resgistro"
            />
          </div>
        </form>
        <Link to={"/login"} className="enlace-cuenta">
          {" "}
          Accede a tu cuenta{" "}
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
