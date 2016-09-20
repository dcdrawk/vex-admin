<template>

  <span class="icon-button-wrapper" v-bind:class="{ 'primary': primary, 'secondary': secondary, 'raised': raised, 'flat': !raised, 'square': square }">
    <button class="material-button icon-button paper-button" v-bind:class="{ 'primary': primary, 'raised': raised }">
      <i class="material-icons">{{ icon }}</i>
    </button>
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
    ready () {
      var button = this.$el;

      // New PaperRipple for the button
      var ripple = new PaperRipple();

      // Adding ripple container to the button
      button.appendChild(ripple.$);

      // Subscribing to 'mousedown' and 'mouseup' button events to activate ripple effect
      // when a user clicks on the button.
      var mouseUpEvent = function () {
        ripple.upAction();
        window.removeEventListener('mouseup', mouseUpEvent);
        window.removeEventListener('touchend', mouseUpEvent);
      };

      var mouseDownEvent = function(ev) {
        ev.preventDefault();
        if (ripple._waves.length > 0) {
          ripple.upAction();
        }
        ripple.downAction(ev);
        window.addEventListener('mouseup', mouseUpEvent);
        window.addEventListener('touchend', mouseUpEvent);
      };

      button.addEventListener('touchstart', mouseDownEvent);
      button.addEventListener('mousedown', mouseDownEvent);

      button.addEventListener('mouseup', function () {
        ripple.upAction()
      });
    }
  }
</script>