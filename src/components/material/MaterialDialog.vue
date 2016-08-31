<template>

  <div class="material-dialog-container">
    <div class="material-dialog-backdrop" @click="hideDialog();" v-if="show" transition="backdrop"></div>
    <div class="material-dialog" v-if="show" transition="dialog">

      <h3 class="material-dialog-title">{{ title }}</h3>
      <slot></slot>

    </div>

  </div>
</template>

<style lang="scss">
  @import '../../styles/components/_dialog';
  /**/
</style>

<script>
  import MaterialButton from './MaterialButton.vue';
  import MaterialCard from './MaterialCard.vue';

  export default{
    components: {
      MaterialButton,
      MaterialCard,
    },
    props: [
      'title',
      'size'
    ],

    data () {
      return {
        show: false
      }
    },
    methods: {
      hideDialog() {
        console.log(this);
        this.show = false;
      }
    }
  }
</script>
