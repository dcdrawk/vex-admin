<template>
  <div class="row page-content">

    <v-card title="Input Fields" class="col-xs-12">

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
    <v-card title="Textarea" class="col-xs-12">

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
    <v-card title="Select" class="col-xs-12">
      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Select -->
          <h3 class="title">Basic Select</h3>
          <v-select :options="options" placeholder="Select Option" :value="selectValue"></v-select>

          <!-- Select -->
          <h3 class="title">Select with Floating Label</h3>
          <v-select :options="options" label="Select Label"></v-select>

        </div>
        <div slot="template">
          <pre><code class="language-html">{{ selectMarkup }}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{ selectScript }}</code></pre>
        </div>
      </v-tabs>
    </v-card>

    <!--Radio Button Demo-->
    <v-card title="Radio Button" class="col-xs-12">
      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Radio Buttons -->
          <h3 class="title">Basic Radio Buttons</h3>
          <v-radio-group :value="radioValue1" @select="radioEvent($event, 'radioValue1');">
            <v-radio-button value="Stan"></v-radio-button>
            <v-radio-button value="Kyle"></v-radio-button>
            <v-radio-button value="Cartman"></v-radio-button>
            <v-radio-button value="Kenny"></v-radio-button>
          </v-radio-group>
          <p>Value: {{ radioValue1 }}</p>

          <!-- Secondary Color Radio Buttons -->
          <h3 class="title">Secondary Color Radio Buttons</h3>
          <v-radio-group :value="radioValue2" @select="radioEvent($event, 'radioValue2');">
            <v-radio-button value="Stan" :secondary-color="true"></v-radio-button>
            <v-radio-button value="Kyle" :secondary-color="true"></v-radio-button>
            <v-radio-button value="Cartman" :secondary-color="true"></v-radio-button>
            <v-radio-button value="Kenny" :secondary-color="true"></v-radio-button>
          </v-radio-group>
          <p>Value: {{ radioValue2 }}</p>

        </div>
        <div slot="template">
          <pre><code class="language-html">{{ radioButtonMarkup }}</code></pre>
        </div>
        <div slot="script">
          <pre><code class="language-javascript">{{ radioButtonScript }}</code></pre>
        </div>
      </v-tabs>
    </v-card>

    <!--Checkbox Demo-->
    <v-card title="Checkbox" class="col-xs-12">
      <v-tabs default-tab="result" :primary="true" class="demo-tabs">
        <div slot="result">

          <!-- Basic Checkbox -->
          <h3 class="title">Basic Checkbox</h3>
          <v-checkbox :value="checkboxValue1" @checked="checkboxValue1 = $event"></v-checkbox>

          <!-- Secondary Color Checkbox -->
          <h3 class="title">Secondary Color Checkbox</h3>
          <v-checkbox :value="checkboxValue2" :secondary-color="true" @checked="checkboxValue2 = $event"></v-checkbox>

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
  import VRadioGroup from '../vex/RadioGroup.vue';
  import VRadioButton from '../vex/RadioButton.vue';
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
      VRadioGroup,
      VRadioButton,
      VTabs,
    },
    mounted () {
      // Syntax Highlighting
      Prism.highlightAll();
    },
    methods: {
      radioEvent (value, radioValue) {
        this[radioValue] = value;
      }
    },
    // Data
    data () {
      return {
        checkboxValue1: true,
        checkboxValue2: true,
        selectValue: '',
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
<v-select :options="options" placeholder="Select Option" :value="selectValue"></v-select>

<!-- Select -->
<h3 class="title">Select with Floating Label</h3>
<v-select :options="options" label="Select Label"></v-select>`,
        selectScript:
`import VSelect from '../vex/Select.vue';

export default {
  components: {
    VSelect
  },

  data () {
    return {
      selectValue: '',
      options: ['option 1', 'option 2', 'option 3']
    }
  }
}`,
        radioButtonMarkup: `<!-- Basic Radio Buttons -->
<h3 class="title">Basic Radio Buttons</h3>
<v-radio-group :value="radioValue1">
  <v-radio-button value="Stan"></v-radio-button>
  <v-radio-button value="Kyle"></v-radio-button>
  <v-radio-button value="Cartman"></v-radio-button>
  <v-radio-button value="Kenny"></v-radio-button>
</v-radio-group>
<p>Value: {{ radioValue1 }}</p>

<!-- Secondary Color Radio Buttons -->
<h3 class="title">Secondary Color Radio Buttons</h3>
<v-radio-group :value="radioValue2">
  <v-radio-button value="Stan" :secondary-color="true"></v-radio-button>
  <v-radio-button value="Kyle" :secondary-color="true"></v-radio-button>
  <v-radio-button value="Cartman" :secondary-color="true"></v-radio-button>
  <v-radio-button value="Kenny" :secondary-color="true"></v-radio-button>
</v-radio-group>
<p>Value: {{ radioValue2 }}</p>`,
        radioButtonScript:
`import VRadioGroup from '../vex/RadioGroup.vue';
import VRadioButton from '../vex/RadioButton.vue';

export default {
  components: {
    VRadioGroup,
    VRadioButton
  },

  data () {
    return {
      radioValue1: 'Kyle',
      radioValue2: 'Cartman'
    }
  }
}`,
        radioValue1: 'Kyle',
        radioValue2: 'Cartman',
        options: ['option 1', 'option 2', 'option 3']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  //Import or add any styles here
</style>
