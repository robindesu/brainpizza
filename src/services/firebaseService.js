import {firebaseDatabase} from '../utils/firebaseUtil'

export default class FirebaseService {
    // suggestionsPath = '';
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
}
