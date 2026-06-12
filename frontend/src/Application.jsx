import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom';
import BootstrapReact from './componentes/BootstrapReact.jsx'
import FondoA from './FondoA.jpg';

class Application extends React.Component {
render() {

        ///////imagen de fondo 
        const fondo = {
            backgroundImage: `url(${FondoA})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            minWidth: '100vw'
        };



      return(

        <div style={fondo}>
        <BrowserRouter>
            <BootstrapReact />
        </BrowserRouter>
        </div>);    
  }
}
 
export default Application;

//CODIGO ACTUALIZADO PAREA LA NUEVA VERSION DE REACT
const rootElement = document.getElementById("contenedor");
const root = createRoot(rootElement);
root.render(<Application />);

