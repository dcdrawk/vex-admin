<template>
  <div class="material-search-bar" v-bind:class="{ 'has-value': value, 'focus': focused }" @click="focusSearch()">
    <i class="material-icons" @click="focused = true">search</i>
    <!--<i v-if="value.length > 0" class="vex-icons" @click.stop="clearSearch($event)">arrow_back</i>-->
    <input v-model="searchValue" v-focus="focused" @focus="focused = true" @blur="focused = false" placeholder="Search" v-on:change="inputChanged()">
    <i v-if="value && value.length > 0" class="material-icons" @click.stop="clearSearch($event)">close</i>
    <div class="material-autocomplete" v-if="searchResults.length > 0 && !hideAutocomplete">
      <div class="material-autocomplete-item" v-for="item in searchResults" @click="selectItem(item.value)" v-html="item.searchValue"></div>
    </div>
  </div>
</template>

<style lang='scss'>
  @import '../../styles/components/_searchbar.scss';
</style>
<script>
  import { focus } from 'vue-focus';
  import MaterialInput from './Input.vue';

  export default {
    components: { MaterialInput },

    directives: { focus: focus },

    name: 'MaterialSearchBar',

    props: [
      'value',
      'autocomplete',
      'key'
    ],

    data () {
      return {
        focused: false,
        searchResults: [],
        hideAutocomplete: false,
        searchValue: this.value || ''
      }
    },

    mounted () {
      this.searchResults = [];
    },

    watch: {
      'searchValue': {
        handler: function(val, oldVal) {
          this.$emit('changed', this.searchValue);

//          if (val.length > 0 && !this.hideAutocomplete) {
//            if (this.autocomplete && this.key) {
//              this.autocompleteSearch(val, this.key);
//            }
//          } else {
//            this.searchResults = [];
//            this.hideAutocomplete = false;
//          }
        },
      }
    },

    methods: {
      focusSearch () {
//        this.focused = this.value.length === 0;
      },

      clearSearch (e) {
        this.value = '';
        this.focused = false;
      },

      inputChanged () {
        console.log('the input changed');
        this.$emit('changed', this.searchValue);
      },

      autocompleteSearch(value, key) {
        this.searchResults = [];
        console.log(value, key);
        for (var i in this.autocomplete) {
          let item = this.autocomplete[i];

          if (item[key].toLowerCase().indexOf(value.toLowerCase()) >= 0) {
            var string = String(item[key]);

            console.log(string);
            var regExp = new RegExp('(' + value.toLowerCase() + ')', 'gi');
            string = string.replace(regExp, '<strong>$1</strong>');

            var result = {
              searchValue: string,
              value: item[key]
            };

            this.searchResults.push(result);
          }
        }
      },

      selectItem (item) {
        this.hideAutocomplete = true;
        this.searchResults = [];
        this.value = item;
      }
    }
  }
</script>
