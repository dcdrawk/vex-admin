// import Vue from 'vue'
// import App from './App'
//
// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
import Vue from 'vue';
import Vuex from 'vuex';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Hello from './components/Hello';
import About from './components/About';
import LogIn from './components/LogIn.vue';
import Profile from './components/Profile';
import CharacterList from './components/CharacterList.vue';
// import store from './services/Store';

Vue.use(VueRouter);

// Setup / import components for use with the router
const Foo = Vue.extend({
  template: '<p>This is foo!</p>'
});
// or, if you create your components in seperate .vue files:
// const Foo = require('./components/Foo.vue');

// const Bar = Vue.extend({
//   template: '<p>This is bar!</p>'
// });

// create Router instance
const router = new VueRouter();

// create Router instance
Vue.use(VueResource);

// add your routes and their components
router.map({
  '/': {
    component: About
  },
  '/foo': {
    component: Foo
  },
  '/about': {
    component: About
  },
  '/people': {
    component: Hello
  },
  '/login': {
    component: LogIn
  },
  '/profile': {
    component: Profile
  },
  '/character-list': {
    component: CharacterList
  }
});

router.start(App, '#app');
