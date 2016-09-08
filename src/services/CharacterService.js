import firebase from 'firebase';

class CharacterService {

  static getCharacterList() {
    let userId = firebase.auth().currentUser.uid;
    let url = 'characters/' + userId;
    return new Promise((resolve, reject) => {
      firebase.database().ref(url).on('value', (snapshot) => {
        resolve(snapshot.val());
      });
    });
  }

}

export default CharacterService;
