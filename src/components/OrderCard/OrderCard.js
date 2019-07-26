import React from 'react';
import PizzaPic from './pizza-slice.png';
import './OrderCard.scss';

function OrderCard(props){
    let pointsBox = '';
    if(props.order.points){
            pointsBox = <div className='points-box'>
            Por Escolher nossa sugestão você ganhou {props.order.points} pontos!
        </div>
    }
    return (
        <div className='suggest-card'>
            {pointsBox}
            <div className='card'>
                <div className='pic-box'>
                <img src={PizzaPic}></img>
                </div>
                <div className='text-box'>
                    <h4 className='pizza-title'>
                        {props.order.flavor}
                    </h4>
                    <p>Tamanho: Médio</p>
                    <p>Massa: Integral</p>
                </div>
            </div>
    </div>
    );
}
export default OrderCard;
