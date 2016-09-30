<template>
  <div class="row page-content">
    <!--Title-->
    <h1 class="col-xs-12 display-1">Chips</h1>

    <!--Card Content-->
    <v-card title="Chips" class="col-xs-12">

      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Chips -->
          <h3 class="title">Basic Chips</h3>
          <v-button @click="showDialog = !showDialog">Toggle Dialog</v-button>

          <v-dialog :show.sync="showDialog" title="Dialog Title">
            Test
          </v-dialog>
          <!--<v-chips :chips="basicChips" placeholder="+add a chip"></v-chips>-->
          
        </div>
        <div slot="template">
          <!--<pre><code class="language-html">{{ chipMarkup }}</code></pre>-->
        </div>
        <div slot="script">
          <!--<pre><code class="language-javascript">{{ chipScript }}</code></pre>-->
        </div>
      </v-tabs>
    </v-card>

  </div>
</template>

<script>
  // Imports
  import VCard from '../vex/Card.vue';
  import VTabs from '../vex/VTabs.vue';
  import VDialog from '../vex/Dialog.vue';
  import VButton from '../vex/Button.vue';
  import Prism from 'prismjs';

  // Exports
  export default {

    // Components
    components: {
      VCard,
      VDialog,
      VTabs,
      VButton
    },

    ready () {
      // Syntax Highlighting
      Prism.highlightAll();
    },

    // Data
    data () {
      return {
        showDialog: false,
        readOnlyChips: ['Chip 1', 'Chip 2', 'Chip 3'],
        chipMarkup: `<!-- Basic Chips -->
                <h3 class="title">Basic Chips</h3>
                <v-chips :chips="basicChips" placeholder="+add a chip"></v-chips>

                <!-- Read-only Chips -->
                <h3 class="title">Read-only Chips</h3>
                <v-chips :chips="readOnlyChips" placeholder="+add a chip" :read-only="true"></v-chips>`,
        chipScript:
`import VChips from '../vex/VChips.vue';

export default {
  components: {
    VChips
  },

  data () {
    return {
      basicChips: ['Chip 1', 'Chip 2', 'Chip 3'],
      readOnlyChips: ['Chip 1', 'Chip 2', 'Chip 3'],
    }
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
