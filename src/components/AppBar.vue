<template>
  <div class="app-bar">


    <material-toolbar title="TESTING">
      <material-icon-button icon="menu" primary="true" @click="toggleSidenav"></material-icon-button>
    </material-toolbar>

  <div class="sidebar-backdrop" v-bind:class="{ 'show': open, 'hide': !open}" @click="toggleSidenav"></div>

  <material-sidebar :open="open">
    <div class="avatar-container">
      <div class="avatar"></div>
      <div class="user-info">
        <p class="body-1">Username</p>
        <p class="body-1 secondary-text">email</p>
      </div>
    </div>

    <nav>
      <material-list dense="true">
        <material-list-item text="List Item!" icon="star" v-link="'home'"></material-list-item>
        <material-list-item text="List Item!" icon="person"></material-list-item>
        <material-list-item text="List Item!" icon="edit"></material-list-item>
      </material-list>
      <!--<List>-->
      <!--<Link to="/about"><ListItem text="List Item"/></Link>-->
      <!--<Link to="/login"><ListItem text="Log In"/></Link>-->
      <!--<Link to="/"><ListItem text="List Item2"/></Link>-->
      <!--</List>-->
    </nav>
  </material-sidebar>

    <!--TEST-->
  </div>
</template>

<style lang="scss">
  @import '../styles/components/appbar';
</style>

<script>
  import MaterialToolbar from './material/MaterialToolbar';
  import MaterialIconButton from './material/MaterialIconButton.vue';
  import MaterialSidebar from './material/MaterialSidebar';
  import MaterialList from './material/MaterialList';
  import MaterialListItem from './material/MaterialListItem';

  export default {
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
    }
  }

</script>
