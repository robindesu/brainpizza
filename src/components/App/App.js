import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import HeadCard from '../HeadCard/HeadCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <HeadCard/>
        <div className="App-content">
         
        </div>
      </div>
    );
  }
}

export default App;
