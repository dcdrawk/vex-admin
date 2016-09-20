<template>
  <div class="checkbox-container" @click="toggleCheckbox();" v-bind:class="{ 'has-value': value, 'secondary-color': secondaryColor }">
    <div class="checkbox"></div>
    <i class="material-icons">check</i>
  </div>
</template>
<style lang="scss">
  @import '../../styles/components/checkbox';
</style>
<script>
  import PaperRipple from 'paper-ripple'

  export default{
    props: [
      'value',
      'secondaryColor'
    ],
    ready () {
      var checkbox = this.$el;

      // New PaperRipple for the button
      var ripple = new PaperRipple({
                center: true,
                round: true
              }
      );

      // Adding ripple container to the button
      checkbox.appendChild(ripple.$);

      // Subscribing to 'mousedown' and 'mouseup' button events to activate ripple effect
      // when a user clicks on the button.
      checkbox.addEventListener('mousedown', function (ev) {
        ripple.downAction(ev);
      });
      checkbox.addEventListener('mouseup', function () {
        ripple.upAction();
      });
    },

    data () {
      return {
//        value: false
      }
    },
    methods: {
      toggleCheckbox () {
        this.value = !this.value;
      }
    }

  }
</script>
