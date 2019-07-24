import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-content">
          <p>Monte sua pizza ou escolha uma Sugestão.
          A cada compra Ganhe nossos Pontos de Fidelidade.</p>
        </div>
      </div>
    );
  }
}

export default App;
