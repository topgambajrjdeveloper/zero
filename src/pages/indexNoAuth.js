import React, { Component } from 'react'
import Toolbar from '../components/Toolbar/nav/Toolbar'
import Backdrop from '../components/Toolbar/Backdrop/Backdrop'
import SideDrawer from '../components/Toolbar/SideDrawer/SideDrawer'
import ProyectosNoAuth from '../components/proyectosIndex/proyectos/ProyectosNoAuth'

class IndexNoAuth extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <ProyectosNoAuth/>
        </main>
      </div>
    );
  }
}

export default IndexNoAuth