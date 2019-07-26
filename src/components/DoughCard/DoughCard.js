import React from 'react';
import pizza from './pizza.png';

function DoughCard(props){
    return (
        <div className='card size-card' onClick={() => props.onChangePage(3)}>
            <div className='pic-box'>
                <img src={pizza}></img>
            </div>
            <div className='text-box'>
                <h4 className='size-title'>
                    {props.dough}
                </h4>
            </div>
        </div>
    );
};
export default DoughCard;