import {firebaseDatabase} from '../utils/firebaseUtil'

export default class FirebaseService {
    // suggestionsPath = '';
    static getSuggestions = (callback) => {
        firebaseDatabase.collection('suggestions').get()
        .then(dataSnapshot => {
            let list = [];
            const data = dataSnapshot.docs.map(doc => {                
                let item = doc.data();
                // item['key'] = doc.key();
                list.push(item);
            });
            callback(list);
        });
    };
}
