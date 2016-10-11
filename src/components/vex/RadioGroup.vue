<template>
  <div class="v-radio-group">
    <slot></slot>
  </div>
</template>

<style lang="scss">

</style>
<script>

  export default {
    props: [
      'value'
    ],
    data () {
      return {
        radioButtons: []
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$on('radioSelect', (value) => {
          this.$emit('select', value);
        });
        this.radioButtons = this.$el.querySelectorAll('.v-radio-button-container');
        this.getSelected();
      });
    },

    methods: {
      getSelected () {
        this.radioButtons.forEach((item, index) => {
          if (this.value === item.__vue__.value) {
            item.__vue__.selected = true;
          }
        });
      }
    }
  }
</script>
