import {firebaseDatabase} from '../utils/firebaseUtil'

export default class FirebaseService {

    static getSuggestions = (callback) => {
        firebaseDatabase.collection('suggestions').get()
        .then(dataSnapshot => {
            let list = [];
            const data = dataSnapshot.forEach(doc => {  
                let item = doc.data();
                item = {...item, id: doc.id};
                list.push(item);
            });
            callback(list);
        });
    };
    static getSizes = (callback) => {
        firebaseDatabase.collection('sizes').get()
        .then(dataSnapshot => {
            let list = [];
            const data = dataSnapshot.forEach(doc => {  
                let item = doc.data();
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
