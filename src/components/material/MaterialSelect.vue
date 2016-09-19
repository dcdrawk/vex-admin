<template>
  <div class="material-select-container" v-bind:class="{ 'has-value': value, 'focus': focused }">
    <div class="material-select" @click="openSelect()">
      {{value}}
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
      'options'
    ],

    methods: {
      openSelect () {
        this.open = true;

        setTimeout(() => {
          var container = this.$els.container;
          var offset = this.selectedIndex ? this.selectedIndex * 48 : 0;
          console.log(this.$els);
          var scrollableHeight = container.scrollHeight - container.clientHeight;

//          offset = offset - 80;

//          container.scrollTop = container.scrollHeight - (48 * (this.selectedIndex)) + 16;

          container.scrollTop = scrollableHeight * (this.selectedIndex / (this.options.length - 1));

          container.style.transform = `translateY(-${offset}px)`;
        }
        , 0);
      },

      closeSelect () {
        this.open = false;
      },

      selectOption (option, index) {
        console.log('test');
        this.value = option;
        this.selectedIndex = index;
        this.closeSelect();
      }
    },

    data () {
      return {
        open: false,
        selectedIndex: 0
      }
    },
  }
</script>
