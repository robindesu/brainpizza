import React, { Component } from 'react';
import './SuggestsGrid.scss';
import PizzaPic from './pizza-slice.png'

class SuggestsGrid extends Component {
    render() {
        return (
            <div>
                <div className='grid-container'>
                    <div className='row'>
                        <div className='column'>
                            <div className='card'>
                                <div className='pic-box'>
                                <img src={PizzaPic}></img>
                                </div>
                                <div className='text-box'>
                                    <h4 className='pizza-title'>
                                        Sabor Banana com Quiabo
                                    </h4>
                                    <p>Descrição: Banana</p>
                                </div>
                            </div>
                        </div>
                        <div className='column'>
                            <div className='card'>
                                test
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='column'>
                            <div className='card'>
                                test
                            </div>
                        </div>
                        <div className='column'>
                            <div className='card'>
                                test
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SuggestsGrid;
