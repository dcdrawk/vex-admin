<template>
  <div class="material-input-container" v-bind:class="{ 'has-value': value, 'focus': focused }">
    <label>{{label}}</label>
    <input v-model="value" v-focus-model="focused" :type="type"/>
  </div>
</template>

<style lang="scss">
  @import '../../styles/components/inputs';
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
    ],

    data () {
      return {
        focused: false
      }
    }
  }
</script>
