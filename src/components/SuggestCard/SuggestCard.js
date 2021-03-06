import React from 'react';
import PizzaPic from './pizza-slice.png'
import './SuggestCard.scss'


function SuggestCard(props) {
    const handleClick = () =>{
        props.onChangePage(4);
        props.setsuggestOrder(props.suggest.id);
    }
    return (
        <div className='suggest-card' onClick={() => handleClick()}>
            <div className='card'>
                <div className='pic-box'>
                <img src={PizzaPic}></img>
                </div>
                <div className='text-box'>
                    <h4 className='pizza-title'>
                        {props.suggest.flavor}
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
