<template>
  <div class="test">
    <!--Dialog Container-->
    <div class="v-dialog-container" :class="{ 'show': show }">

      <!--Dialog Backdrop-->
      <transition name="fade">
        <div class="v-dialog-backdrop" @click="hideDialog();" v-if="show"></div>
        <!--<p v-if="show">test</p>-->
      </transition>

      <!--Dialog-->
      <transition name="dialog">
        <div class="v-dialog" v-if="show" :class="{ 'small': small, 'medium': medium, 'large': large, 'has-actions': $slots.actions }">

          <!--Dialog Title-->
          <h3 class="v-dialog-title title">{{ title }}</h3>

          <!--Dialog Content-->
          <div class="v-dialog-content">
            <slot name="default"></slot>
          </div>

          <!--Dialog Actions-->
          <div class="v-dialog-actions-container" v-if="$slots.actions">
            <div class="v-dialog-actions">
              <slot name="actions"></slot>
            </div>
          </div>
        </div>
      </transition>

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
    methods: {
      hideDialog() {
        this.$emit('hide');
      }
    }

  }
</script>
