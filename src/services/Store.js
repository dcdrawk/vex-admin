import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  user: undefined,
  characters: undefined
};

const mutations = {
  INCREMENT (state) {
    state.count++;
  },

  SETUSER (state, user) {
    console.log('user has updated');
    state.user = user;
    console.log(state);
  },

  SETCHARACTERS (state, characters) {
    console.log('character list has updated');
    state.characters = characters;
    console.log(state);
  }
};

export default new Vuex.Store({
  state,
  mutations
});
