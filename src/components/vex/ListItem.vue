<template>
  <li class="list-item" v-bind:class="{ 'avatar': avatar, 'two-line': twoLine || secondaryText, 'bold': bold}">
    <span v-if="icon && avatar" class="list-item-avatar">
      <i class="material-icons">{{ icon }}</i>
    </span>

    <span v-if="icon && !avatar" class="list-item-icon">
      <i class="material-icons">{{ icon }}</i>
    </span>

    <span class="list-item-text-container">
      <span class="item-text">{{ text }}</span>
      <span v-if="secondaryText" class="secondary-text">{{ secondaryText }}</span>
    </span>

  </li>
</template>
<style lang="scss">
  @import '../../styles/components/lists';

  .bold {
    .item-text {
      font-weight: 500
    }
  }
</style>
<script>
  import PaperRipple from 'paper-ripple'

  export default {
    props: [
      'avatar',
      'twoLine',
      'icon',
      'text',
      'secondaryText',
      'bold',
      'noRipple'
    ],
    mounted () {
      if (!this.noRipple) {
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
  }
</script>
