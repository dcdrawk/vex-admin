<template>
  <div class="app-bar locked-open" v-bind:class="{ 'open': open }">
    <toolbar :title="'Vex Admin > ' + active">
      <icon-button class="app-bar-menu" icon="menu" @click.native="toggleSidenav"></icon-button>
    </toolbar>

    <div class="sidebar-backdrop" v-bind:class="{ 'show': open, 'hide': !open}" @click.native="toggleSidenav"></div>

    <sidebar :open="open" class="locked-open">
      <!--<div class="avatar-container" v-if="user">-->
        <!--<div class="avatar" v-if="!user.photoURL"></div>-->
        <!--<img class="avatar" v-else :src="user.photoURL">-->
        <!--<div class="user-info">-->
          <!--<p class="body-1">{{ user.displayName }}</p>-->
          <!--<p class="body-1 secondary-text">{{ user.email}}</p>-->
        <!--</div>-->
      <!--</div>-->

      <nav class="sidebar-nav">
        <list dense="true">
          <list-item text="Components" bold="true" @click.native.native="expand('components')"></list-item>
        </list>
        <list dense="true" ref="components" style="height: 0px; overflow: hidden;" class="secondary-list">
          <router-link to="/components/buttons">
            <list-item ref="buttons" text="Buttons" :no-ripple="true" @click.native="setActive('buttons')"></list-item>
          </router-link>
          <router-link to="/components/cards">
            <list-item ref="cards" text="Cards" :no-ripple="true" @click.native="setActive('cards')"></list-item>
          </router-link>
          <router-link to="/components/charts">
            <list-item ref="charts" text="Charts" :no-ripple="true" @click.native="setActive('charts')"></list-item>
          </router-link>
          <router-link to="/components/chips">
            <list-item ref="chips" text="Chips" :no-ripple="true" @click.native="setActive('chips')"></list-item>
          </router-link>
          <router-link to="/components/datatables">
            <list-item ref="datatables" text="Data tables" :no-ripple="true" @click.native="setActive('datatables')"></list-item>
          </router-link>
          <router-link to="/components/dialogs">
            <list-item ref="dialogs" text="Dialogs" :no-ripple="true" @click.native="setActive('dialogs')"></list-item>
          </router-link>
          <router-link to="/components/dividers">
            <list-item ref="dividers" text="Dividers" :no-ripple="true" @click.native="setActive('dividers')"></list-item>
          </router-link>
          <router-link to="/components/dropdowns">
            <list-item ref="dropdowns" text="Dropdowns" :no-ripple="true" @click.native="setActive('dropdowns')"></list-item>
          </router-link>
          <router-link to="/components/expansion-panels">
            <list-item ref="expansionpanels" text="Expansion Panels" :no-ripple="true" @click.native="setActive('expansionpanels')"></list-item>
          </router-link>
          <router-link to="/components/forms">
            <list-item ref="forms" text="Forms" :no-ripple="true" @click.native="setActive('forms')"></list-item>
          </router-link>
          <router-link to="/components/lists">
            <list-item ref="lists" text="Lists" :no-ripple="true" @click.native="setActive('lists')"></list-item>
          </router-link>
          <router-link to="/components/toasts">
            <list-item ref="toasts" text="Toasts" :no-ripple="true" @click.native="setActive('toasts')"></list-item>
          </router-link>
          <router-link to="/components/tabs">
            <list-item ref="tabs" text="Tabs" :no-ripple="true" @click.native="setActive('tabs')"></list-item>
          </router-link>
          <router-link to="/components/sliders">
            <list-item ref="sliders" text="Sliders" :no-ripple="true" @click.native="setActive('sliders')"></list-item>
          </router-link>
        </list>

        <list dense="true">
        <list-item text="Style" bold="true" @click.native.native="expand('style')"></list-item>
      </list>
        <list dense="true" ref="style" style="height: 0px; overflow: hidden;" class="secondary-list">
          <router-link to="/style/typography">
            <list-item ref="typography" text="Typography" :no-ripple="true" @click.native="setActive('typography')"></list-item>
          </router-link>
        </list>

        <list dense="true">
          <list-item text="Pages" bold="true" @click.native.native="expand('pages')"></list-item>
        </list>
        <list dense="true" ref="pages" style="height: 0px; overflow: hidden;" class="secondary-list">
          <router-link to="/pages/sign-in">
            <list-item ref="signin" text="Sign In" :no-ripple="true" @click.native="setActive('signin')"></list-item>
          </router-link>
          <router-link to="/pages/sign-up">
            <list-item ref="signup" text="Sign Up" :no-ripple="true" @click.native="setActive('signup')"></list-item>
          </router-link>
        </list>
      </nav>
    </sidebar>
  </div>
</template>

<style lang="scss">
  @import '../styles/components/appbar';
  .list-item {
    cursor: pointer;
  }
  .sidebar-nav {
    .list {
      margin: 0;
    }
  }
  .secondary-list .list-item {
    padding-left: 32px;
  }

  .app-bar-menu .icon-button-wrapper.flat.primary i {
    color: #fff!important;
  }


</style>

<script>
  import Toolbar from './vex/Toolbar';
  import IconButton from './vex/IconButton.vue';
  import Sidebar from './vex/Sidebar';
  import List from './vex/List';
  import ListItem from './vex/ListItem';
  import FirebaseService from '../services/FirebaseService';
  import store from '../services/Store';
//   import RouterLink from 'vue-router';
  // import VueRouter from 'vue-router';
  export default {
    store,
    components: {
      Toolbar,
      IconButton,
      Sidebar,
      List,
      ListItem,
//      RouterLink
    },
    props: [
      'title'
    ],
    data () {
      return {
        open: false,
        active: ''
      }
    },
    methods: {
      toggleSidenav () {
        this.open = !this.open;

        if (this.open) {
          document.body.classList.add('sidebar-open');
        } else {
          document.body.classList.remove('sidebar-open');
        }
      },
      expand (list) {
        if (this.$refs[list].$el.style.height === '0px') {
          this.$refs[list].$el.style.height = this.$refs[list].$el.scrollHeight + 'px';
        } else {
          this.$refs[list].$el.style.height = 0;
        }
      },
      collapseAll () {
        for (var i in this.$refs) {
          this.$refs[i].$el.style.height = 0;
        }
      },
      setActive (listItem) {
        for (var i in this.$refs) {
          this.$refs[i].$el.classList.remove('active');
        }
        this.$refs[listItem].$el.classList.add('active');
        this.active = listItem;
      }
    },
    mounted () {
      // var path = this.$route.path;
      var path = window.location.hash;
      var pathArray = path.replace(/-+/, '').replace(/#+/, '').replace(/\/+/, '').split('/');

      this.$nextTick(() => {
         this.expand(pathArray[0]);
         this.setActive(pathArray[1]);
      });

      window.onpopstate = (event) => {
        setTimeout(() => {
          var path = this.$route.path;
          var pathArray = path.replace(/-+/, '').replace(/\/+/, '').split('/');
          this.setActive(pathArray[1]);
        }, 0);
      };
    }
  }

</script>
