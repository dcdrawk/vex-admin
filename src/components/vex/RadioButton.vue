<template>
  <div class="v-radio-button-container" @click="toggleCheckbox();" v-bind:class="{ 'has-value': selected, 'secondary-color': secondaryColor }">
    <div class="v-radio-button">
      <div class="circle"></div>
    </div>
  </div>
</template>
<style lang="scss">
  @import '../../styles/components/radio-button';
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
      checkbox.addEventListener('mousedown', function (ev) {
        ripple.downAction(ev);
      });
      checkbox.addEventListener('mouseup', function () {
        ripple.upAction();
      });
    },

    data () {
      return {
        selected: false
      }
    },
    methods: {
      toggleCheckbox () {
        this.selected = true;
        console.log('evendsadadast');
        this.$emit('selected', this.$el);
      }
    }

  }
</script>
