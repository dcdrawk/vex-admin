<template>
  <div class="material-input-container" v-bind:class="{ 'has-value': value, 'focus': focused }">
    <label v-if="label">{{label}}</label>
    <input v-model="value" v-focus-model="focused" :placeholder="placeholder" :type="type"/>
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
      'placeholder'
    ],

    data () {
      return {
        focused: false
      }
    }
  }
</script>
