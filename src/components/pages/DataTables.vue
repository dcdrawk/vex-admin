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
          <h3 class="title">Search Filter + Border</h3>
          <v-search-bar ref="search" placeholder="Search" :value="searchText" key="name"></v-search-bar>
          <v-data-table :rows="rows" :columns="columns" :border="true" :filter="$refs.search.value" ></v-data-table>

          <!-- Row Selection + Hover Data Table -->
          <h3 class="title">Row Selection + Hover</h3>
          <v-data-table :rows="rows" :columns="columns" :hover="true" :selection="true" selection-key="selected"></v-data-table>

          <!-- Striped Data Table -->
          <h3 class="title">Striped + Editable Fields</h3>
          <v-data-table :rows="rows" :columns="columnsEditable" :striped="true"></v-data-table>

          <!-- Basic Dropdown -->
          <h3 class="title">Responsive</h3>
          <v-data-table :rows="rows" :columns="columns" :responsive="true"></v-data-table>

        </div>
        <div slot="template">
          <pre><code class="language-html">{{ dropdownMarkup }}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{ dropdownScript }}</code></pre>
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
    ready () {
      // Syntax Highlighting
      Prism.highlightAll();
    },
    // Data
    data () {
      return {
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
        }],
        dropdownMarkup: `<!-- Basic Dropdown -->
                <h3 class="title">Basic Dropdown</h3>
                <v-icon-button v-el:button1 icon="more_vert" @click="open1 = !open1"></v-icon-button>
                <v-dropdown :open.sync="open1" :target="$els.button1">
                <v-list>
                <v-list-item text="Preview" icon="remove_red_eye"></v-list-item>
                <v-list-item text="Share" icon="person_add"></v-list-item>
                <v-list-item text="Get link" icon="link"></v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                <v-list-item text="Make a copy" icon="content_copy"></v-list-item>
                <v-list-item text="Download" icon="file_download"></v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                <v-list-item text="Remove" icon="delete"></v-list-item>
                </v-list>
                </v-dropdown>

                <!-- Right Positioned Dropdown -->
                <h3 class="title">Right Positioned Dropdown</h3>
                <v-icon-button v-el:button2 icon="more_vert" @click="open2 = !open2"></v-icon-button>
                <v-dropdown :open.sync="open2" :target="$els.button2" position="right">
                <v-list>
                <v-list-item text="Preview" icon="remove_red_eye"></v-list-item>
                <v-list-item text="Share" icon="person_add"></v-list-item>
                <v-list-item text="Get link" icon="link"></v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                <v-list-item text="Make a copy" icon="content_copy"></v-list-item>
                <v-list-item text="Download" icon="file_download"></v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                <v-list-item text="Remove" icon="delete"></v-list-item>
                </v-list>
                </v-dropdown>`,
        dropdownScript: `import VIconButton from '../vex/IconButton.vue';
              import VDropdown from '../vex/Dropdown.vue';
              import VList from '../vex/List.vue';
              import VListItem from '../vex/ListItem.vue';
              import VDivider from '../vex/Divider.vue';

              export default {
              // Components
              components: {
              VIconButton,
              VDropdown,
              VList,
              VListItem,
              VDivider
              },

              // Data
              data () {
              return {
              open1: false,
              open2: false
              }
              }
              }`
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  //Import or add any styles here
</style>
