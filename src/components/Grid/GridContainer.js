import React, {useState} from 'react';
import Grid from './Grid';
import FirebaseService from '../../services/firebaseService';

function GridContainer (props) {

    let dataList = [];
    const [suggests, setSuggests] = useState([]);

    const [sizes, setSizes] = useState([
        {slices: '8', radius : '20'},
        {slices: '16', radius : '30'},
    ]);
    const [doughs, setDoughs] = useState([
        'Branca', 'Integral'
    ]);
    const [flavors, setFlavors] = useState([
        {'flavor': 'Banana com Quiabo', price : '10' },
        {'flavor': 'Banana com Quiabo', price : '10' },
        {'flavor': 'Banana com Quiabo', price : '10' },
        {'flavor': 'Banana com Quiabo', price : '10' },
    ]);
    if(props.page == 0){
        FirebaseService.getSuggestions(dataReceived => {
            setSuggests(dataReceived);
        });
        dataList = suggests;
    }
    else if(props.page == 1){
        dataList = sizes;
    }
    else if(props.page == 2){
        dataList = doughs;
    }
    else if(props.page == 3){
        dataList = flavors;
    }
    return (
        <Grid page={props.page} dataList={dataList} onChangePage={props.onChangePage}/>
    );
}
export default GridContainer;