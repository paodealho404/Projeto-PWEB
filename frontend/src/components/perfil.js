import React, { Component } from 'react';
import './perfil.css';
import TelaPerfil from "./tela_perfil";

export default class Perfil extends Component {
  render(){
    return(
      <div>
        <div className="bg-dark">
          <TelaPerfil />
        </div>
      </div>
    );
  }
}
