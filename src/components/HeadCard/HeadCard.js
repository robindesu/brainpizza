import React from 'react';
import './HeadCard.scss';
import {Link} from 'react-router-dom';

const HeadCard = (props) =>{
    return ( 
        <div className='head-card'>
            <div className='left-part'>
                <p>{props.title}</p>
            </div>
            <div className='right-part'>
                <a className='top-button' to='/size' onClick={() => props.onChangePage(1)}>Montar > </a>
            </div>
          </div>
        );
}
export default HeadCard;