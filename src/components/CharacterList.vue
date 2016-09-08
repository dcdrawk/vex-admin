<template>
  <div class="row space-around">
    This is the character list {{ characters }}
    <material-data-table :headers="headers" :rows="characters" :keys="keys"></material-data-table>
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
  import MaterialDataTable from './material/MaterialDataTable.vue';
  import FirebaseService from '../services/FirebaseService';
  import CharacterService from '../services/CharacterService';
  import store from '../services/Store';

  export default {
    store,

    components: {
      MaterialDataTable
    },

    ready () {
      console.log('character list is ready');
    },

    data () {
      return {
        headers: [
          {
            title: 'Name'
          },
          {
            title: 'Level'
          },
          {
            title: 'Race'
          },
          {
            title: 'Class'
          }
        ],
        keys: [
          'name',
          'level',
          'race',
          'class'
        ]
      }
    },
    computed: {
      characters: function () {
        console.log('BUT BUT');
        return store.state.characters
      }
    }
  }
</script>
