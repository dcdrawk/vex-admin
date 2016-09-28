<template>
  <div class="row page-content">
    <!--Title-->
    <h1 class="col-xs-12 display-1">Tabs</h1>

    <!--Card Content-->
    <v-card title="Tabs" class="col-xs-12">
      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Tabs -->
          <h3 class="title">Basic Tabs</h3>
          <v-tabs default-tab="Item One" v-if="showTabs">
            <div slot="Item One">
              First Tab
            </div>
            <div slot="Item Two">
              Second Tab
            </div>
            <div slot="Item Three">
              Third Tab
            </div>
          </v-tabs>

          <!-- Primary Colored Tabs -->
          <h3 class="title">Primary Tabs + Icon</h3>
          <v-tabs default-tab="Item One" v-if="showTabs" :primary="true" :icons="true">
            <div slot="Item One" icon="phone">
              First Tab
            </div>
            <div slot="Item Two" icon="notifications">
              Second Tab
            </div>
            <div slot="Item Three" icon="person">
              Third Tab
            </div>
          </v-tabs>

          <!-- Secondary Colored Tabs -->
          <h3 class="title">Secondary Tabs</h3>

          <v-tabs default-tab="Item One" v-if="showTabs" :secondary="true" :icons="true" :icons-only="true" v-cloak>
            <div slot="Item One" icon="phone">
              First Tab
            </div>
            <div slot="Item Two" icon="notifications">
              Second Tab
            </div>
            <div slot="Item Three" icon="person">
              Third Tab
            </div>
          </v-tabs>
        </div>
        <div slot="template">
          <pre><code class="language-html">{{tabMarkup}}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{tabScript}}</code></pre>
        </div>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
  // Imports
  import VCard from '../vex/Card.vue';
  import VTabs from '../vex/VTabs.vue';
  import Prism from 'prismjs';
  // Exports
  export default {

    // Components
    components: {
      VCard,
      VTabs
    },

    ready () {
      this.showTabs = true;

      // Syntax Highlighting
      Prism.highlightAll();
    },

    // Data
    data () {
      return {
        focused: false,
        showTabs: false,
        tabMarkup: `<!-- Basic Tabs -->
<h3 class="title">Basic Tabs</h3>
<v-tabs default-tab="Item One" v-if="showTabs">
  <div slot="Item One">
    First Tab
  </div>
  <div slot="Item Two">
    Second Tab
  </div>
  <div slot="Item Three">
    Third Tab
  </div>
</v-tabs>

<!-- Primary Colored Tabs -->
<h3 class="title">Primary Tabs + Icon</h3>
<v-tabs default-tab="Item One" v-if="showTabs" :primary="true" :icons="true">
  <div slot="Item One" icon="phone">
    First Tab
  </div>
  <div slot="Item Two" icon="notifications">
    Second Tab
  </div>
  <div slot="Item Three" icon="person">
    Third Tab
  </div>
</v-tabs>

<!-- Secondary Colored Tabs -->
<h3 class="title">Secondary Tabs</h3>

<v-tabs default-tab="Item One" v-if="showTabs" :secondary="true" :icons="true" :icons-only="true" v-cloak>
  <div slot="Item One" icon="phone">
    First Tab
  </div>
  <div slot="Item Two" icon="notifications">
    Second Tab
  </div>
  <div slot="Item Three" icon="person">
    Third Tab
  </div>
</v-tabs>`,
        tabScript: `import VTabs from '../vex/VTabs.vue';

export default {
  components: {
    VTabs
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
