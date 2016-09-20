<template>
  <div class="row page-content">
    <!--Title-->
    <h1 class="col-xs-12 display-1">Forms</h1>

    <!--Input Demo-->
    <Card title="Inputs" class="col-xs-12">
      <!--Input Markup-->
      <div class="row headings">
        <div class="col-md-4"><strong>Markup</strong></div>
        <div class="col-md-8"><strong>Output</strong></div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="selector">
            <span>
              {{ inputMarkup }}
            </span>
          </div>
        </div>
        <div class="col-md-8">
          <v-input value="Demo Input"></v-input>
        </div>
      </div>

      <!--Input Properties-->
      <div class="row headings">
        <div class="col-md-4"><strong>Property</strong></div>
        <div class="col-md-8"><strong>Output</strong></div>
      </div>

      <!--Input with Placeholder-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">placeholder="My Placeholder"</span>
          </div>
        </div>
        <div class="col-md-8">
          <v-input placeholder="My Placeholder"></v-input>
        </div>
      </div>

      <!--Input with Label-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">label="My Floating Label"</span>
          </div>
        </div>
        <div class="col-md-8">
          <v-input label="My Floating Label"></v-input>
        </div>
      </div>
    </Card>

    <!--Checkbox Demo-->
    <Card title="Checkbox" class="col-xs-12">
      <!--Input Markup-->
      <div class="row headings">
        <div class="col-md-4"><strong>Markup</strong></div>
        <div class="col-md-8"><strong>Output</strong></div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="selector">
            <span>
              {{ checkboxMarkup }}
            </span>
          </div>
        </div>
        <div class="col-md-8">
          <checkbox :value="true"></checkbox>
        </div>
      </div>

      <!--Input Properties-->
      <div class="row headings">
        <div class="col-md-4"><strong>Property</strong></div>
        <div class="col-md-8"><strong>Output</strong></div>
      </div>

      <!--Input with Placeholder-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">:secondary-color="true"</span>
          </div>
        </div>
        <div class="col-md-8">
          <checkbox :value="true" :secondary-color="true"></checkbox>
        </div>
      </div>
    </Card>

  </div>
</template>

<script>
  // Imports
  import Card from '../vex/Card.vue';
  import VInput from '../vex/Input.vue';
  import Checkbox from '../vex/Checkbox.vue';

  // Exports
  export default {

    // Components
    components: {
      Card,
      VInput,
      Checkbox
    },

    // Data
    data () {
      return {
        inputMarkup: '<v-input value="Demo Input"></v-input>',
        checkboxMarkup: '<checkbox :value="true"></checkbox>'
      }
    },

    methods: {

    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  //Import or add any styles here
</style>
