import React from 'react';
import SuggestCard from '../SuggestCard/SuggestCard';

function Grid (props) {
    let cardType = ''

    return(
        <div className='grid-container'>
            <div className='row'>
                    {props.dataList.map((ele, index) =>{
                        if(props.page == 0){
                            return (
                                <div className='column'>
                                    <SuggestCard suggest={ele} key={index}/>
                                </div>)
                        }
                    })}
            </div>
        </div>
    );
}
export default Grid;