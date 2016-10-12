<template>
  <div class="v-select-container" v-bind:class="{ 'has-value': selectValue}">
    <div class="v-select" @click="openSelect()">
      <label v-if="label">{{label}}</label>
      <span v-if="selectValue">{{selectValue}}</span>
      <span v-if="placeholder && !selectValue">{{ placeholder }}</span>
      <i class="material-icons">arrow_drop_down</i>
    </div>
    <transition name="fade">
      <div class="v-select-option-container" v-show="open" ref="container">
        <div class="v-select-option" v-for="(option, index) in options" @click.stop="selectOption(option, index)">
          <span>{{option}}</span>
        </div>
      </div>
    </transition>

    <div class="v-select-backdrop" v-if="open" @click="closeSelect()"></div>

  </div>
</template>

<style lang="scss">
  @import '../../styles/components/_select.scss';
</style>
<script>

  export default {
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
          var container = this.$refs.container;
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
        this.selectValue = option;
        this.selectedIndex = index;
        this.closeSelect();
        this.$emit('selected', this.selectValue);
      },

      getSelectedIndex () {
        if (this.selectValue && this.options) {
          this.options.forEach((item, index) => {
            if (item === this.selectValue) {
              this.selectedIndex = index;
            }
          })
        }
      }
    },

    data () {
      return {
        open: false,
        selectedIndex: 0,
        selectValue: this.value || ''
      }
    },

    mounted () {
      this.getSelectedIndex();
    }
  }
</script>
