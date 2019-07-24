import React from 'react';
import logo from './logo.svg';
import './Header.scss'

function Header() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Brain Pizza</h2>
        </div>
    );
}

export default Header;
