import React from 'react';
import pizza from './pizza-slice.png';
import './FlavorCard.scss';

function FlavorCard(props){
    return (
        <div className='card flavor-card' onClick={() => props.onChangePage(4)}>
            <div className='pic-box'>
                <img src={pizza}></img>
            </div>
            <div className='text-box'>
                <h4 className='size-title'>
                   {props.flavor.flavor}
                </h4>
            </div>
        </div>
    );
}
export default FlavorCard;