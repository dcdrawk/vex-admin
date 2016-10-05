<template>
  <div class="material-select-container" v-bind:class="{ 'has-value': value, 'focus': focused || open}">
    <div class="material-select" @click="openSelect()">
      <label v-if="label">{{label}}</label>
      <span v-if="value">{{value}}</span>
      <span v-if="placeholder && !value">{{ placeholder }}</span>
      <i class="material-icons">arrow_drop_down</i>
    </div>

    <div class="material-select-option-container" v-show="open" transition="fade" v-el:container>
      <div class="material-select-option" v-for="option in options" @click.stop="selectOption(option, $index)">
        <span>{{option}}</span>
      </div>
    </div>

    <div class="material-select-backdrop" v-if="open" @click="closeSelect()"></div>

  </div>
</template>

<style lang="scss">
  @import '../../styles/components/_select.scss';
</style>
<script>
  import { focusModel } from 'vue-focus';

  export default {
    directives: { focusModel: focusModel },
    name: 'MaterialSelect',
    props: [
      'label',
      'value',
      'options',
      'placeholder'
    ],

    methods: {
      openSelect () {
        this.open = true;

        setTimeout(() => {
          var container = this.$els.container;
          var offset = this.selectedIndex ? this.selectedIndex * 48 : 0;
          var scrollOffset = this.selectedIndex > 4 ? (this.options.length - 5) * 48 : 0;

          container.scrollTop = this.selectedIndex > 4 ? 48 * (this.options.length - this.selectedIndex + 1) : 0;
          container.style.transform = `translateY(-${offset - scrollOffset}px)`;
        }
        , 0);
      },

      closeSelect () {
        this.open = false;
      },

      selectOption (option, index) {
        this.value = option;
        this.selectedIndex = index;
        this.closeSelect();
      },

      getSelectedIndex () {
        if (this.value && this.options) {
          this.options.forEach((item, index) => {
            if (item === this.value) {
              this.selectedIndex = index;
            }
          })
        }
      }
    },

    data () {
      return {
        open: false,
        selectedIndex: 0
      }
    },

    ready () {
      this.getSelectedIndex();
    }
  }
</script>
