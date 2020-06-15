import React from "react";
import {Link} from 'react-router-dom'

import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToogleButton';

const toolbar = props => {
  

  return(

  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><Link to="/">ZERO App</Link></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
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
        </div>
    </nav>
  </header>
  )
  };

export default toolbar;