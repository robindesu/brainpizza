import React from 'react';
import pizza from './pizza.png';
import './SizeCard.scss';

function SizeCard(props){
    return (
        <div className='card size-card' onClick={() => props.onChangePage(2)}>
            <div className='pic-box'>
                <img src={pizza}></img>
            </div>
            <div className='text-box'>
                <h4 className='size-title'>
                   {props.size.slices} PEDAÇOS
                </h4>
                <p>Raio: {props.size.radius} cm</p>
            </div>
        </div>
    );
}
export default SizeCard;