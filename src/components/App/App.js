import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Header from '../Header/Header';
import HeadCard from '../HeadCard/HeadCard';
import SuggestsGrid from '../SuggestsGrid/SuggestsGrid';
import SizesGrid from '../SizesGrid/SizesGrid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <HeadCard/>
        <div className="App-content">
          <Router >
            <Route  exact path="/" component={SuggestsGrid} />
            <Route  exact path="/size" component={SizesGrid} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
