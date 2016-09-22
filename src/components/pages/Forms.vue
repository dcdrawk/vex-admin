<template>
  <div class="row page-content">
    <!--Title-->
    <h1 class="col-xs-12 display-1">Forms</h1>

    <!--Input Demo-->
    <v-card title="Inputs" class="col-xs-12">
      <!--Input Markup-->
      <div class="row headings">
        <div class="col-md-4"><strong>Markup</strong></div>
        <div class="col-md-8"><strong>Output</strong></div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <span class="selector">
            {{ inputMarkup }}
          </span>
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
    </v-card>

    <!--Textarea Demo-->
    <v-card title="Textarea" class="col-xs-12">
      <!--Input Markup-->
      <div class="row headings">
        <div class="col-md-4"><strong>Markup</strong></div>
        <div class="col-md-8"><strong>Output</strong></div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <span class="selector">
            {{ textareaMarkup }}
          </span>
        </div>
        <div class="col-md-8">
          <v-textarea value="Demo Input"></v-textarea>
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
            <span class="selector">:auto-grow="false"</span>
          </div>
        </div>
        <div class="col-md-8">
          <v-textarea :auto-grow="false" value="This textarea won't grow as the user types"></v-textarea>
        </div>
      </div>

      <!--Input with Label-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">rows="5" :auto-grow="false"</span>
          </div>
        </div>
        <div class="col-md-8">
          <v-textarea rows="5" :auto-grow="false" value="This text area has 5 rows"></v-textarea>
        </div>
      </div>
    </v-card>

    <!--Select Demo-->
    <v-card title="Select" class="col-xs-12">
      <!--Select Markup-->
      <div class="row headings">
        <div class="col-md-4"><strong>Markup</strong></div>
        <div class="col-md-8"><strong>Output</strong></div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="selector">
            {{ selectMarkup }}
          </div>
        </div>
        <div class="col-md-8">
          <v-select :options="options" placeholder="Select Option"></v-select>
        </div>
      </div>
    </v-card>
    <!--Checkbox Demo-->
    <v-card title="Checkbox" class="col-xs-12">
      <!--Input Markup-->
      <div class="row headings">
        <div class="col-md-4"><strong>Markup</strong></div>
        <div class="col-md-8"><strong>Output</strong></div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <span class="selector">
            {{ checkboxMarkup }}
          </span>
        </div>
        <div class="col-md-8">
          <v-checkbox :value="true"></v-checkbox>
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
          <v-checkbox :value="true" :secondary-color="true"></v-checkbox>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
  // Imports
  import VCard from '../vex/Card.vue';
  import VInput from '../vex/Input.vue';
  import VTextarea from '../vex/Textarea.vue';
  import VCheckbox from '../vex/Checkbox.vue';
  import VSelect from '../vex/Select.vue';

  // Exports
  export default {

    // Components
    components: {
      VCard,
      VInput,
      VCheckbox,
      VTextarea,
      VSelect
    },

    // Data
    data () {
      return {
        inputMarkup: '<v-input value="Demo Input"></v-input>',
        checkboxMarkup: '<v-checkbox :value="true"></v-checkbox>',
        textareaMarkup: '<v-textarea value="Demo Input"></v-textarea>',
        selectMarkup: '<v-select :options="options" placeholder="Select Option"></v-select>',
        options: ['option 1', 'option 2', 'option 3']
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
