<template>
  <div class="row page-content">

    <!--Card Content-->
    <v-card title="Dialogs" class="col-xs-12">

      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Small Dialog -->
          <h3 class="title">Small Dialog</h3>
          <v-button @click.native="showDialog.small = !showDialog.small">Show Small Dialog</v-button>

          <v-dialog :show="showDialog.small" @hide="showDialog.small = false" title="Small Dialog" :small="true">
            <p>Confirm you opened the dialog</p>
            <div slot="actions">
              <v-button @click.native="showDialog.small = false">Cancel</v-button>
              <v-button @click.native="showAlert('you clicked confirm', 'small')">Confirm</v-button>
            </div>
          </v-dialog>

          <!-- Medium Dialog -->
          <h3 class="title">Medium Dialog</h3>
          <v-button @click.native="showDialog.medium = !showDialog.medium">Show Medium Dialog</v-button>

          <v-dialog :show="showDialog.medium" @hide="showDialog.medium = false" title="Medium Dialog" :medium="true">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat varius nulla. Aenean sit amet facilisis ante, bibendum volutpat diam. Donec quis lorem urna. Duis luctus convallis posuere. Aliquam venenatis odio sodales facilisis ullamcorper. In ut tincidunt mi. Nam eleifend, dui vel porta porttitor, dolor purus malesuada nibh, et rhoncus turpis tortor vitae risus. Duis nec arcu sem. Vivamus aliquet dictum turpis eu pharetra. Phasellus tempor sem ut metus porta, in blandit lorem pellentesque.</p>
            <div slot="actions">
              <v-button @click.native="showDialog.medium = false">Cancel</v-button>
              <v-button @click.native="showAlert('you clicked confirm', 'medium');">Confirm</v-button>
            </div>
          </v-dialog>

          <!-- Large Dialog -->
          <h3 class="title">Large Dialog</h3>
          <v-button @click.native="showDialog.large = !showDialog.large">Show Large Dialog</v-button>

          <v-dialog :show="showDialog.large" @hide="showDialog.large = false" title="Large Dialog" :large="true">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat varius nulla. Aenean sit amet facilisis ante, bibendum volutpat diam. Donec quis lorem urna. Duis luctus convallis posuere. Aliquam venenatis odio sodales facilisis ullamcorper. In ut tincidunt mi. Nam eleifend, dui vel porta porttitor, dolor purus malesuada nibh, et rhoncus turpis tortor vitae risus. Duis nec arcu sem. Vivamus aliquet dictum turpis eu pharetra. Phasellus tempor sem ut metus porta, in blandit lorem pellentesque.</p>
            <p>Proin finibus aliquam ante, id convallis lectus aliquam ut. Ut porttitor felis sed vestibulum volutpat. In a tristique odio. Praesent velit leo, finibus in eleifend sed, faucibus a justo. Pellentesque cursus ultrices sem vitae ultricies. Maecenas porta accumsan accumsan. In congue dignissim eros vel fermentum. Curabitur nibh nunc, feugiat quis leo non, eleifend euismod nulla. Aenean pretium eu diam auctor viverra.</p>
            <p>Vivamus eu odio gravida, tincidunt nulla et, interdum augue. Aenean in risus ut lectus pretium semper. Aliquam erat volutpat. Fusce dapibus rutrum justo et suscipit. Quisque nec tempus eros, id sollicitudin augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus tellus eu commodo suscipit. Duis eget turpis erat. Ut dui velit, scelerisque id efficitur at, aliquam non erat. Aenean scelerisque faucibus cursus.</p>
            <div slot="actions">
              <v-button @click.native="showDialog.large = false" :primary="true">Cancel</v-button>
              <v-button @click.native="showAlert('you clicked confirm', 'large');" :primary="true">Confirm</v-button>
            </div>
          </v-dialog>


        </div>
        <div slot="template">
          <pre><code class="language-html">{{ dialogMarkup }}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{ dialogScript }}</code></pre>
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

    mounted () {
      // Syntax Highlighting
      Prism.highlightAll();
    },

    methods: {
      showAlert (alert, size) {
        window.alert(alert);
        this.showDialog[size] = false;
      }
    },

    // Data
    data () {
      return {
        showDialog: {
          small: false,
          medium: false,
          large: false,
        },
        dialogMarkup: `<!-- Small Dialog -->
<h3 class="title">Small Dialog</h3>
<v-button @click.native="showDialog.small = !showDialog.small">Show Small Dialog</v-button>

<v-dialog :show="showDialog.small" @hide="showDialog.small = false" title="Small Dialog" :small="true">
  <p>Confirm you opened the dialog</p>
  <div slot="actions">
    <v-button @click.native="showDialog.small = false">Cancel</v-button>
    <v-button @click.native="showAlert('you clicked confirm', 'small')">Confirm</v-button>
  </div>
</v-dialog>

<!-- Medium Dialog -->
<h3 class="title">Medium Dialog</h3>
<v-button @click.native="showDialog.medium = !showDialog.medium">Show Medium Dialog</v-button>

<v-dialog :show="showDialog.medium" @hide="showDialog.medium = false" title="Medium Dialog" :medium="true">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat varius nulla. Aenean sit amet facilisis ante, bibendum volutpat diam. Donec quis lorem urna. Duis luctus convallis posuere. Aliquam venenatis odio sodales facilisis ullamcorper. In ut tincidunt mi. Nam eleifend, dui vel porta porttitor, dolor purus malesuada nibh, et rhoncus turpis tortor vitae risus. Duis nec arcu sem. Vivamus aliquet dictum turpis eu pharetra. Phasellus tempor sem ut metus porta, in blandit lorem pellentesque.</p>
  <div slot="actions">
    <v-button @click.native="showDialog.medium = false">Cancel</v-button>
    <v-button @click.native="showAlert('you clicked confirm', 'medium');">Confirm</v-button>
  </div>
</v-dialog>

<!-- Large Dialog -->
<h3 class="title">Large Dialog</h3>
<v-button @click.native="showDialog.large = !showDialog.large">Show Large Dialog</v-button>

<v-dialog :show="showDialog.large" @hide="showDialog.large = false" title="Large Dialog" :large="true">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat varius nulla. Aenean sit amet facilisis ante, bibendum volutpat diam. Donec quis lorem urna. Duis luctus convallis posuere. Aliquam venenatis odio sodales facilisis ullamcorper. In ut tincidunt mi. Nam eleifend, dui vel porta porttitor, dolor purus malesuada nibh, et rhoncus turpis tortor vitae risus. Duis nec arcu sem. Vivamus aliquet dictum turpis eu pharetra. Phasellus tempor sem ut metus porta, in blandit lorem pellentesque.</p>
  <p>Proin finibus aliquam ante, id convallis lectus aliquam ut. Ut porttitor felis sed vestibulum volutpat. In a tristique odio. Praesent velit leo, finibus in eleifend sed, faucibus a justo. Pellentesque cursus ultrices sem vitae ultricies. Maecenas porta accumsan accumsan. In congue dignissim eros vel fermentum. Curabitur nibh nunc, feugiat quis leo non, eleifend euismod nulla. Aenean pretium eu diam auctor viverra.</p>
  <p>Vivamus eu odio gravida, tincidunt nulla et, interdum augue. Aenean in risus ut lectus pretium semper. Aliquam erat volutpat. Fusce dapibus rutrum justo et suscipit. Quisque nec tempus eros, id sollicitudin augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus tellus eu commodo suscipit. Duis eget turpis erat. Ut dui velit, scelerisque id efficitur at, aliquam non erat. Aenean scelerisque faucibus cursus.</p>
  <div slot="actions">
    <v-button @click.native="showDialog.large = false" :primary="true">Cancel</v-button>
    <v-button @click.native="showAlert('you clicked confirm', 'large');" :primary="true">Confirm</v-button>
  </div>
</v-dialog>`,
            dialogScript:
`import VDialog from '../vex/Dialog.vue';
import VButton from '../vex/Button.vue';

export default {
  components: {
    VDialog,
    VButton
  },

  // Data
  data () {
    return {
      showDialog: {
        small: false,
        medium: false,
        large: false,
      }
    }
  }

  // Methods
  methods: {
    showAlert (alert, size) {
      window.alert(alert);
      this.showDialog[size] = false;
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
