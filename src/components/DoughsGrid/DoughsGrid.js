import React from 'react';
import DoughCard from '../DoughCard/DoughCard';


function DoughsGrid (props) {
    return (
        <div className='grid-container'>
                <div className='row'>
                    <div className='column'>
                        <DoughCard onChangePage={props.onChangePage}/>
                    </div>
                    <div className='column'>
                        <DoughCard onChangePage={props.onChangePage}/>
                    </div>
                </div>
        </div>
    );
};
export default DoughsGrid;