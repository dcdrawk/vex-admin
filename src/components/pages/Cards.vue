<template>
  <div class="row page-content">
    <!--Title-->
    <h1 class="col-xs-12 display-1">Cards</h1>


    <v-card title="Cards" class="col-md-12">

      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Card -->
          <h3 class="title">Basic Card</h3>
          <v-card title="Card Title">
            Supporting Text Goes Here
          </v-card>

          <!-- Card with Subtitle -->
          <h3 class="title">Card with Subtitle</h3>
          <v-card title="Card Title" subtitle="Here is the Subtitle">
            Supporting Text Goes Here
          </v-card>

          <!-- Card with Actions -->
          <h3 class="title">Card with Actions</h3>
          <v-card title="Card Title">
            Supporting Text Goes Here
            <div slot="actions">
              <v-button primary="true">Action 1</v-button>
              <v-button primary="true">Action 2</v-button>
            </div>
          </v-card>

          <!-- Card with Media -->
          <h3 class="title">Card with Media</h3>
          <v-card title="Card Title" media="http://placehold.it/640x360">
            I know, the image is a bit large on desktop...
          </v-card>

        </div>
        <div slot="template">
          <pre><code class="language-html">{{ cardMarkup }}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{ cardScript }}</code></pre>
        </div>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
  // Imports
  import VCard from '../vex/Card.vue';
  import VButton from '../vex/Button.vue';
  import VTabs from '../vex/VTabs.vue';
  import Prism from 'prismjs';
  // Exports
  export default {

    // Components
    components: {
      VCard,
      VButton,
      VTabs
    },
    ready () {
      // Syntax Highlighting
      Prism.highlightAll();
    },
    methods: {
      testAlert(ev) {
        console.log('test');
      }
    },
    // Data
    data () {
      return {
        cardMarkup: `<!-- Basic Card -->
<h3 class="title">Basic Card</h3>
<v-card title="Card Title">
  Supporting Text Goes Here
</v-card>

<!-- Card with Subtitle -->
<h3 class="title">Card with Subtitle</h3>
<v-card title="Card Title" subtitle="Here is the Subtitle">
  Supporting Text Goes Here
</v-card>

<!-- Card with Actions -->
<h3 class="title">Card with Actions</h3>
<v-card title="Card Title">
  Supporting Text Goes Here
  <div slot="actions">
    <v-button primary="true">Action 1</v-button>
    <v-button primary="true">Action 2</v-button>
  </div>
</v-card>

<!-- Card with Media -->
<h3 class="title">Card with Media</h3>
<v-card title="Card Title" media="http://placehold.it/640x360">
  I know, the image is a bit large on desktop...
</v-card>`,
        cardScript:
`import VCard from '../vex/Card.vue';
import VButton from '../vex/Button.vue';

export default {
  components: {
    VCard,
    VButton
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
