<template>
  <div class="row page-content">

    <!--Select Demo-->
    <v-card title="Data Tables" class="col-xs-12">
      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Data Table -->
          <h3 class="title">Basic</h3>
          <v-data-table :rows="rows" :columns="columns"></v-data-table>

          <!-- Hover Data Table -->
          <h3 class="title">Search Filter + Border {{ searchText }}</h3>
          <v-search-bar ref="search" placeholder="Search" :value="searchText" key="name" @changed="searchText = $event"></v-search-bar>
          <v-data-table :rows="rows" :columns="columns" :border="true" :filter="searchText" ></v-data-table>

          <!-- Row Selection + Hover Data Table -->
          <h3 class="title">Row Selection + Hover</h3>
          <!--<v-data-table :rows="rows" :columns="columns" :hover="true" :selection="true" selection-key="selected"></v-data-table>-->

          <!-- Striped Data Table -->
          <h3 class="title">Striped + Editable Fields</h3>
          <!--<v-data-table :rows="rows" :columns="columnsEditable" :striped="true"></v-data-table>-->

          <!-- Basic Dropdown -->
          <h3 class="title">Responsive</h3>
          <!--<v-data-table :rows="rows" :columns="columns" :responsive="true"></v-data-table>-->

        </div>
        <div slot="template">
          <!--<pre><code class="language-html">{{ dropdownMarkup }}</code></pre>-->
        </div>
        <div slot="script">
          <!--<pre><code class="language-javascript">{{ dropdownScript }}</code></pre>-->
        </div>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
  // Imports
  import VCard from '../vex/Card.vue';
  import VIconButton from '../vex/IconButton.vue';
  import VDropdown from '../vex/Dropdown.vue';
  import VList from '../vex/List.vue';
  import VListItem from '../vex/ListItem.vue';
  import VDivider from '../vex/Divider.vue';
  import VTabs from '../vex/VTabs.vue';
  import VDataTable from '../vex/DataTable.vue';
  import VSearchBar from '../vex/Searchbar.vue'

  import Prism from 'prismjs';

  // Exports
  export default {

    // Components
    components: {
      VCard,
      VDropdown,
      VTabs,
      VList,
      VListItem,
      VDivider,
      VIconButton,
      VDataTable,
      VSearchBar
    },
    mounted () {
      // Syntax Highlighting
      Prism.highlightAll();
    },
    // Data
    data () {
      return {
        searchText: '',
        rows: [{
          name: 'Jon',
          house: 'Snow',
          sigil: 'Wolf',
          age: 21
        }, {
          name: 'Tyrion',
          house: 'Lannister',
          sigil: 'Lion',
          age: 39
        }, {
          name: 'Daenerys',
          house: 'Targaryen',
          sigil: 'Dragon',
          age: 21
        }, {
          name: 'Jorah',
          house: 'Mormont',
          sigil: 'Bear',
          age: 50
        }, {
          name: 'Theon',
          house: 'Greyjoy',
          sigil: 'Kraken',
          age: 21
        }],

        columns: [{
          head: 'Name',
          key: 'name'
        }, {
          head: 'House',
          key: 'house'
        }, {
          head: 'Sigil',
          key: 'sigil'
        }, {
          head: 'Age',
          key: 'age'
        }],

        columnsEditable: [{
          head: 'Name',
          key: 'name',
        }, {
          head: 'House',
          key: 'house',
          editable: true
        }, {
          head: 'Sigil',
          key: 'sigil',
          options: ['Wolf', 'Lion', 'Dragon', 'Bear', 'Kraken']
        }, {
          head: 'Age',
          key: 'age'
        }]

    }
  }
}
</script>

<style lang="scss">
  //Import or add any styles here
</style>
