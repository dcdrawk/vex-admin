<template>
  <div class="checkbox-container" @click="toggleCheckbox();" v-bind:class="{ 'has-value': checkboxValue, 'secondary-color': secondaryColor }">
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
    mounted () {
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

      checkbox.addEventListener('mousedown', mouseDownEvent);

      checkbox.addEventListener('mouseup', function () {
        ripple.upAction()
      });
    },

    data () {
      return {
        checkboxValue: this.value || false
      }
    },
    methods: {
      toggleCheckbox (value) {
        if (value === true || value === false) {
          this.checkboxValue = value;
        } else {
          this.checkboxValue = !this.checkboxValue;
        }
        this.$emit('checked', this.checkboxValue);
      }
    }

  }
</script>
