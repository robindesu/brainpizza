import React, {useState} from 'react';
import Grid from './Grid';
import FirebaseService from '../../services/firebaseService';

function GridContainer (props) {

    let dataList = [];
    const [suggests, setSuggests] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [doughs, setDoughs] = useState([
        'Branca', 'Integral'
    ]);
    const [flavors, setFlavors] = useState([
        {'flavor': 'Banana com Quiabo', price : '10' },
        {'flavor': 'Banana com Quiabo', price : '10' },
        {'flavor': 'Banana com Quiabo', price : '10' },
        {'flavor': 'Banana com Quiabo', price : '10' },
    ]);
    const [order, setOrder] = useState([]);
    const [suggestOrder, setsuggestOrder ] = useState([]);
        
    if(props.page == 0){
        FirebaseService.getData('suggestions', (dataReceived => {
            setSuggests(dataReceived);
        }));
        dataList = suggests;
    }
    else if(props.page === 1){
        FirebaseService.getData('sizes', (dataReceived => {
            setSizes(dataReceived);
        }));
        dataList = sizes;
    }
    else if(props.page === 2){
        FirebaseService.getData('doughs', (dataReceived => {
            setDoughs(dataReceived);
        }));
        dataList = doughs;
    }
    else if(props.page === 3){
        dataList = flavors;
    }
    else if(props.page === 4){
        if(suggestOrder){
            FirebaseService.setOrder(suggestOrder, 
                (dataReceived => {
                    setOrder(dataReceived);
                }));
            dataList = [order];
        }
    }
    return (
        <Grid page={props.page} dataList={dataList} onChangePage={props.onChangePage} setsuggestOrder={setsuggestOrder}/>
    );
}
export default GridContainer;