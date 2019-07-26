import React from 'react';
import SizeCard from '../SizeCard/SizeCard';


function SizesGrid (props) {
        return (
            <div className='grid-container'>
                <div className='row'>
                    <div className='column'>
                        <SizeCard onChangePage={props.onChangePage}/>
                    </div>
                    <div className='column'>
                        <SizeCard onChangePage={props.onChangePage}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <SizeCard onChangePage={props.onChangePage}/>
                    </div>
                    <div className='column'>
                        <SizeCard onChangePage={props.onChangePage}/>
                    </div>
                </div>
            </div>
        );
}
export default SizesGrid;