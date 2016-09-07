<template>

  <span class="icon-button-wrapper" v-bind:class="{ 'primary': primary, 'raised': raised }">
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
      'icon'
    ],
    ready () {
      var button = this.$el;

      // New PaperRipple for the button
      var ripple = new PaperRipple();

      // Adding ripple container to the button
      button.appendChild(ripple.$);

      // Subscribing to 'mousedown' and 'mouseup' button events to activate ripple effect
      // when a user clicks on the button.
      var event = function () {
        ripple.upAction();
        window.removeEventListener('mouseup', event);
      };

      button.addEventListener('mousedown', function (ev) {
        ripple.downAction(ev)
        window.addEventListener('mouseup', event);
      });

      button.addEventListener('mouseup', function () {
        ripple.upAction()
      });
    }
  }
</script>