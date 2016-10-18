<template>
  <div class="v-input-container" v-bind:class="{ 'has-value': inputValue, 'focus': focused }">
    <label v-if="label">{{label}}</label>
    <input ref="input" v-model="inputValue" v-focus="focused" @focus="focused = true" @blur="focused = false" :placeholder="placeholder" :type="type" :autocomplete="inputAutocomplete"/>
  </div>
</template>

<style lang="scss">
  @import '../../styles/components/_inputs.scss';
</style>
<script>
  import { focus } from 'vue-focus';

  export default {
    directives: { focus: focus },
    name: 'MaterialButton',
    props: [
      'label',
      'value',
      'type',
      'model',
      'placeholder',
      'autocomplete'
    ],

    data () {
      return {
        focused: false,
        inputValue: this.value || '',
        inputAutocomplete: this.autocomplete || 'on'
      }
    },

    watch: {
      'inputValue': {
        handler: function(val, oldVal) {
          console.log(val);
          this.$emit('input', this.inputValue);
        },
      },
      'value': {
        handler: function(val, oldVal) {
          this.inputValue = val;
        },
      }
    }
  }
</script>
