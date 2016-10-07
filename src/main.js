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
import Toasts from './components/pages/Toasts.vue';
import Chips from './components/pages/Chips.vue';
import Tabs from './components/pages/Tabs.vue';
import Dialogs from './components/pages/Dialogs.vue';
import Sliders from './components/pages/Sliders.vue';
import ExpansionPanels from './components/pages/ExpansionPanels.vue';
import Dividers from './components/pages/Dividers.vue';
import Dropdowns from './components/pages/Dropdowns.vue';
import DataTables from './components/pages/DataTables.vue';

// Style
import Typography from './components/pages/Style/Typography.vue';


// use Vue Router
Vue.use(VueRouter);

// create Router instance
const router = new VueRouter();

router.beforeEach(function (transition) {
  window.scrollTo(0, 0);
  transition.next();
});

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
  '/components/toasts': {
    component: Toasts
  },
  '/components/chips': {
    component: Chips
  },
  '/components/tabs': {
    component: Tabs
  },
  '/components/dialogs': {
    component: Dialogs
  },
  '/components/expansion-panels': {
    component: ExpansionPanels
  },
  '/components/sliders': {
    component: Sliders
  },
  '/components/dividers': {
    component: Dividers
  },
  '/components/dropdowns': {
    component: Dropdowns
  },
  '/components/datatables': {
    component: DataTables
  },

  //Style Pages
  '/style/typography': {
    component: Typography
  }
});

// initialize the app
router.start(App, '#app');
