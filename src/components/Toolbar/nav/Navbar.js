import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src="" alt="zero" title="xero" />
          </Link>{" "}
        </li>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/login">Acceso</Link>
        </li>
        <li>
          <Link to="/nueva-cuenta">Registro</Link>
        </li>
        <li>
          <Link to="/proyectos">Proyectos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
