import React, { Component } from 'react';
import './App.css';

import Conversror from "./components/Conversor";

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>Conversor de Moedas</h1>
        <div className="linha">
          <Conversror moedaA="USD" moedaB="BRL"/>
          <Conversror moedaA="BRL" moedaB="USD"/>
        </div>
        <div className="linha">
          <Conversror moedaA="EUR" moedaB="BRL"/>
          <Conversror moedaA="BRL" moedaB="EUR"/>
        </div>
      </div>
    );
  }
}

export default App;
