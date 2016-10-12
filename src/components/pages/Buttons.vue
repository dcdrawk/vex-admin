<template>
  <div class="row page-content">
    <v-card title="Flat / Raised Buttons" class="col-xs-12" @click="test()">
      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Flat Buttons -->
          <h3 class="title">Flat Buttons</h3>
          <v-button>Button</v-button>
          <v-button :primary="true">Button</v-button>
          <v-button :secondary="true">Button</v-button>

          <!-- Raised Buttons -->
          <h3 class="title">Raised Buttons</h3>
          <v-button :raised="true">Button</v-button>
          <v-button :raised="true" :primary="true">Button</v-button>
          <v-button :raised="true" :secondary="true">Button</v-button>
        </div>
        <div slot="template">
          <pre><code class="language-html">{{buttonMarkup}}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{buttonScript}}</code></pre>
        </div>
      </v-tabs>
    </v-card>


    <v-card title="Icon Buttons" class="col-xs-12">

      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Flat Icon Buttons -->
          <h3 class="title">Flat Buttons</h3>
          <v-icon-button icon="phone"></v-icon-button>
          <v-icon-button icon="notifications" :primary="true"></v-icon-button>
          <v-icon-button icon="person" :secondary="true"></v-icon-button>

          <!-- Raised Icon Buttons -->
          <h3 class="title"></h3>
          <v-icon-button icon="phone" :raised="true"></v-icon-button>
          <v-icon-button icon="notifications" :raised="true" :primary="true"></v-icon-button>
          <v-icon-button icon="person" :raised="true" :secondary="true"></v-icon-button>
        </div>

        <div slot="template">
          <pre><code class="language-html">{{iconButtonMarkup}}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{iconButtonScript}}</code></pre>
        </div>
      </v-tabs>
    </v-card>
  </div>

</template>

<script>
  import VCard from '../vex/Card.vue';
  import VButton from '../vex/Button.vue';
  import VIconButton from '../vex/IconButton.vue';
  import VTabs from '../vex/VTabs.vue';
  import Prism from 'prismjs';
  import VueRouter from 'vue-router';

  export default {
    components: {
      VCard,
      VButton,
      VIconButton,
      VTabs
    },
    mounted () {
      this.showTabs = true;

      // Syntax Highlighting
      Prism.highlightAll();
    },

    methods: {
      test () {
        console.log('test');
      }
    },
    data () {
      return {
        buttonMarkup: `<!-- Flat Buttons -->
<h3 class="title">Flat Buttons</h3>
<v-button>Button</v-button>
<v-button :primary="true">Button</v-button>
<v-button :secondary="true">Button</v-button>

<!-- Raised Buttons -->
<h3 class="title">Raised Buttons</h3>
<v-button :raised="true">Button</v-button>
<v-button :raised="true" :primary="true">Button</v-button>
<v-button :raised="true" :secondary="true">Button</v-button>`,
        buttonScript: `import VButton from '../vex/Button.vue';

export default {
  components: {
    VButton
  }
}
`,


        iconButtonMarkup: `<!-- Flat Icon Buttons -->
<h3 class="title">Flat Buttons</h3>
<v-icon-button icon="person"></v-icon-button>
<v-icon-button icon="person" :primary="true"></v-icon-button>
<v-icon-button icon="person" :secondary="true"></v-icon-button>

<!-- Raised Icon Buttons -->
<h3 class="title"></h3>
<v-icon-button icon="person" :raised="true"></v-icon-button>
<v-icon-button icon="person" :raised="true" :primary="true"></v-icon-button>
<v-icon-button icon="person" :raised="true" :secondary="true"></v-icon-button>`,
        iconButtonScript: `import VIconButton from '../vex/IconButton.vue';

export default {
  components: {
    VIconButton
  }
}
`,


      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>
