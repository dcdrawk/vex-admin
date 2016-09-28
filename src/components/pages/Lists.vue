<template>
  <div class="row page-content">
    <!--Title-->
    <h1 class="col-md-12 display-1">Lists</h1>
    <v-card title="Lists and List Items" class="col-md-12">

      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic List -->
          <h3 class="title">Basic List</h3>
          <v-list>
            <v-list-item text="List Item 1"></v-list-item>
            <v-list-item text="List Item 2"></v-list-item>
            <v-list-item text="List Item 3"></v-list-item>
          </v-list>

          <!-- Dense List -->
          <h3 class="title">Dense List</h3>
          <v-list dense="true">
            <v-list-item text="List Item 1"></v-list-item>
            <v-list-item text="List Item 2"></v-list-item>
            <v-list-item text="List Item 3"></v-list-item>
          </v-list>

          <!-- List with Icon -->
          <h3 class="title">List with Icon</h3>
          <v-list>
            <v-list-item icon="person" text="List Item 1"></v-list-item>
            <v-list-item icon="person" text="List Item 2"></v-list-item>
            <v-list-item icon="person" text="List Item 3"></v-list-item>
          </v-list>

          <!-- List with Secondary Text -->
          <h3 class="title">List with Secondary Text</h3>
          <v-list>
            <v-list-item text="List Item 1" secondary-text="Secondary Text"></v-list-item>
            <v-list-item text="List Item 2" secondary-text="Secondary Text"></v-list-item>
            <v-list-item text="List Item 3" secondary-text="Secondary Text"></v-list-item>
          </v-list>

          <!-- List with Avatar -->
          <h3 class="title">List with Avatar</h3>
          <v-list>
            <v-list-item icon="person" text="List Item 1" :avatar="true"></v-list-item>
            <v-list-item icon="person" text="List Item 2" :avatar="true"></v-list-item>
            <v-list-item icon="person" text="List Item 3" :avatar="true"></v-list-item>
          </v-list>

        </div>
        <div slot="template">
          <pre><code class="language-html">{{ listMarkup }}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{ listScript }}</code></pre>
        </div>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
  import VCard from '../vex/Card.vue';
  import VButton from '../vex/Button.vue';
  import VIconButton from '../vex/IconButton.vue';
  import VList from '../vex/List.vue';
  import VListItem from '../vex/ListItem.vue';
  import VTabs from '../vex/VTabs.vue';
  import Prism from 'prismjs';

  export default {
    components: {
      VCard,
      VList,
      VListItem,
      VTabs,
    },
    ready () {
      // Syntax Highlighting
      Prism.highlightAll();
    },
    data () {
      return {
        listMarkup:
`<!-- Basic List -->
<h3 class="title">Basic List</h3>
<v-list>
  <v-list-item text="List Item 1"></v-list-item>
  <v-list-item text="List Item 2"></v-list-item>
  <v-list-item text="List Item 3"></v-list-item>
</v-list>

<!-- Dense List -->
<h3 class="title">Dense List</h3>
<v-list dense="true">
  <v-list-item text="List Item 1"></v-list-item>
  <v-list-item text="List Item 2"></v-list-item>
  <v-list-item text="List Item 3"></v-list-item>
</v-list>

<!-- List with Icon -->
<h3 class="title">List with Icon</h3>
<v-list>
  <v-list-item icon="person" text="List Item 1"></v-list-item>
  <v-list-item icon="person" text="List Item 2"></v-list-item>
  <v-list-item icon="person" text="List Item 3"></v-list-item>
</v-list>

<!-- List with Secondary Text -->
<h3 class="title">List with Secondary Text</h3>
<v-list>
  <v-list-item text="List Item 1" secondary-text="Secondary Text"></v-list-item>
  <v-list-item text="List Item 2" secondary-text="Secondary Text"></v-list-item>
  <v-list-item text="List Item 3" secondary-text="Secondary Text"></v-list-item>
</v-list>

<!-- List with Avatar -->
<h3 class="title">List with Avatar</h3>
<v-list>
  <v-list-item icon="person" text="List Item 1" :avatar="true"></v-list-item>
  <v-list-item icon="person" text="List Item 2" :avatar="true"></v-list-item>
  <v-list-item icon="person" text="List Item 3" :avatar="true"></v-list-item>
</v-list>`,
        listScript:
`import VList from '../vex/List.vue';
import VListItem from '../vex/ListItem.vue';

export default {
  components: {
    VList,
    VListItem
  }
}`
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>
