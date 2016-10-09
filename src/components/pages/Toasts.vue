<template>
  <div class="row page-content">

    <!--Card Content-->
    <v-card title="Toasts" class="col-xs-12">

      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Toast -->
          <h3 class="title">Basic Toast</h3>
          <v-button @click="toggleToast('basic')">show basic toast</v-button>
          <v-toast :toggle.sync="showToast.basic" text="Simple Toast"></v-toast>

          <!-- Toast with Action -->
          <h3 class="title">Toast With Action</h3>
          <v-button @click="toggleToast('action')">Toast with Action</v-button>
          <v-toast :toggle.sync="showToast.action" text="Toast with Action" action-text="undo" :action="undoAction"></v-toast>

        </div>
        <div slot="template">
          <pre><code class="language-html">{{ toastMarkup }}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{ toastScript }}</code></pre>
        </div>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
  // Imports
  import VCard from '../vex/Card.vue';
  import VToast from '../vex/Toast.vue';
  import VButton from '../vex/Button.vue';
  import VTabs from '../vex/VTabs.vue';
  import Prism from 'prismjs';

  // Exports
  export default {

    // Components
    components: {
      VCard,
      VToast,
      VButton,
      VTabs,
    },
    mounted () {
      // Syntax Highlighting
      Prism.highlightAll();
    },
    methods: {
      toggleToast (toast) {
        this.showToast[toast] = true;
      },

      undoAction () {
        window.alert('You Clicked Undo');
      }
    },
    // Data
    data () {
      return {
        showToast: {
          basic: false,
          action: false
        },

        toastMarkup: `<!-- Basic Toast -->
<h3 class="title">Basic Toast</h3>
<v-button @click="toggleToast('basic')">show basic toast</v-button>
<v-toast :toggle.sync="showToast.basic" text="Simple Toast"></v-toast>

<!-- Toast with Action -->
<h3 class="title">Basic Toast</h3>
<v-button @click="toggleToast('action')">Toast with Action</v-button>
<v-toast :toggle.sync="showToast.action" text="Toast with Action" action-text="undo" :action="undoAction"></v-toast>`,
        toastScript:
`import VToast from '../vex/Toast.vue';

export default {
  components: {
    VToast
  },

  data () {
    return {
      showToast: {
        basic: false,
        action: false
      }
    }
  },

  methods {
    toggleToast (toast) {
      this.showToast[toast] = true;
    },

    undoAction () {
      window.alert('You Clicked Undo');
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
