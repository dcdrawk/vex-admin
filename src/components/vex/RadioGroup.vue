<template>
  <div class="v-radio-group">
    <slot></slot>
  </div>
</template>
<style lang="scss">

</style>
<script>

  export default{
    props: [
      'value'
    ],

    data () {
      return {
        radioButtons: []
      }
    },
    mounted () {
      setTimeout(() => {
        this.radioButtons = this.$el.querySelectorAll('.v-radio-button-container');

        this.getSelected();
        this.$on('selected', (element) => {
          this.selectButton(element);
        });
      }, 0);
    },

    methods: {
      selectButton (element) {
        this.radioButtons.forEach((item, index) => {
          if (item !== element && item.__vue__.selected) {
            item.__vue__.selected = false;
          } else if (item === element) {
            this.value = item.__vue__.value;
          }
        });
      },

      getSelected () {
        console.log('test');
        this.radioButtons.forEach((item, index) => {
          console.log('value!');
          console.log(this.value);
          console.dir(item);
          if (this.value === item.__vue__.value) {
//            this.value = item.__vue__.value;
            item.__vue__.selected = true;
          }
        });
      }

    }
  }
</script>
