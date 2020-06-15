import React from 'react';
import {Link} from 'react-router-dom'

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/login">Acceder</Link>
        </li>
        <li>
          <Link to="/proyectos">Proyectos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;