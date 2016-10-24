<template>
  <div>
    <slot ref="target" name="target"></slot>
    <div ref="container" class="v-dropdown-container">
      <div class="v-dropdown-backdrop" v-if="open" @click="closeDropdown();"></div>
      <slot name="menu"></slot>
    </div>
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
      'position',
      'test'
    ],

    methods: {
      openDropdown () {
        var container = this.$refs.container;
        gsap.TweenLite.to(container, 0.25, { height: this.totalHeight + "px", opacity: 1, ease: gsap.Power1.easeOut });
        console.log(this.target);
      },

      closeDropdown () {
        var container = this.$refs.container;
        gsap.TweenLite.to(container, 0.25, { height: '0px', opacity: 0, ease: gsap.Power1.easeOut });
        this.$emit('toggle');
      },

//      setPos () {
//        console.log(this);
//        var container = this.$refs.container;
////        this.totalHeight = container.clientHeight;
////        container.style.height = '0px';
////        this.target = this.$slots.target[0].elm;
////        this.target = this.$slots.target[0].elm.firstChild;
//        if (this.position === 'right') {
//          container.style.left = this.target.offsetLeft + this.target.clientWidth - container.clientWidth + 'px';
//          container.style.top = this.target.offsetTop + 'px';
//        } else {
//          container.style.left = this.target.offsetLeft + 'px';
//          container.style.top = this.target.offsetTop + 'px';
//        }
//      }
    },

    data () {
      return {
        totalHeight: 0,
        target: undefined
      }
    },

    mounted () {
      console.log(this);
      this.target = this.$slots.target[0].elm;
      this.$nextTick(() => {
        setTimeout(() => {
          var container = this.$refs.container;
          console.dir(container);
          this.totalHeight = container.clientHeight;
          container.style.height = '0px';
//          this.target = this.$slots.target[0].elm;
          if (this.position === 'right') {
            container.style.left = this.target.offsetLeft + this.target.clientWidth - container.clientWidth + 'px';
            container.style.top = this.target.offsetTop + 'px';
          } else {
            container.style.left = this.target.offsetLeft + 'px';
            container.style.top = this.target.offsetTop + 'px';
          }
        }, 0);
      });
    },

    watch: {
      'open': {
        handler: function(val, oldVal) {
          console.log(val);
//          this.setPos();
          if (val === true) {
            this.openDropdown();
          } else {
            this.closeDropdown();
          }
        }
      },
    }
  }
</script>
