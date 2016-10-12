<template>
  <div class="row page-content">

    <!--Select Demo-->
    <v-card title="Data Tables" class="col-xs-12">
      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Data Table -->
          <h3 class="title">Basic</h3>
          <v-data-table :rows="rows1" :columns="columns" order="name" :direction="-1"></v-data-table>

          <!-- Hover Data Table -->
          <h3 class="title">Search Filter + Border {{ searchText }}</h3>
          <v-search-bar ref="search" placeholder="Search" :value="searchText" key="name" @changed="searchText = $event"></v-search-bar>
          <v-data-table :rows="rows2" :columns="columns" :border="true" :filter="searchText" no-results="No Results to Display"></v-data-table>

          <!-- Row Selection + Hover Data Table -->
          <h3 class="title">Row Selection + Hover</h3>
          <v-data-table :rows="rows3" :columns="columns" :hover="true" :selection="true" selection-key="selected" @selected="rows = $event"></v-data-table>

          <!-- Striped Data Table -->
          <h3 class="title">Striped + Editable Fields</h3>
          <v-data-table :rows="rows4" :columns="columnsEditable" :striped="true"></v-data-table>

          <!-- Basic Dropdown -->
          <h3 class="title">Responsive</h3>
          <v-data-table :rows="rows5" :columns="columns" :responsive="true"></v-data-table>

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
        rows1: [{
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

        rows2: [{
          name: 'Arya',
          house: 'Stark',
          sigil: 'Wolf',
          age: 11
        }, {
          name: 'Stannis',
          house: 'Baratheon',
          sigil: 'Flaming Stag',
          age: 40
        }, {
          name: 'Jamie',
          house: 'Lannister',
          sigil: 'Lion',
          age: 36
        }, {
          name: 'Brienne',
          house: 'Tarth',
          sigil: 'Sun',
          age: 32
        }, {
          name: 'Sandor',
          house: 'Clegane',
          sigil: 'Dog',
          age: 35
        }],

        rows3: [{
          name: 'Bran',
          house: 'Stark',
          sigil: 'Wolf',
          age: 10
        }, {
          name: 'Barristan',
          house: 'Selmy',
          sigil: 'Wheat',
          age: 60
        }, {
          name: 'Walder',
          house: 'Frey',
          sigil: 'The Twins',
          age: 89
        }, {
          name: 'Jojen',
          house: 'Reed',
          sigil: 'Lizard-Lion',
          age: 12
        }, {
          name: 'Loras',
          house: 'Tyrell',
          sigil: 'Rose',
          age: 23
        }],

        rows4: [{
          name: 'Sansa',
          house: 'Stark',
          sigil: 'Wolf',
          age: 13
        }, {
          name: 'Robert',
          house: 'Baratheon',
          sigil: 'Stag',
          age: 42
        }, {
          name: 'Cersei',
          house: 'Lannister',
          sigil: 'Lion',
          age: 36
        }, {
          name: 'Margaery',
          house: 'Tyrell',
          sigil: 'Rose',
          age: 18
        }, {
          name: 'Gregor',
          house: 'Clegane',
          sigil: 'Dog',
          age: 40
        }],

        rows5: [{
          name: 'Eddard',
          house: 'Stark',
          sigil: 'Wolf',
          age: 41
        }, {
          name: 'Davos',
          house: 'Seaworth',
          sigil: 'Onion',
          age: 42
        }, {
          name: 'Samwel',
          house: 'Tarly',
          sigil: 'Huntsman',
          age: 17
        }, {
          name: 'Lysa',
          house: 'Tully',
          sigil: 'Fish',
          age: 18
        }, {
          name: 'Viserys',
          house: 'Targaryen',
          sigil: 'Dragon',
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
          options: ['Wolf', 'Stag', 'Lion', 'Rose', 'Dog']
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
