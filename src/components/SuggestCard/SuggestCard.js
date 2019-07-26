import React from 'react';
import PizzaPic from './pizza-slice.png'
import './SuggestCard.scss'


function SuggestCard(props) {
    return (
        <div className='suggest-card'>
            <div className='card'>
                <div className='pic-box'>
                <img src={PizzaPic}></img>
                </div>
                <div className='text-box'>
                    <h4 className='pizza-title'>
                        {props.suggest.flavour}
                    </h4>
                    <p>Tamanho: Médio</p>
                    <p>Massa: Integral</p>
                    <p>Preço: R${props.suggest.price}</p>
                </div>
            </div>
        </div>
    );
}
export default SuggestCard;
