<template>
  <div id="app">
    <app-bar></app-bar>
    <div class="container">

        <router-view></router-view>

    </div>
  </div>
</template>

<script>
import MaterialCard from './components/vex/Card'
import MaterialButton from './components/vex/Button'
import AppBar from './components/AppBar.vue';
import firebase from 'firebase';
import CharacterService from './services/CharacterService';
//import Vuex from 'vuex'
import store from './services/Store';

//var router = new VueRouter();
//console.log('test', router)
//Vue.use(Vuex);



export default {

  components: {
    MaterialCard,
    MaterialButton,
    AppBar
  },
  data () {
    return {
      actions: ['test', 'test2']
    }
  },
  mounted () {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyACdSfcm596fdnyoIFiovJWlq_15g0Vuag',
      authDomain: 'codex-9bc8c.firebaseapp.com',
      databaseURL: 'https://codex-9bc8c.firebaseio.com',
      storageBucket: 'codex-9bc8c.appspot.com',
    };
    console.log('App is mounted');
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      console.log('Auth State Changed');
      if (user) {
        // User is signed in.
        store.dispatch('SETUSER', user);
        this.getCharacters();
      } else {
        console.log('no user has signed in');
        store.dispatch('SETUSER', undefined);
        // No user is signed in.
      }
    });
  },

    methods: {
  getCharacters() {
      console.log('lets get the characters');
      CharacterService.getCharacterList().then((characters) => {
        store.dispatch('SETCHARACTERS', characters);
      })
    }
  }
}
</script>

<style lang="scss">
@import './styles/core';

html {
  height: 100%;
}
</style>
