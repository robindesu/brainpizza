import React, { Component } from 'react';
import SizeCard from '../SizeCard/SizeCard';

class SizesGrid extends Component {
    render() {
        return (
            <div className='grid-container'>
                <div className='row'>
                    <div className='column'>
                        <SizeCard/>
                    </div>
                </div>
            </div>
        );
    }
}