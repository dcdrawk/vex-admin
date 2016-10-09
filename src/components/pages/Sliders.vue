<template>
  <div class="row page-content">

    <!--Card Content-->
    <v-card title="Sliders" class="col-xs-12">

      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Slider -->
          <h3 class="title">Basic Slider ({{ Math.round(value1) }})</h3>
          <v-slider :value="value1"></v-slider>

          <!-- Slider with Min Value -->
          <h3 class="title">Min Value of 10 ({{ Math.round(value2) }})</h3>
          <v-slider :value="value2" :min="10"></v-slider>

          <!-- Slider with Max Value-->
          <h3 class="title">Max Value of 50 ({{ Math.round(value3) }})</h3>
          <v-slider :value="value3" :max="50"></v-slider>

          <!-- Slider with Steps / Bubble -->
          <h3 class="title">Slider With Steps / Bubble ({{ Math.round(value4) }})</h3>
          <v-slider :value="value4" :steps="6" :show-bubble="true" :min="0" :max="5"></v-slider>
        </div>
        <div slot="template">
          <pre><code class="language-html">{{ sliderMarkup }}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{ sliderScript }}</code></pre>
        </div>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
  // Imports
  import VCard from '../vex/Card.vue';
  import VSlider from '../vex/Slider.vue';
  import VButton from '../vex/Button.vue';
  import VTabs from '../vex/VTabs.vue';
  import Prism from 'prismjs';

  // Exports
  export default {

    // Components
    components: {
      VCard,
      VSlider,
      VButton,
      VTabs,
    },
    mounted () {
      // Syntax Highlighting
      Prism.highlightAll();
    },
    methods: {

    },
    // Data
    data () {
      return {
        value1: 50,
        value2: 20,
        value3: 25,
        value4: 0,
        sliderMarkup: `<!-- Basic Slider -->
<h3 class="title">Basic Slider ({{ Math.round(value1) }})</h3>
<v-slider :value="value1"></v-slider>

<!-- Slider with Min Value -->
<h3 class="title">Min Value of 10 ({{ Math.round(value2) }})</h3>
<v-slider :value="value2" :min="10"></v-slider>

<!-- Slider with Max Value-->
<h3 class="title">Max Value of 50 ({{ Math.round(value3) }})</h3>
<v-slider :value="value3" :max="50"></v-slider>

<!-- Slider with Steps / Bubble -->
<h3 class="title">Slider With Steps / Bubble ({{ Math.round(value4) }})</h3>
<v-slider :value="value4" :steps="6" :show-bubble="true" :min="0" :max="5"></v-slider>`,
        sliderScript:
`import VSlider from '../vex/Slider.vue';

export default {
  components: {
    VSlider
  },

  data () {
    return {
      value1: 50,
      value2: 20,
      value3: 25,
      value4: 0,
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
