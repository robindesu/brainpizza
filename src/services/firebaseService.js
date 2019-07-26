import {firebaseDatabase} from '../utils/firebaseUtil'

export default class FirebaseService {

    static getData = ( path , callback) => {
        firebaseDatabase.collection(path).get()
        .then(dataSnapshot => {
            let list = [];
            dataSnapshot.forEach(doc => {  
                let item = doc.data();
                item = {...item, id: doc.id};
                list.push(item);
            });
            callback(list);
        });
    };
    
    static setOrder = (pizzaId, callback) => {
        firebaseDatabase.collection('suggestions').doc(pizzaId).get()
        .then(doc => {
            callback(doc.data());
        })
    };
}
