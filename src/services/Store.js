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
    state.user = user;
  },

  SETCHARACTERS (state, characters) {
    state.characters = characters;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
