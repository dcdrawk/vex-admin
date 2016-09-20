<template>
  <div class="app-bar locked-open" v-bind:class="{ 'open': open }">


  <toolbar title="Vex Admin">
    <icon-button class="app-bar-menu" icon="menu" @click="toggleSidenav"></icon-button>
  </toolbar>

  <div class="sidebar-backdrop" v-bind:class="{ 'show': open, 'hide': !open}" @click="toggleSidenav"></div>

  <sidebar :open="open" class="locked-open">
    <div class="avatar-container" v-if="user">
      <div class="avatar" v-if="!user.photoURL"></div>
      <img class="avatar" v-else :src="user.photoURL">
      <div class="user-info">
        <p class="body-1">{{ user.displayName }}</p>
        <p class="body-1 secondary-text">{{ user.email}}</p>
      </div>
    </div>

    <nav class="sidebar-nav">
      <list dense="true">
        <list-item text="Components" bold="true" @click="expand('components')"></list-item>
      </list>
      <list dense="true" v-ref:components style="height: 0px; overflow: hidden;" class="secondary-list">
        <list-item text="Buttons" v-link="'buttons'"></list-item>
        <list-item text="Lists" v-link="'lists'"></list-item>
        <list-item text="Cards" v-link="'cards'"></list-item>
      </list>

      <list dense="true">
        <list-item text="Layout" bold="true" @click="expand('layout')"></list-item>
      </list>
      <list dense="true" v-ref:layout style="height: 0px; overflow: hidden;" class="secondary-list">
        <list-item text="Grid" v-link="'login'"></list-item>
        <list-item text="Grid List" v-link="'character-list'"></list-item>
      </list>

      <list dense="true">
        <list-item text="Style" bold="true" @click="expand('theming')"></list-item>
      </list>
      <list dense="true" v-ref:theming style="height: 0px; overflow: hidden;" class="secondary-list">
        <list-item text="Typography" v-link="'typography'"></list-item>
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
    margin: 8px 0;
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
        this.collapseAll();
        if (this.$refs[list].$el.style.height === '0px') {
          this.$refs[list].$el.style.height = this.$refs[list].$el.scrollHeight + 'px';
        } else {
          this.$refs[list].$el.style.height = 0;
        }
      },
      collapseAll() {
        for (var i in this.$refs) {
          this.$refs[i].$el.style.height = 0;
        }
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
    }
  }

</script>
