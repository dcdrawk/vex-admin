<template>
  <div class="row page-content">

    <!--Select Demo-->
    <v-card title="Dropdowns" class="col-xs-12">
      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Dropdown -->
          <h3 class="title">Basic Dropdown</h3>
          <v-icon-button ref="button1" icon="more_vert" @click="open1 = !open1"></v-icon-button>
          <v-dropdown :open="open1" :target="$els.button1">
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
          <v-icon-button ref="button2" icon="more_vert" @click="open2 = !open2"></v-icon-button>
          <v-dropdown :open="open2" :target="$els.button2" position="right">
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
        dropdownMarkup: `<!-- Basic Dropdown -->
<h3 class="title">Basic Dropdown</h3>
<v-icon-button ref="button1" icon="more_vert" @click="open1 = !open1"></v-icon-button>
<v-dropdown :open="open1" :target="$els.button1">
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
<v-icon-button ref="button2" icon="more_vert" @click="open2 = !open2"></v-icon-button>
<v-dropdown :open="open2" :target="$els.button2" position="right">
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
