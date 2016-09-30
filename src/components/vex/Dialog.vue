<template>

  <div class="material-dialog-container" :class="{'show':show}">
    <div class="material-dialog-backdrop" @click="hideDialog();" v-if="show" transition="fade"></div>
    <div class="material-dialog" v-if="show" transition="dialog">

      <h3 class="material-dialog-title">{{ title }}</h3>
      <slot></slot>
      {{ show }}
    </div>

  </div>
</template>

<style lang="scss">
  @import '../../styles/components/_dialog';
  /**/
</style>

<script>
  import MaterialButton from './Button.vue';
  import MaterialCard from './Card.vue';

  export default{
    components: {
      MaterialButton,
      MaterialCard,
    },
    props: [
      'title',
      'size',
      'show'
    ],

//    data () {
//      return {
//        show: false
//      }
//    },
    methods: {
      hideDialog() {
        console.log(this);
        this.show = false;
      }
    }
  }
</script>
