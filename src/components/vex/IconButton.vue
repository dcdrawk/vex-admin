<template>
  <span class="v-icon-button-container" :class="{'icon-button-shadow': raised}">
    <span ref="button" class="v-icon-button-wrapper" v-bind:class="{ 'primary': primary, 'secondary': secondary, 'raised': raised, 'flat': !raised, 'square': square }">
      <button class="v-button v-icon-button paper-button">
        <i class="material-icons">{{ icon }}</i>
      </button>
    </span>
  </span>

</template>
<style lang="scss">
  @import '../../styles/components/_buttons';
</style>
<script>
  import PaperRipple from 'paper-ripple'

  export default{
    props: [
      'raised',
      'primary',
      'secondary',
      'icon',

    ],
    mounted () {
      var button = this.$refs.button;

      // New PaperRipple for the button
      var ripple = new PaperRipple();

      // Adding ripple container to the button
      button.appendChild(ripple.$);

      // Subscribing to 'mousedown' and 'mouseup' button events to activate ripple effect
      // when a user clicks on the button.
      var mouseUpEvent = function () {
        ripple.upAction();
        window.removeEventListener('mouseup', mouseUpEvent);
      };

      var mouseDownEvent = function(ev) {
        if (ripple._waves.length > 0) {
          ripple.upAction();
        }
        ripple.downAction(ev);
        window.addEventListener('mouseup', mouseUpEvent);
      };

      button.addEventListener('mousedown', mouseDownEvent);

      button.addEventListener('mouseup', function () {
        ripple.upAction()
      });
    }
  }
</script>
