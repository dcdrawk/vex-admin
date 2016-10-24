s<template>
  <div class="doc-page">

    <!--Card Content-->
    <!--<v-card title="Dividers" class="col-xs-12">-->

      <v-tabs default-tab="result" :primary="true" class="demo-tabs page-tabs">
        <div slot="result" class="padding">

          <!-- Basic Divider -->
          <h3 class="title">Basic Divider</h3>
          <v-divider></v-divider>

          <!-- Divider in List -->
          <h3 class="title">Divider in a List</h3>
          <v-list>
            <v-list-item text="List Item 1"></v-list-item>
            <v-list-item text="List Item 2"></v-list-item>
            <v-list-item text="List Item 3"></v-list-item>
            <v-divider></v-divider>
            <v-list-item text="List Item 4"></v-list-item>
            <v-list-item text="List Item 5"></v-list-item>
            <v-list-item text="List Item 6"></v-list-item>
          </v-list>

        </div>
        <div slot="template">
          <pre><code class="language-html">{{ dividerMarkup }}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{ dividerScript }}</code></pre>
        </div>
      </v-tabs>
    <!--</v-card>-->
  </div>
</template>

<script>
  // Imports
  import VCard from '../vex/Card.vue';
  import VTabs from '../vex/VTabs.vue';
  import VDivider from '../vex/Divider.vue';
  import VList from '../vex/List.vue';
  import VListItem from '../vex/ListItem.vue';
  import Prism from 'prismjs';

  // Exports
  export default {

    // Components
    components: {
      VCard,
      VTabs,
      VDivider,
      VList,
      VListItem
    },
    mounted () {
      // Syntax Highlighting
      Prism.highlightAll();
    },
    // Data
    data () {
      return {
        dividerMarkup: `<!-- Basic Divider -->
<h3 class="title">Basic Divider</h3>
<v-divider></v-divider>

<!-- Divider in List -->
<h3 class="title">Divider in a List</h3>
<v-list>
  <v-list-item text="List Item 1"></v-list-item>
  <v-list-item text="List Item 2"></v-list-item>
  <v-list-item text="List Item 3"></v-list-item>
  <v-divider></v-divider>
  <v-list-item text="List Item 4"></v-list-item>
  <v-list-item text="List Item 5"></v-list-item>
  <v-list-item text="List Item 6"></v-list-item>
</v-list>`,
        dividerScript:
`import VDivider from '../vex/Divider.vue';
import VList from '../vex/List.vue';
import VListItem from '../vex/ListItem.vue';

export default {
  components: {
    VDivider,
    VList,
    VListItem
  }  
}`,
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
//Import or add any styles here
</style>
