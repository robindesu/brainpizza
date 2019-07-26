import React from 'react';
import './HeadCard.scss';

const HeadCard = (props) =>{
    return ( 
        <div className='head-card'>
            <div className='left-part'>
                <p>{props.title}</p>
            </div>
            <div className='right-part'>
                <a className={'top-button ' + (props.page > 0 ? 'disabled' : '')} onClick={() => props.onChangePage(1)}>Montar > </a>
            </div>
          </div>
        );
}
export default HeadCard;