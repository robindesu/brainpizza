import React, {useState} from 'react';
import Grid from './Grid';

function GridContainer (props) {
    let dataList = [];
    const [suggests, setSuggests] = useState([
        {'flavour': 'Banana com Quiabo', price : '10' },
        {'flavour': 'Banana com Quiabo', price : '10' },
        {'flavour': 'Banana com Quiabo', price : '10' },
        {'flavour': 'Banana com Quiabo', price : '10' },
    ])
    if(props.page == 0){
        dataList = suggests;
    }
    return (
        <Grid page={props.page} dataList={dataList}/>
    );
}
export default GridContainer;