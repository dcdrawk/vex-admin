<template>
  <!--Dialog Container-->
  <div class="v-dialog-container" :class="{ 'show': show }">

    <!--Dialog Backdrop-->
    <div class="v-dialog-backdrop" @click="hideDialog();" v-if="show" transition="fade"></div>

    <!--Dialog-->
    <div class="v-dialog" v-if="show" transition="dialog" :class="{ 'small': small, 'medium': medium, 'large': large, 'has-actions': _slotContents.actions }">

      <!--Dialog Title-->
      <h3 class="v-dialog-title title">{{ title }}</h3>

      <!--Dialog Content-->
      <div class="v-dialog-content">
        <slot name="default"></slot>
      </div>

      <!--Dialog Actions-->
      <div class="v-dialog-actions-container" v-if="_slotContents.actions">
        <div class="v-dialog-actions">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
  @import '../../styles/components/dialog';
  /**/
</style>

<script>
  import MaterialButton from './Button.vue';
  import MaterialCard from './Card.vue';
  import Toolbar from './Toolbar.vue';

  export default {
    components: {
      MaterialButton,
      MaterialCard,
      Toolbar
    },
    props: [
      'title',
      'size',
      'show',
      'small',
      'medium',
      'large'
    ],

//    data () {
//      return {
//        show: false
//      }
//    },

// if (this.open) {
//   document.body.classList.add('sidebar-open');
// } else {
//   document.body.classList.remove('sidebar-open');
// }
    methods: {
      hideDialog() {
        console.log(this);
        this.show = false;
      }
    }
  }
</script>
