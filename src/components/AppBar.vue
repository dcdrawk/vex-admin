<template>
  <div class="app-bar">


    <material-toolbar title="VueJS App">
      <material-icon-button icon="menu" primary="true" @click="toggleSidenav"></material-icon-button>
    </material-toolbar>

  <div class="sidebar-backdrop" v-bind:class="{ 'show': open, 'hide': !open}" @click="toggleSidenav"></div>

  <material-sidebar :open="open">
    <div class="avatar-container" v-if="user">
      <div class="avatar" v-if="!user.photoURL"></div>
      <img class="avatar" v-else :src="user.photoURL">
      <div class="user-info">
        <p class="body-1">{{ user.displayName }}</p>
        <p class="body-1 secondary-text">{{ user.email}}</p>
      </div>
    </div>

    <nav>
      <material-list dense="true">
        <material-list-item v-if="!user" text="Log In" v-link="'login'" @click="toggleSidenav()"></material-list-item>
        <material-list-item text="Character List" v-link="'character-list'"></material-list-item>
        <material-list-item text="List Item!"></material-list-item>
      </material-list>
    </nav>
  </material-sidebar>

    <!--TEST-->
  </div>
</template>

<style lang="scss" scoped>
  @import '../styles/components/appbar';
  .list-item {
    cursor: pointer;
  }
</style>

<script>
  import MaterialToolbar from './material/MaterialToolbar';
  import MaterialIconButton from './material/MaterialIconButton.vue';
  import MaterialSidebar from './material/MaterialSidebar';
  import MaterialList from './material/MaterialList';
  import MaterialListItem from './material/MaterialListItem';
  import FirebaseService from '../services/FirebaseService';
  import store from '../services/Store';

  export default {
    store,
    components: {
      MaterialToolbar,
      MaterialIconButton,
      MaterialSidebar,
      MaterialList,
      MaterialListItem
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
      }
    },
    vuex: {
      getters: {
        characters: state => state.characters
      }
    },
    computed: {
      user: function () {
        return store.state.user
      },
      characters: function () {
        return store.state.characters
      }
    }
  }

</script>
