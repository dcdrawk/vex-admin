<template>
  <div class="doc-page">
    <v-tabs default-tab="result" :primary="true" class="demo-tabs page-tabs">
      <div slot="result">
        <section class="padding">
          <div class="row">

            <!-- Basic Card -->
            <div class="col-xs-3">
            <h3 class="title">Basic Card</h3>
              <v-card title="Card Title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis, odio et imperdiet condimentum, tellus erat cursus neque, vel tempor dolor libero id quam. Vestibulum venenatis risus eu diam lacinia ultrices.
              </v-card>
            </div>

            <!-- Card with Subtitle -->
            <div class="col-xs-3">
              <h3 class="title">Card with Subtitle</h3>
              <v-card title="Card Title" subtitle="Here is the Subtitle">
                Duis at varius leo. Praesent ultrices quam sit amet ligula porta, at mollis elit maximus. Aliquam quis tellus et ipsum venenatis luctus. Vivamus molestie feugiat porttitor.
              </v-card>
            </div>

            <!-- Card with Actions -->
            <div class="col-xs-3">
              <h3 class="title">Card with Actions</h3>
              <v-card title="Card Title">
                Quisque hendrerit sodales ultricies. Nam pretium, augue vel efficitur consequat, lacus neque aliquam urna, ac volutpat elit leo ac ante. Sed vel felis id mi aliquam feugiat quis eget enim. Pellentesque tempor sodales commodo.
                <div slot="actions">
                  <v-button primary="true">Action 1</v-button>
                  <v-button primary="true">Action 2</v-button>
                </div>
              </v-card>
            </div>

            <!-- Card with Media -->
            <div class="col-xs-3">
              <h3 class="title">Card with Media</h3>
              <v-card title="Card Title" media="http://placehold.it/640x360">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate est egestas augue consequat, sit amet tincidunt libero egestas. Maecenas tincidunt mi eu quam dapibus tempus. Morbi iaculis felis vitae leo pellentesque condimentum sit amet vel urna. Suspendisse placerat in mi nec facilisis. Curabitur at leo arcu.
              </v-card>
            </div>
          </div>
        </section>
      </div>
      <div slot="template">
        <pre><code class="language-html">{{ cardMarkup }}</code></pre>
      </div>
      <div slot="script">
        <pre><code class="language-javascript">{{ cardScript }}</code></pre>
      </div>
    </v-tabs>
  </div>
</template>

<script>
  // Imports
  import VCard from '../vex/Card.vue';
  import VButton from '../vex/Button.vue';
  import VTabs from '../vex/VTabs.vue';
  import Prism from 'prismjs';
  import Toolbar from '../vex/Toolbar.vue';
  // Exports
  export default {

    // Components
    components: {
      VCard,
      VButton,
      VTabs,
      Toolbar
    },
    mounted () {
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
