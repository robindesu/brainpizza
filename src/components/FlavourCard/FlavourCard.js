import React from 'react';
import pizza from './pizza-slice.png';

function FlavourCard(props){
    return (
        <div className='card size-card' onClick={() => props.onChangePage(4)}>
            <div className='pic-box'>
                <img src={pizza}></img>
            </div>
            <div className='text-box'>
                <h4 className='size-title'>
                   Jiló com Açaí
                </h4>
            </div>
        </div>
    );
}
export default FlavourCard;