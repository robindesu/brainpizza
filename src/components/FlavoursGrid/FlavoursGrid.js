import React from 'react';

function FlavoursGrid (props) {
    return(
        <div className='grid-container'>
            <div className='row'>
                <div className='column'>
                    <FlavourCard onChangePage={props.onChangePage}/>
                </div>
                <div className='column'>
                    <FlavourCard onChangePage={props.onChangePage}/>
                </div>
            </div>
        </div>
    );
}
export default FlavoursGrid;