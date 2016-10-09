<template>
  <div v-el:container class="v-dropdown-container" v-bind:class="{ 'open': open, 'closed': !open }">
    <div class="v-dropdown-backdrop" v-if="open" @click="closeDropdown();"></div>
    <slot></slot>
  </div>
</template>

<style lang="scss">
  @import '../../styles/components/dropdowns';
</style>
<script>
  import { focusModel } from 'vue-focus';
  import gsap from 'gsap';

  export default {
    directives: { focusModel: focusModel },
    name: 'MaterialSelect',
    props: [
      'options',
      'open',
      'target',
      'position'
    ],

    methods: {
      openDropdown () {
        console.log(this);
        var container = this.$refs.container;
        gsap.TweenLite.to(container, 0.25, { height: this.totalHeight + "px", opacity: 1, ease: gsap.Power1.easeOut });
      },

      closeDropdown () {
        this.open = false;
        var container = this.$refs.container;
        gsap.TweenLite.to(container, 0.25, { height: '0px', opacity: 0, ease: gsap.Power1.easeOut });
      },
    },

    data () {
      return {
        totalHeight: 0
      }
    },

    mounted () {
      setTimeout(() => {
        var container = this.$refs.container;
        this.totalHeight = container.clientHeight;

        console.log(this.totalHeight);
        container.style.height = '0px';

        if (this.position === 'right') {
          container.style.left = this.target.offsetLeft + this.target.clientWidth - container.clientWidth + 'px';
          container.style.top = this.target.offsetTop + 'px';
        } else {
          container.style.left = this.target.offsetLeft + 'px';
          container.style.top = this.target.offsetTop + 'px';
        }
      }, 0);
    },

    watch: {
      'open': {
        handler: function(val, oldVal) {
          if (val === true) {
            this.openDropdown();
          } else {
            this.closeDropdown();
          }
        },
      }
    }
  }
</script>
