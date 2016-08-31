import firebase from 'firebase';

class FirebaseService {

  static logIn(email, password) {
    // `this` inside methods point to the Vue instance
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.error(errorCode);
      console.error(errorMessage);
      // ...
    });
  }
}

export default FirebaseService;
