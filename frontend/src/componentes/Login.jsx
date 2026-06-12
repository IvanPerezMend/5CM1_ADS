import React from "react";
import {Navigate} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';


class Login extends React.Component {
  constructor()
  {
    super();
    this.state = {condition: false,tipousuario:''}
    ////
 }

      validar=(usuario,password) =>{
        //fetch('http://localhost:8080/Login?User='+usuario+'&password='+password+'')
        fetch('Login?user='+usuario+'&password='+password+'')
        .then(response => response.json())
        .then(usuario =>{
          if(usuario.status=="yes")
          {             
          if(usuario.tipo=="administrador")
          {
            ///agregado de la alerta de sweetalert2 
              Swal.fire({
              title: "Usuario Correcto!",
              text: "OK para continuar!",
              icon: "success"
                        });
          
          this.setState({ condition: true,tipousuario:'administrador'});          
          }          
          }          
          else          
          {
              ///agregado de la alerta de sweetalert2 
              Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Usuario o contraseña incorrectos!"
                       });

                       ////Agregado para borrar registros despes de fallar sesion 
              document.getElementById("user").value="";
              document.getElementById("password").value="";


          this.setState({ condition: false,tipousuario:'', usuario:'', password:'' });   ////para la limpieza de los campos de usuario y contraseña en caso de error                                     
          }
        })
     
    }
    render() {
      const styles = {
          padding : '5px'
      }

      const { condition,tipousuario } = this.state;

      if (condition && tipousuario=="administrador") 
      {
        return <Navigate to='/administrator' />;
      }

      return(
            <div>
              <div className="container-fluid p-5  text-white text-center">
              <h1>LOGIN</h1>
              </div>
              <div className="container mt-5 text-white">
              <div className="row">
              <div className="col-sm-12">
              <div className = "center-container" style={styles} id="equis">              
              <div className="form-group">
              <label className="form-label" for="user">Usuario</label>
              <input placeholder="Ingrese el usuario" type="text" id="user" class="form-control" />
              </div>
              <div className="form-group">
              <label className="form-label" for="password">Password</label>
              <input placeholder="Ingrese su contraseña" type="password" id="password" class="form-control" />
              </div>
            <button className="btn btn-primary" onClick={() => this.validar(document.getElementById("user").value,document.getElementById("password").value)}>
            Submit
            </button>
            </div>                          
            </div>                        
            </div>
            </div>
            </div>);           
  }
}
export default Login; 