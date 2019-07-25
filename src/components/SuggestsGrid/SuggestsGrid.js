import React, { Component } from 'react';
import './SuggestsGrid.scss';
import SuggestCard from '../SuggestCard/SuggestCard'

class SuggestsGrid extends Component {
    render() {
        return (
            <div>
                <div className='grid-container'>
                    <div className='row'>
                        <div className='column'>
                            <SuggestCard/>
                        </div>
                        <div className='column'>
                            <SuggestCard/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='column'>
                            <SuggestCard/>
                        </div>
                        <div className='column'>
                            <SuggestCard/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SuggestsGrid;
