<template>
  <div class="v-dropdown">
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
        container.classList.remove('closed')
        container.classList.add('open');
        gsap.TweenLite.to(container, 0.25, { height: this.totalHeight + "px", opacity: 1, ease: gsap.Power1.easeOut });
//        console.log(this.target);
      },

      closeDropdown () {
        var container = this.$refs.container;
        container.classList.remove('open');
        container.classList.add('closed');
        gsap.TweenLite.to(container, 0.25, { height: '0px', opacity: 0, ease: gsap.Power1.easeOut });
        this.$emit('toggle');
      },
    },

    data () {
      return {
        totalHeight: 0,
        target: undefined
      }
    },

    mounted () {
//      this.$nextTick(() => {
        setTimeout(() => {
        console.log(this);
        this.target = this.$slots.target[0].elm;
        console.log(this.target);

        var container = this.$slots.menu[0].elm;
        console.dir(container);
        console.dir(container.clientHeight);
        console.dir(container.offsetHeight);
        this.totalHeight = container.clientHeight + 16;
//        console.log(this.totalHeight);
//          var container = this.$refs.container;
//          console.dir(container);
//          this.totalHeight = container.clientHeight;
//          container.style.height = '0px';
////          this.target = this.$slots.target[0].elm;
          if (this.position === 'right') {
            this.$refs.container.style.left = this.target.offsetLeft + this.target.clientWidth - container.clientWidth + 'px';
            console.log(this.target.offsetLeft);
            console.log(this.target.clientWidth);
            console.log(container.clientWidth);
            this.$refs.container.style.top = this.target.offsetTop + 'px';
          } else {
            this.$refs.container.style.left = this.target.offsetLeft + 'px';
            this.$refs.container.style.top = this.target.offsetTop + 'px';
          }
        }, 0);
//      });
    },

    watch: {
      'open': {
        handler: function(val, oldVal) {
          console.log(val);
//          thi s.setPos();
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
