<template>
    <div>
        <div>ABOUT VIEW!</div>
        <material-input v-ref:email value="test" label="label"></material-input>
        <material-checkbox></material-checkbox>
        <button  v-on:click="greet($event)">Button!</button>
        <app-bar></app-bar>
      <!--<i class="material-icons">face</i>-->
    </div>
</template>
<style>

</style>
<script>
  import MaterialInput from './material/MaterialInput';
  import MaterialCheckbox from './material/MaterialCheckbox';
  import AppBar from './AppBar.vue';

  export default {
    components: {
      MaterialInput,
      MaterialCheckbox,
      AppBar
    },

    data () {
      return {
        msg: 'hello vue'
      }
    },

    methods: {
      greet (event) {
        // `this` inside methods point to the Vue instance
        console.log('Hello ' + this.name + '!')
        // `event` is the native DOM event
        console.log(event.target.tagName)
        console.log(this.$refs.email.value);
      }
    }
  }
</script>
