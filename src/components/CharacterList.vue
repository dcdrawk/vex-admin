<template>
  <div class="row space-around character-list">
    {{characters}} {{$refs.search.value}}
    <!--<input v-model="searchText">-->
    <material-search-bar v-ref:search placeholder="Search" :value="searchText" key="name"></material-search-bar>
    <data-table :columns="columns" :rows="characters" :filter="$refs.search.value">

    </data-table>
    <div class="col-md-12">
        <material-select :options="options"></material-select>

    </div>

  </div>
</template>
<style lang="scss" scoped>

  .character-list {
    padding-top: 24px;
  }

</style>
<script>
  import DataTable from './vex/DataTable.vue';
  import MaterialSearchBar from './vex/SearchBar.vue';
  import FirebaseService from '../services/FirebaseService';
  import CharacterService from '../services/CharacterService';
  import MaterialSelect from './vex/Select.vue';

  import store from '../services/Store';

  export default {
    store,


    components: {
      DataTable,
      MaterialSearchBar,
      MaterialSelect
    },

    mounted () {
      console.log('character list is mounted!!!!');
      console.log(this);
    },

    data () {
      return {
        columns: [{
          head: 'Name',
          key: 'name'
        }, {
          head: 'Level',
          key: 'level'
        }, {
          head: 'Class',
          key: 'class'
        }],
        order: 'name',
        direction: 1,
        searchText: '',
        options: ['test1', 'test2', 'test3 longer', 'test4', 'test5 this', 'testjiosjtios', 'esfesf']
      }
    },
    methods: {
      orderBy(property) {
        if (this.order === property) {
          this.direction = this.direction * -1;
        } else {
          this.direction = 1;
        }
        this.order = property;
      }
    },
    computed: {
      characters: function () {
        return store.state.characters
      }
    }
  }
</script>
