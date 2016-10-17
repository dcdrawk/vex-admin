import firebase from 'firebase';

class FirebaseService {

    static logIn(email, password) {
        // `this` inside methods point to the Vue instance
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                console.error(errorCode);
                console.error(errorMessage);
                reject();
                // ...
            }).then(() => {
                resolve();
            });
        });
    }

    static getUserInfo() {
        return firebase.auth().currentUser;
    }
}

export default FirebaseService;
