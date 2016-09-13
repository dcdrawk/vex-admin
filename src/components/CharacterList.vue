<template>
  <div class="row space-around character-list">
    {{characters}} {{count}}
    <!--<input v-model="searchText">-->
    <material-search-bar v-ref:search placeholder="Search" :value="searchText" :autocomplete="characters" key="name"></material-search-bar>
    <data-table title="Character List">
        <table v-if="characters">
          <thead>
            <tr>
              <th>
                <span @click="orderBy('name');">Name</span>
                <i class="material-icons" v-if="order === 'name'"
                   v-bind:class="{'descending': direction === 1, 'ascending': direction === -1}">
                  arrow_downward
                </i>
              </th>
              <th>
                <i class="material-icons" v-if="order === 'level'"
                   v-bind:class="{'descending': direction === 1, 'ascending': direction === -1}">
                  arrow_downward
                </i>
                <span @click="orderBy('level');">Level</span>
              </th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="character in characters | filterBy $refs.search.value in 'name' | orderBy order direction | testLength 'count'" >
            <td>{{character.name}}</td>
            <td>{{character.level}}</td>
          </tr>
        </table>
    </data-table>

  </div>
</template>
<style lang="scss" scoped>

  .character-list {
    padding-top: 24px;
  }

</style>
<script>
  import DataTable from './material/MaterialDataTable.vue';
  import MaterialSearchBar from './material/MaterialSearchBar.vue';
  import FirebaseService from '../services/FirebaseService';
  import CharacterService from '../services/CharacterService';
  import store from '../services/Store';

  export default {
    store,


    components: {
      DataTable,
      MaterialSearchBar
    },

    ready () {
      console.log('character list is ready');
    },

    data () {
      return {
        order: 'name',
        direction: 1,
        searchText: '',
        count: '0'
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
    filters: {
      testLength: function (arr) {
        // record length
        this.$set('count', arr.length)
        // return it intact
        return arr
      }
    },
    computed: {
      characters: function () {
        return store.state.characters
      }
    }
  }
</script>
