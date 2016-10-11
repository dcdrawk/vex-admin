<template>
  <div class="v-input-container" v-bind:class="{ 'has-value': value, 'focus': focused }">
    <label v-if="label">{{label}}</label>
    <input ref="input" v-model="value" v-focus="focused" @focus="focused = true" @blur="focused = false" :placeholder="placeholder" :type="type"/>
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
      'placeholder'
    ],

    data () {
      return {
        focused: false
      }
    },

    watch: {
      'value': {
        handler: function(val, oldVal) {
          this.$emit('value');
        },
      }
    }
  }
</script>
