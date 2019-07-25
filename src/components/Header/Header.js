import React from 'react';
import logo from './logo.svg';
import './Header.scss'

function Header(props) {
    return (
        <div className="App-header">
          <a className='logo' href='/' onClick={() => props.onChangePage(0)}>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Brain Pizza</h2>
          </a>
        </div>
    );
}

export default Header;
