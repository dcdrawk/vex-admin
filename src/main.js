// import Vue from 'vue'
// import App from './App'
//
// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';

import Dashboard from './components/pages/Dashboard/Dashboard.vue';
import Buttons from './components/pages/Buttons.vue';
import Typography from './components/pages/Style/Typography.vue';
// use Vue Router
Vue.use(VueRouter);

// create Router instance
const router = new VueRouter();

// create Router instance
Vue.use(VueResource);

// add your routes and their components
router.map({
  '/': {
    component: Dashboard
  },
  '/buttons': {
    component: Buttons
  },
  '/typography': {
    component: Typography
  }
});

// initialize the app
router.start(App, '#app');
