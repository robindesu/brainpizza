import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Brain Pizza</h2>
        </div>
        <p className="App-intro">
          Monte sua pizza ou escolha uma Sugestão.
          A cada compra Ganhe nossos Pontos de Fidelidade.
        </p>
      </div>
    );
  }
}

export default App;
