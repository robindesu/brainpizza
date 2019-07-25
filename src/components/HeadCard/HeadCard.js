import React, { Component } from 'react';
import './HeadCard.scss';

class HeadCard extends Component {
  render() {
    return ( 
        <div className='head-card'>
            <div className='left-part'>
                <p>Monte sua Pizza ou escolha uma Sugestão Abaixo</p>
            </div>
            <div className='right-part'>
                <a className='top-button' href='./size'>Montar > </a>
            </div>
          </div>
        );
    }
}
export default HeadCard;