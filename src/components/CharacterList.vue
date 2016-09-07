<template>
  <div class="row space-around">
    This is the character list

    <material-data-table :rows="rows"></material-data-table>
  </div>
</template>
<style lang="scss" scoped>

  .profile-pic-container {
    margin: auto;
    width: 92px;
    height: 92px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 32px;

    img {
      width: 100%;
    }

  }

</style>
<script>
  import FirebaseService from '../services/FirebaseService';
  import MaterialDataTable from './material/MaterialDataTable.vue';
  import store from '../services/Store';

  export default {
    store,
    components: {
      MaterialDataTable
//      MaterialInput,
//      MaterialButton,
//      MaterialCard,
    },

    ready () {
//      console.log(store);
      console.log('character list is ready');
    },

    data () {
      return {
        msg: 'hello vue',
        user: undefined,
        rows: [
          {
            name: 'test1'
          },
          {
            name: 'test2'
          },
        ]
      }
    },

    methods: {
//      logIn (event) {
//        let email = this.$refs.email.value;
//        let password = this.$refs.password.value;
//        FirebaseService.logIn(email, password);
//      }
    },
//    computed: {
//      user: function () {
//        return store.state.user
//      }
//    }
  }
</script>
