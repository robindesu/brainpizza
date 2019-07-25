import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import HeadCard from '../HeadCard/HeadCard';
import SuggestsGrid from '../SuggestsGrid/SuggestsGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <HeadCard/>
        <div className="App-content">
          <SuggestsGrid/>
        </div>
      </div>
    );
  }
}

export default App;
