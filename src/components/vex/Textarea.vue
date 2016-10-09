<template>
  <div class="material-input-container" v-bind:class="{ 'has-value': value, 'focus': focused }">
    <label>{{label}}</label>
    <textarea ref="textarea" v-model="value" v-focus-model="focused" :placeholder="placeholder" :rows="rows"></textarea>
  </div>
</template>

<style lang="scss">
  @import '../../styles/components/_inputs.scss';
</style>
<script>
  import { focusModel } from 'vue-focus';

  export default {
    directives: { focusModel: focusModel },
    name: 'MaterialButton',
    props: [
      'label',
      'value',
      'type',
      'model',
      'placeholder',
      'rows',
      'autoGrow'
    ],

    data () {
      return {
        focused: false
      }
    },

    methods: {
      auto_grow() {
        var element = this.$refs.textarea;
        element.style.height = '16px';
        element.style.height = (element.scrollHeight + 21) + 'px';
      }
    },

    watch: {
      'value': {
        handler: function(val, oldVal) {
          console.log(this.autoGrow);
          if (typeof this.autoGrow === 'undefined' || this.autoGrow !== false) {
            this.auto_grow();
          }
        },
      }
    }
  }
</script>
