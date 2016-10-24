<template>
  <div class="doc-page">

    <!--Select Demo-->
    <v-card title="Dropdowns" class="col-xs-12">
      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result" v-cloak>

          <!-- Basic Dropdown -->
          <h3 class="title">Basic Dropdown</h3>

          <v-dropdown-menu :open="open1"  @toggle="open1 = false">
            <div slot="target">
              <v-icon-button  ref="test" icon="more_vert" @click.native="open1 = true"></v-icon-button>
            </div>
            <div slot="menu">
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
            </div>
          </v-dropdown-menu>

          <!-- Right Positioned Dropdown -->
          <h3 class="title">Right Positioned Dropdown</h3>

          <v-dropdown-menu :open="open2" @toggle="open2 = false" position="right">
            <v-icon-button style="position: relative; left: 250px;" slot="target" ref="test" icon="more_vert" @click.native="open2 = !open2"></v-icon-button>
            <div slot="menu">
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
            </div>
          </v-dropdown-menu>

          <!-- Looped Dropdown -->
          <h3 class="title">v-for with Dropdown</h3>

          <v-dropdown-menu :open="item.open"  @toggle="item.open = false" v-for="(item, index) in openArray">
            <div slot="target">
              <v-icon-button  ref="test" icon="more_vert" @click.native="item.open = true"></v-icon-button>
            </div>
            <div slot="menu">
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
            </div>
          </v-dropdown-menu>

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
  import VDropdownMenu from '../vex/Dropdown.vue';
  import VList from '../vex/List.vue';
  import VListItem from '../vex/ListItem.vue';
  import VDivider from '../vex/Divider.vue';
  import VTabs from '../vex/VTabs.vue';

  import Prism from 'prismjs';

  // Exports
  export default {

    // Components
    components: {
      VCard,
      VDropdownMenu,
      VTabs,
      VList,
      VListItem,
      VDivider,
      VIconButton
    },
    mounted () {
      // Syntax Highlighting
      Prism.highlightAll();
    },

    // Data
    data () {
      return {
        open1: false,
        open2: false,
        openArray: [{
          open: false
        }, {
          open: false
        }],
        dropdownMarkup: `<!-- Basic Dropdown -->
<h3 class="title">Basic Dropdown</h3>

<v-dropdown-menu :open="open1"  @toggle="open1 = false">
  <div slot="target">
    <v-icon-button  ref="test" icon="more_vert" @click.native="open1 = true"></v-icon-button>
  </div>
  <div slot="menu">
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
  </div>
</v-dropdown-menu>

<!-- Right Positioned Dropdown -->
<h3 class="title">Right Positioned Dropdown</h3>

<v-dropdown-menu :open="open2" @toggle="open2 = false" position="right">
  <v-icon-button style="position: relative; left: 250px;" slot="target" ref="test" icon="more_vert" @click.native="open2 = !open2"></v-icon-button>
  <div slot="menu">
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
  </div>
</v-dropdown-menu>

<!-- Looped Dropdown -->
<h3 class="title">v-for with Dropdown</h3>

<v-dropdown-menu :open="item.open"  @toggle="item.open = false" v-for="(item, index) in openArray">
  <div slot="target">
    <v-icon-button  ref="test" icon="more_vert" @click.native="item.open = true"></v-icon-button>
  </div>
  <div slot="menu">
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
  </div>
</v-dropdown-menu>`,
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
      open2: false,
      openArray: [{
        open: false
      }, {
        open: false
      }],
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
