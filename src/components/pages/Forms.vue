<template>
  <div class="row page-content">
    <!--Title-->
    <h1 class="col-xs-12 display-1">Forms</h1>

    <v-card title="Input Fields" class="col-md-12">

      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Input -->
          <h3 class="title">Basic Input</h3>
          <v-input value="Basic Input"></v-input>

          <!-- Input with Placeholder -->
          <h3 class="title">Input with Placeholder</h3>
          <v-input placeholder="Input with Placeholder"></v-input>

          <!-- Input with Placeholder -->
          <h3 class="title">Input with Floating Label</h3>
          <v-input label="Input with Floating Label"></v-input>

        </div>
        <div slot="template">
          <pre><code class="language-html">{{ inputMarkup }}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{ inputScript }}</code></pre>
        </div>
      </v-tabs>
    </v-card>

    <!--Textarea Demo-->
    <v-card title="Textarea" class="col-md-12">

      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Textarea -->
          <h3 class="title">Basic Textarea</h3>
          <v-textarea value="Demo Input"></v-textarea>

          <!-- Textarea with fixed height -->
          <h3 class="title">Textarea with fixed height</h3>
          <v-textarea :auto-grow="false" value="This textarea won't grow as the user types"></v-textarea>

          <!-- Textarea with rows / fixed height -->
          <h3 class="title">Textarea with rows / fixed height</h3>
          <v-textarea rows="5" :auto-grow="false" value="This text area has 5 rows"></v-textarea>

        </div>
        <div slot="template">
          <pre><code class="language-html">{{ textareaMarkup }}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{ textareaScript }}</code></pre>
        </div>
      </v-tabs>
    </v-card>

    <!--Select Demo-->
    <v-card title="Select" class="col-md-12">
      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Select -->
          <h3 class="title">Basic Select</h3>
          <v-select :options="options" placeholder="Select Option"></v-select>

        </div>
        <div slot="template">
          <pre><code class="language-html">{{ selectMarkup }}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{ selectScript }}</code></pre>
        </div>
      </v-tabs>
    </v-card>

    <!--Checkbox Demo-->
    <v-card title="Checkbox" class="col-md-12">
      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Checkbox -->
          <h3 class="title">Basic Checkbox</h3>
          <v-checkbox :value="true"></v-checkbox>

          <!-- Secondary Color Checkbox -->
          <h3 class="title">Secondary Color Checkbox</h3>
          <v-checkbox :value="true" :secondary-color="true"></v-checkbox>

        </div>
        <div slot="template">
          <pre><code class="language-html">{{ checkboxMarkup }}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{ checkboxScript }}</code></pre>
        </div>
      </v-tabs>
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
  import VTabs from '../vex/VTabs.vue';
  import Prism from 'prismjs';

  // Exports
  export default {

    // Components
    components: {
      VCard,
      VInput,
      VCheckbox,
      VTextarea,
      VSelect,
      VTabs,
    },
    ready () {
      // Syntax Highlighting
      Prism.highlightAll();
    },
    methods: {

    },
    // Data
    data () {
      return {
        inputMarkup: `<!-- Basic Input -->
<h3 class="title">Basic Input</h3>
<v-input value="Basic Input"></v-input>

<!-- Input with Placeholder -->
<h3 class="title">Input with Placeholder</h3>
<v-input placeholder="Input with Placeholder"></v-input>

<!-- Input with Floating Label -->
<h3 class="title">Input with Floating Label</h3>
<v-input label="Input with Floating Label"></v-input>`,
        inputScript:
`import VInput from '../vex/Input.vue';

export default {
  components: {
    VInput
  }
}`,
        checkboxMarkup: `<!-- Basic Checkbox -->
<h3 class="title">Basic Checkbox</h3>
<v-checkbox :value="true"></v-checkbox>

<!-- Secondary Color Checkbox -->
<h3 class="title">Secondary Color Checkbox</h3>
<v-checkbox :value="true" :secondary-color="true"></v-checkbox>`,
        checkboxScript:
`import VCheckbox from '../vex/Checkbox.vue';

export default {
  components: {
    VCheckbox
  }
}`,
        textareaMarkup: `<!-- Basic Textarea -->
<h3 class="title">Basic Textarea</h3>
<v-textarea value="Demo Input"></v-textarea>

<!-- Textarea with fixed height -->
<h3 class="title">Textarea with fixed height</h3>
<v-textarea :auto-grow="false" value="This textarea won't grow as the user types"></v-textarea>

<!-- Textarea with rows / fixed height -->
<h3 class="title">Textarea with rows / fixed height</h3>
<v-textarea rows="5" :auto-grow="false" value="This text area has 5 rows"></v-textarea>`,
        textareaScript:
`import VTextarea from '../vex/Textarea.vue';

export default {
  components: {
    VTextarea
  }
}`,
        selectMarkup: `<!-- Basic Select -->
<h3 class="title">Basic Select</h3>
<v-select :options="options" placeholder="Select Option"></v-select>`,
        selectScript:
`import VSelect from '../vex/Select.vue';

export default {
  components: {
    VSelect
  },

  data () {
    return {
      options: ['option 1', 'option 2', 'option 3']
    }
  }
}`,
        options: ['option 1', 'option 2', 'option 3']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  //Import or add any styles here
</style>
