<template>
  <div class="v-tabs" :class="{'primary': primary, 'secondary': secondary, 'icons': icons, 'icons-only': iconsOnly}" v-cloak>
    <!--Tab Items-->
    <div class="v-tab-items-container">
      <div v-el:tab-items class="v-tab-items">

        <v-button v-ref:tabs v-for="(index, tab) in _slotContents" @click="selectTab(index)" :class="{'active': active === index}" v-if="index !== 'default'">
          <i v-show="icons" class="material-icons">
            {{ iconValues[index] }}
          </i>
          <span v-if="!iconsOnly">{{ index }}</span>
        </v-button>
      </div>
      <div v-el:active-tab-bar class="active-tab-bar"></div>
    </div>

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
  import Hammer from 'hammerjs';

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
        iconValues: [''],
        offset: 0,
        translate: 0,
        scale: 0,
        deltaX: 0,
        activeOffset: 0,
        activePosition: 0
      }
    },

    ready () {
      this.updateBar(this.defaultTab);
      this.active = this.defaultTab;
      if (this.icons) {
        this.getIcons();
      }

      var tabHammer = new Hammer(this.$els.tabItems);
      var tabItems = this.$els.tabItems;
      var activeTabBar = this.$els.activeTabBar;

      // Let the user pan the tabs back and forth if they are too big for their container.
      tabHammer.on('pan', (ev) => {
        var translate = this.translate + ev.deltaX + this.offset - this.activeOffset;

        if (translate < 0 && translate >= tabItems.clientWidth - tabItems.scrollWidth) {
          tabItems.style.transform = `translateX(${translate}px)`;
          activeTabBar.style.transform = `translateX(${translate + this.activePosition}px) scaleX(${this.scale})`;
        } else if (translate < tabItems.clientWidth - tabItems.scrollWidth) {
          tabItems.style.transform = `translateX(${(tabItems.clientWidth - tabItems.scrollWidth)}px)`;
          activeTabBar.style.transform = `translateX(${(tabItems.clientWidth - tabItems.scrollWidth + this.activePosition)}px) scaleX(${this.scale})`;
        } else {
          tabItems.style.transform = `translateX(0px)`;
          activeTabBar.style.transform = `translateX(${this.activePosition}px) scaleX(${this.scale})`;
        }
      });

      // Pan Start
      tabHammer.on('panstart', (ev) => {
        tabItems.classList.add('panning');
        activeTabBar.classList.add('panning');
      });

      // Pan End
      tabHammer.on('panend', (ev) => {
        var translate = this.translate + ev.deltaX + this.offset - this.activeOffset;
        tabItems.classList.remove('panning');
        activeTabBar.classList.remove('panning');

        if (translate < 0 && translate > tabItems.clientWidth * -1) {
          this.translate = this.translate + ev.deltaX + this.offset - this.activeOffset;
        } else if (translate < tabItems.clientWidth * -1) {
          this.translate = tabItems.clientWidth * -1;
        } else {
          this.translate = 0;
        }

        this.offset = 0;
        this.activeOffset = 0;
      });
    },

    methods: {
      selectTab (index) {
        this.active = index;
        this.scrollTabs(index);
        this.updateBar(index);
      },

      updateBar (index) {
        var button = this.$refs.tabs[index].$el;
        var tabBar = this.$els.activeTabBar;
        var tabs = this._slotContents;

        this.scale = button.clientWidth / 100;
        this.translate = 0;

        for (var i in this.$refs.tabs) {
          if (index !== i) {
            this.translate += this.$refs.tabs[i].$el.clientWidth;
          } else {
            break;
          }
        }

        tabBar.style.transform = `translateX(${this.translate + this.offset}px) scaleX(${this.scale})`;
      },

      scrollTabs (index) {
        var tabItems = this.$els.tabItems;
        var tabs = this._slotContents;
        var button = this.$refs.tabs[index].$el;
        this.activeOffset = button.offsetLeft;
        this.activePosition = button.offsetLeft;

        if (button.clientWidth + button.offsetLeft > tabItems.clientWidth) {
          this.offset = (tabItems.clientWidth - button.offsetLeft - button.clientWidth);
          if (button !== this.$els.tabItems.lastElementChild) {
            this.offset -= 64;
          }
          tabItems.style.transform = `translateX(${this.offset}px)`;
        } else {
          this.offset = 0;
          tabItems.style.transform = `translateX(${this.offset}px)`;
        }
      },

      getIcons () {
        var iconArray = {};
        for (var i in this._slotContents) {
          if (i !== 'default') {
            iconArray[i] = this._slotContents[i].childNodes[0].attributes['icon'].nodeValue;
          }
        }
        this.$set('iconValues', iconArray);
        this.updateBar(this.defaultTab);
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
