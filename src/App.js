import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IndexNoAuth from "./pages/indexNoAuth";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";
// Hooks = redux reactjs
import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareaState";
import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/autenticacion/authState";
import tokenAuth from './config/token';
import RutaPrivada from './components/rutas/RutaPrivada'
import Profile from "./components/auth/Profile";

//Revisar si hay token
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token)
} else {
  
}

function App() {

  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={IndexNoAuth} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                <RutaPrivada exact path="/profile" component={Profile}/>
                <RutaPrivada exact path="/proyectos" component={Proyectos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
