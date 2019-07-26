import React from 'react';
import './Grid.scss'
import SuggestCard from '../SuggestCard/SuggestCard';
import SizeCard from '../SizeCard/SizeCard';
import DoughCard from '../DoughCard/DoughCard';
import FlavorCard from '../FlavorCard/FlavorCard';
import OrderCard from '../OrderCard/OrderCard';

function Grid (props) {
    let cardType = '';
    return(
        <div className='grid-container'>
            <div className='row'>
                    {props.dataList.map((ele, index) =>{
                        if(props.page === 0){
                            cardType = <SuggestCard suggest={ele} key={ele.id} 
                                        onChangePage={props.onChangePage}
                                        setsuggestOrder={props.setsuggestOrder}/>
                        }
                        else if(props.page === 1){
                            cardType = <SizeCard size={ele} key={index}  onChangePage={props.onChangePage}/>
                        }
                        else if(props.page === 2){
                            cardType = <DoughCard dough={ele} key={index}  onChangePage={props.onChangePage}/>
                        }
                        else if(props.page === 3){
                            cardType = <FlavorCard flavor={ele} key={index}  onChangePage={props.onChangePage}/>
                        }
                        else if(props.page === 4){
                            cardType = <OrderCard order={ele} key={index}  onChangePage={props.onChangePage}/>
                        }
                        return (
                            <div className='column'>
                                {cardType}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
export default Grid;