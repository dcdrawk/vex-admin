<template>
  <div v-el:container class="v-slider-container" v-bind:class="{ 'has-value': value, 'focus': focused }"  @click="clickSlider($event)">
    <div v-el:slider class="v-slider"></div>
    <div v-el:circle draggable="true" class="v-slider-circle" :class="{ 'has-value': hasValue, 'focus': focused }"></div>
    <div v-el:indicator class="v-slider-indicator"></div>
  </div>
</template>

<style lang="scss">
  @import '../../styles/components/slider';
</style>
<script>
  import { focusModel } from 'vue-focus';
  import Hammer from 'hammerjs';
  import gsap from 'gsap';

  export default {
    directives: { focusModel: focusModel },
    name: 'MaterialButton',
    props: [
      'label',
      'value',
      'type',
      'model',
      'placeholder',
      'value'
    ],

    data () {
      return {
        focused: false,
        translate: 0,
        hasValue: false
      }
    },

    methods: {
      clickSlider (ev) {
        var translate = ev.clientX - this.$els.container.offsetLeft - 16;
        this.translate = translate;

        if (translate > -8 && translate < this.$els.slider.clientWidth) {
          this.$els.circle.style.transform = `translateX(${translate}px)`;
          this.value = translate / (this.$els.slider.clientWidth);
          this.$els.indicator.style.transform = `scaleX(${this.value})`;
          this.hasValue = translate > 1;
        } else if (translate > -8) {
          this.$els.circle.style.transform = `translateX(${-8}px)`;
          this.value = 0;
          this.$els.indicator.style.transform = `scaleX(${this.value})`;
          this.hasValue = translate > 1;
        }
      }
    },

    ready () {
      var circle = new Hammer(this.$els.circle);
      var container = this.$els.container;
      this.$els.indicator.style.transform = `scaleX(${this.value})`;
      this.translate = 0;

      // Let the user pan the tabs back and forth if they are too big for their container.
      circle.on('pan', (ev) => {
        ev.preventDefault();
        var translate = ev.deltaX + this.translate;
        if (translate > -8 && translate < this.$els.slider.clientWidth) {
          this.value = translate / (this.$els.slider.clientWidth);
          this.$els.circle.style.transform = `translateX(${ev.deltaX + this.translate}px)`;
          this.$els.indicator.style.transform = `scaleX(${this.value})`;
        }
        this.hasValue = translate > 1;
      });

      circle.on('panstart', (ev) => {
        this.focused = true;
      });

      circle.on('panend', (ev) => {
        this.translate = ev.deltaX + this.translate;
        this.focused = false;
        // ev.stopPropagation();
      });
    }
  }
</script>
