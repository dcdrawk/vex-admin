<template>
  <div class="v-chip-container" v-bind:class="{ 'focused': focused }">
    <span class="v-chip" v-for="(chip, index) in chips"><span>{{ chip }}</span><i v-if="!readOnly" class="material-icons chip-remove" @click="removeChip(index);">close</i></span>
    <input v-if="!readOnly" v-model="value" v-focus-model="focused" :placeholder="placeholder" @keyup.enter="addChip(value)" @keydown.delete="removeLastChip(value);"/>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../styles/components/_chips.scss';

  .chip-remove {
    border-radius: 50%;
    background-color: rgba(0,0,0,.54);
    margin: 0 -4px 0 8px;
    vertical-align: middle;
    color: rgb(224, 224, 224);
    font-size: 14px;
    padding: 2px;
    font-weight: 600;
    cursor: pointer;
    opacity: .54;
    width: 18px;
    height: 18px;
  }


</style>
<script>
  import { focusModel } from 'vue-focus';

  export default {
    directives: { focusModel: focusModel },
    name: 'MaterialButton',
    props: [
      'label',
      'chips',
      'placeholder',
      'readOnly'
    ],

    data () {
      return {
        focused: false,
//        chips: this.chips ? this.chips : [],
      }
    },

    mounted () {
      if (!this.chips) {
        this.chips = [];
      }
    },

    methods: {
      // Add a chip
      addChip (value) {
        if (!this.chips.includes(value) && value.length > 0) {
          this.chips.push(value);
        }
        this.value = '';
      },

      // Remove a chip
      removeChip (index) {
        this.chips.splice(index, 1);
      },

      // If the value is empty, remove the last chip
      removeLastChip (value) {
        console.log(value);
        if (value.length === 0) {
          this.chips.pop();
        }
      }
    }
  }
</script>
