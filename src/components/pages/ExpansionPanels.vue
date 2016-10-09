<template>
  <div class="row page-content">
    <v-card title="Expansion Panels" class="col-xs-12">

      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Expansion Panel -->
          <h3 class="title">Basic Expansion Panel</h3>
          <v-expansion-panel title="Expansion Panel 1" summary-text="Summary" secondary-text="Secondary">
            <p>Expansion Panel Content</p>
          </v-expansion-panel>
          <v-expansion-panel title="Expansion Panel 2" summary-text="Summary" secondary-text="Secondary">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat varius nulla. Aenean sit amet facilisis ante, bibendum volutpat diam. Donec quis lorem urna. Duis luctus convallis posuere. Aliquam venenatis odio sodales facilisis ullamcorper. In ut tincidunt mi. Nam eleifend, dui vel porta porttitor, dolor purus malesuada nibh, et rhoncus turpis tortor vitae risus. Duis nec arcu sem. Vivamus aliquet dictum turpis eu pharetra. Phasellus tempor sem ut metus porta, in blandit lorem pellentesque.</p>
          </v-expansion-panel>
          <v-expansion-panel title="Expansion Panel 3" summary-text="Summary" secondary-text="Secondary">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat varius nulla. Aenean sit amet facilisis ante, bibendum volutpat diam. Donec quis lorem urna. Duis luctus convallis posuere. Aliquam venenatis odio sodales facilisis ullamcorper. In ut tincidunt mi. Nam eleifend, dui vel porta porttitor, dolor purus malesuada nibh, et rhoncus turpis tortor vitae risus. Duis nec arcu sem. Vivamus aliquet dictum turpis eu pharetra. Phasellus tempor sem ut metus porta, in blandit lorem pellentesque.</p>
            <p>Proin finibus aliquam ante, id convallis lectus aliquam ut. Ut porttitor felis sed vestibulum volutpat. In a tristique odio. Praesent velit leo, finibus in eleifend sed, faucibus a justo. Pellentesque cursus ultrices sem vitae ultricies. Maecenas porta accumsan accumsan. In congue dignissim eros vel fermentum. Curabitur nibh nunc, feugiat quis leo non, eleifend euismod nulla. Aenean pretium eu diam auctor viverra.</p>
            <p>Vivamus eu odio gravida, tincidunt nulla et, interdum augue. Aenean in risus ut lectus pretium semper. Aliquam erat volutpat. Fusce dapibus rutrum justo et suscipit. Quisque nec tempus eros, id sollicitudin augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus tellus eu commodo suscipit. Duis eget turpis erat. Ut dui velit, scelerisque id efficitur at, aliquam non erat. Aenean scelerisque faucibus cursus.</p>
          </v-expansion-panel>
        </div>
        <div slot="template">
          <pre><code class="language-html">{{ panelMarkup }}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{ panelScript }}</code></pre>
        </div>
      </v-tabs>
    </v-card>  
  </div>
</template>

<script>
  import VCard from '../vex/Card.vue';
  import VButton from '../vex/Button.vue';
  import VIconButton from '../vex/IconButton.vue';
  import VExpansionPanel from '../vex/ExpansionPanel.vue';
  import VTabs from '../vex/VTabs.vue';
  import Prism from 'prismjs';

  export default {
    components: {
      VCard,
    //   VList,
      VExpansionPanel,
      VTabs,
    },
    mounted () {
      // Syntax Highlighting
      Prism.highlightAll();
    },
    data () {
      return {
        panelMarkup:
`<!-- Basic Expansion Panel -->
<h3 class="title">Basic Expansion Panel</h3>
<v-expansion-panel title="Expansion Panel 1" summary-text="Summary" secondary-text="Secondary">
    <p>Expansion Panel Content</p>
</v-expansion-panel>
<v-expansion-panel title="Expansion Panel 2" summary-text="Summary" secondary-text="Secondary">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat varius nulla. Aenean sit amet facilisis ante, bibendum volutpat diam. Donec quis lorem urna. Duis luctus convallis posuere. Aliquam venenatis odio sodales facilisis ullamcorper. In ut tincidunt mi. Nam eleifend, dui vel porta porttitor, dolor purus malesuada nibh, et rhoncus turpis tortor vitae risus. Duis nec arcu sem. Vivamus aliquet dictum turpis eu pharetra. Phasellus tempor sem ut metus porta, in blandit lorem pellentesque.</p>
</v-expansion-panel>
<v-expansion-panel title="Expansion Panel 3" summary-text="Summary" secondary-text="Secondary">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat varius nulla. Aenean sit amet facilisis ante, bibendum volutpat diam. Donec quis lorem urna. Duis luctus convallis posuere. Aliquam venenatis odio sodales facilisis ullamcorper. In ut tincidunt mi. Nam eleifend, dui vel porta porttitor, dolor purus malesuada nibh, et rhoncus turpis tortor vitae risus. Duis nec arcu sem. Vivamus aliquet dictum turpis eu pharetra. Phasellus tempor sem ut metus porta, in blandit lorem pellentesque.</p>
    <p>Proin finibus aliquam ante, id convallis lectus aliquam ut. Ut porttitor felis sed vestibulum volutpat. In a tristique odio. Praesent velit leo, finibus in eleifend sed, faucibus a justo. Pellentesque cursus ultrices sem vitae ultricies. Maecenas porta accumsan accumsan. In congue dignissim eros vel fermentum. Curabitur nibh nunc, feugiat quis leo non, eleifend euismod nulla. Aenean pretium eu diam auctor viverra.</p>
    <p>Vivamus eu odio gravida, tincidunt nulla et, interdum augue. Aenean in risus ut lectus pretium semper. Aliquam erat volutpat. Fusce dapibus rutrum justo et suscipit. Quisque nec tempus eros, id sollicitudin augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus tellus eu commodo suscipit. Duis eget turpis erat. Ut dui velit, scelerisque id efficitur at, aliquam non erat. Aenean scelerisque faucibus cursus.</p>
</v-expansion-panel>`,
        panelScript:
`import VExpansionPanel from '../vex/ExpansionPanel.vue';

export default {
  components: {
    VExpansionPanel
  }
}`
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>
