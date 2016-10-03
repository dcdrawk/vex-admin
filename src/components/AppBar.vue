<template>
  <div class="app-bar locked-open" v-bind:class="{ 'open': open }">


  <toolbar title="Vex Admin">
    <icon-button class="app-bar-menu" icon="menu" @click="toggleSidenav"></icon-button>
  </toolbar>

  <div class="sidebar-backdrop" v-bind:class="{ 'show': open, 'hide': !open}" @click="toggleSidenav"></div>

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
        <list-item text="Components" bold="true" @click="expand('components')"></list-item>
      </list>
      <list dense="true" v-ref:components style="height: 0px; overflow: hidden;" class="secondary-list">
        <list-item v-el:buttons text="Buttons" v-link="'/components/buttons'" :no-ripple="true" @click="setActive('buttons')"></list-item>
        <list-item v-el:lists text="Lists" v-link="'/components/lists'" :no-ripple="true" @click="setActive('lists')"></list-item>
        <list-item v-el:cards text="Cards" v-link="'/components/cards'" :no-ripple="true" @click="setActive('cards')"></list-item>
        <list-item v-el:forms text="Forms" v-link="'/components/forms'" :no-ripple="true" @click="setActive('forms')"></list-item>
        <list-item v-el:toasts text="Toasts" v-link="'/components/toasts'" :no-ripple="true" @click="setActive('toasts')"></list-item>
        <list-item v-el:chips text="Chips" v-link="'/components/chips'" :no-ripple="true" @click="setActive('chips')"></list-item>
        <list-item v-el:tabs text="Tabs" v-link="'/components/tabs'" :no-ripple="true" @click="setActive('tabs')"></list-item>
        <list-item v-el:dialogs text="Dialogs" v-link="'/components/dialogs'" :no-ripple="true" @click="setActive('dialogs')"></list-item>
        <list-item v-el:expansionpanels text="Expansion Panels" v-link="'/components/expansion-panels'" :no-ripple="true" @click="setActive('expansionpanels')"></list-item>
      </list>

      <list dense="true">
        <list-item text="Style" bold="true" @click="expand('style')"></list-item>
      </list>
      <list dense="true" v-ref:style style="height: 0px; overflow: hidden;" class="secondary-list">
        <list-item v-el:typography text="Typography" v-link="'/style/typography'" :no-ripple="true" @click="setActive('typography')"></list-item>
      </list>
    </nav>
  </sidebar>

    <!--TEST-->
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

  export default {
    store,
    components: {
      Toolbar,
      IconButton,
      Sidebar,
      List,
      ListItem
    },
    props: [
      'title'
    ],
    data () {
      return {
        open: false
      }
    },
    methods: {
      toggleSidenav () {
        this.open = !this.open;
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
        for (var i in this.$els) {
          this.$els[i].classList.remove('active');
        }
        this.$els[listItem].classList.add('active');
      }
    },
    vuex: {
      getters: {
        user: state => state.user
      }
    },
    computed: {
      user: function () {
        return store.state.user
      }
    },
    ready () {
      console.log(this);
      var path = this.$route.path;
      var pathArray = path.replace(/-+/, '').replace(/\/+/, '').split('/');

      this.expand(pathArray[0]);
      this.setActive(pathArray[1]);


      console.log(pathArray);
    }
  }

</script>
