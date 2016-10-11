<template>
  <div class="v-tabs" :class="{'primary': primary, 'secondary': secondary, 'icons': icons, 'icons-only': iconsOnly}" v-cloak>
    <!--Tab Items-->
    <div class="v-tab-items-container">
      <div ref="tabItems" class="v-tab-items">
        <v-button v-for="(tab, key, index) in $slots" @click.native="selectTab(key, index)" :class="{'active': active === key}" v-if="key !== 'default'" ref="tabs">
          <i v-show="icons" class="material-icons">
            {{ iconValues[key] }}
          </i>
          <span v-if="!iconsOnly">{{ key }}</span>
        </v-button>
      </div>
      <div ref="active-tab-bar" class="active-tab-bar"></div>
    </div>

    <!--Tab Content-->
    <div class="v-tab-content" v-for="(tab, key, index) in $slots" v-show="active === key">
      <slot :name="key"></slot>
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
        activePosition: 0,
        test: {},
        index: 0,
      }
    },

    mounted () {
      this.$nextTick(() => {
        this.offset = 0;

//        this.updateBar(0);

        // var tabHammer = new Hammer(this.$refs.tabItems.$el);
        // var tabItems = this.$refs.tabItems;
        // var activeTabBar = this.$refs.activeTabBar;

        // Let the user pan the tabs back and forth if they are too big for their container.
        // tabHammer.on('pan', (ev) => {
        //   var translate = this.translate + ev.deltaX + this.offset - this.activeOffset;
        //
        //   if (translate < 0 && translate >= tabItems.clientWidth - tabItems.scrollWidth) {
        //     tabItems.style.transform = `translateX(${translate}px)`;
        //     activeTabBar.style.transform = `translateX(${translate + this.activePosition}px) scaleX(${this.scale})`;
        //   } else if (translate < tabItems.clientWidth - tabItems.scrollWidth) {
        //     tabItems.style.transform = `translateX(${(tabItems.clientWidth - tabItems.scrollWidth)}px)`;
        //     activeTabBar.style.transform = `translateX(${(tabItems.clientWidth - tabItems.scrollWidth + this.activePosition)}px) scaleX(${this.scale})`;
        //   } else {
        //     tabItems.style.transform = `translateX(0px)`;
        //     activeTabBar.style.transform = `translateX(${this.activePosition}px) scaleX(${this.scale})`;
        //   }
        // });
        //
        // // Pan Start
        // tabHammer.on('panstart', (ev) => {
        //   tabItems.classList.add('panning');
        //   activeTabBar.classList.add('panning');
        // });
        //
        // // Pan End
        // tabHammer.on('panend', (ev) => {
        //   var translate = this.translate + ev.deltaX + this.offset - this.activeOffset;
        //   tabItems.classList.remove('panning');
        //   activeTabBar.classList.remove('panning');
        //
        //   if (translate < 0 && translate > tabItems.clientWidth * -1) {
        //     this.translate = this.translate + ev.deltaX + this.offset - this.activeOffset;
        //   } else if (translate < tabItems.clientWidth * -1) {
        //     this.translate = tabItems.clientWidth * -1;
        //   } else {
        //     this.translate = 0;
        //   }
        //
        //   this.offset = 0;
        //   this.activeOffset = 0;
        // });
      });
      this.active = this.defaultTab;
      if (this.icons) {
        this.getIcons();
      } else {
        this.updateBar(0);
      }
    },

    methods: {
      selectTab (key, index) {
        this.active = key;
        this.index = index;
        this.scrollTabs(index);
        this.updateBar(index);
      },

      findTab (index) {
        for (var i in this.$refs.tabs) {
          var item = this.$refs.tabs[i];
          if (index === +i) {
            return item.$el;
          }
        }
      },

      updateBar (index) {
        if (this.$refs.tabs) {
          var button = this.findTab(index);
          var tabBar = this.$refs['active-tab-bar'];
          var tabs = this.$slots;
          this.scale = button.clientWidth / 100;
          this.translate = 0;

          for (var i in this.$refs.tabs) {
            if (+i !== this.index) {
              this.translate += this.$refs.tabs[i].$el.clientWidth;
            } else {
              break;
            }
          }
          tabBar.style.transform = `translateX(${this.translate + this.offset}px) scaleX(${this.scale})`;
          tabBar.style.color = 'red';
        }
      },

      scrollTabs (index) {
        var tabItems = this.$refs.tabItems;
        var tabs = this.$slots;
        var button = this.$refs.tabs[index].$el;
        this.activeOffset = button.offsetLeft;
        this.activePosition = button.offsetLeft;

        if (button.clientWidth + button.offsetLeft > tabItems.clientWidth) {
          this.offset = (tabItems.clientWidth - button.offsetLeft - button.clientWidth);
          if (button !== this.$refs.tabItems.lastElementChild) {
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
        for (var i in this.$slots) {
          if (i !== 'default') {
            iconArray[i] = this.$slots[i][0].elm.attributes['icon'].nodeValue;
          }
        }
        this.iconValues = iconArray;
        this.updateBar(0);
      }
    },
    watch: {
      'iconsOnly': {
        handler: function(val, oldVal) {
          this.updateBar(this.defaultTab);
          this.active = this.defaultTab;
        }
      },
    },
  }
</script>
