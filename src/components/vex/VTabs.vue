<template>
  <div class="v-tabs" :class="{'primary': primary, 'secondary': secondary, 'icons': icons, 'icons-only': iconsOnly}" v-cloak>
    <!--Tab Items-->
    <div class="v-tab-items">

      <v-button v-ref:tabs v-for="(index, tab) in _slotContents" @click="selectTab(index)" :class="{'active': active === index}" v-show="index !== 'default'">
        <i v-show="icons" class="material-icons">
          <!--{{ tab.childNodes[0].attributes.icon.nodeValue }}-->
          {{ iconValues[index] }}
        </i>
        <span v-if="!iconsOnly">{{ index }}</span>
      </v-button>
    </div>
    <div v-el:active-tab-bar class="active-tab-bar"></div>

    <!--Tab Content-->
    <div class="v-tab-content" v-for="(index, tab) in _slotContents" v-show="active === index">
      <slot :name="index"></slot>

    </div>
  </div>
</template>

<style lang="scss">
  @import '../../styles/components/_tabs';
</style>

<script>
  import VButton from './Button';
//  import Prism from 'prismjs';

  export default{
    name: 'v-tabs',
    components: {
      VButton
    },
    props: [
      'defaultTab',
      'primary',
      'secondary',
      'icons',
      'iconsOnly'
    ],

    data () {
      return {
        active: '',
        iconValues: ['test']
      }
    },

    ready () {
//      this.active = this._slotContents[0];
//      if (this.$refs.tabs && this.$els.activeTabBar && this._slotContents) {

//      setTimeout(() => {
//        alert("Hello");
        this.updateBar(this.defaultTab);
        this.active = this.defaultTab;

        console.log(this._slotContents);
//      }, 0);

      if (this.icons) {
        this.getIcons();
      }


//      var code = 'import test from what';
//      var html = Prism.highlight(code, Prism.languages.javascript);
//      console.log(html);

//      }
    },

    methods: {
      selectTab (index) {
        this.active = index;
        this.updateBar(index);
//        var hl = require('highlight').Highlight;
//        highlight.initHighlightingOnLoad();
      },

      updateBar (index) {
//        console.log(this);
        var button = this.$refs.tabs[index].$el;
        var tabBar = this.$els.activeTabBar;
        var tabs = this._slotContents;

        var width = button.clientWidth / 100;
        var translate = 0;

        for (var i in this.$refs.tabs) {
          if (index !== i) {
            translate += this.$refs.tabs[i].$el.clientWidth;
          } else {
            break;
          }
        }
        tabBar.style.transform = `translateX(${translate}px) scaleX(${width})`;
//        tabBar.style.transformOrigin = `${translate}px 0px 0px`;
      },

      getIcons () {
        var iconArray = {};
        for (var i in this._slotContents) {
          if (i !== 'default') {
//            console.log(i);
//            console.log(this._slotContents);
//            console.log(this._slotContents[i].childNodes[0].attributes['icon']);
            iconArray[i] = this._slotContents[i].childNodes[0].attributes['icon'].nodeValue;
          }
        }

        this.$set('iconValues', iconArray);
        this.updateBar(this.defaultTab);
        console.log(this);
      }
    },
    watch: {
      'iconsOnly': {
        handler: function(val, oldVal) {
          console.log('icons icons icons!');
          this.updateBar(this.defaultTab);
          this.active = this.defaultTab;
          }
        },
    },
  }
</script>
