import React from 'react';
import pizza from './pizza.png';
import './SizeCard.scss';

function SizeCard(){
    return (
        <div className='card'>
            <div className='pic-box'>
                <img src={pizza}></img>
            </div>
            <div className='text-box'>
                <h4 className='size-title'>
                   4 PEDAÇOS
                </h4>
                <p>Raio: 30cm</p>
            </div>
        </div>
    );
}
export default SizeCard;