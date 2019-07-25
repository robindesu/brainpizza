import React from 'react';
import PizzaPic from './pizza-slice.png'
import './SuggestCard.scss'


function SuggestCard() {
    return (
        <div>
            <div className='card'>
                <div className='pic-box'>
                <img src={PizzaPic}></img>
                </div>
                <div className='text-box'>
                    <h4 className='pizza-title'>
                        Sabor Banana com Quiabo
                    </h4>
                    <p>Tamanho: Pequeno</p>
                    <p>Massa: Integral</p>
                    <p>Preço: R$20</p>
                </div>
            </div>
        </div>
    );
}
export default SuggestCard;
