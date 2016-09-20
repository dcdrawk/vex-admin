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

// Dashboard
import Dashboard from './components/pages/Dashboard/Dashboard.vue';

// Components
import Buttons from './components/pages/Buttons.vue';
import Lists from './components/pages/Lists.vue';
import Cards from './components/pages/Cards.vue';
import Forms from './components/pages/Forms.vue';

// Style
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

  //Component Pages
  '/components/buttons': {
    component: Buttons
  },
  '/components/lists': {
    component: Lists
  },
  '/components/cards': {
    component: Cards
  },
  '/components/forms': {
    component: Forms
  },

  //Style Pages
  '/style/typography': {
    component: Typography
  }
});

// initialize the app
router.start(App, '#app');
