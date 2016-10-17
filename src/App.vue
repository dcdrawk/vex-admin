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

  methods: {
    getCharacters() {
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
