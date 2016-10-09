<template>

  <div v-el:panel class="v-expansion-panel" @click="togglePanel();" :class="{ 'closed': !open, 'open': open}">
    <!--<slot></slot>-->
    <div v-el:container class="row">
      <div class="col-xs-3 v-expansion-title">
        <strong>{{ title }}</strong>
      </div>

      <div class="col-xs-3 v-expansion-secondary">
        {{ summaryText }}
      </div>

      <div class="col-xs-3 v-expansion-secondary">
        {{ secondaryText }}
      </div>

      <div class="col-xs-3 v-expansion-secondary text-right">
        <i class="material-icons" :class="{ 'closed': !open, 'open': open}">keyboard_arrow_down</i>
      </div>

      <div v-el:content v-show="open" class="col-xs-12" transition="fade">
        <slot></slot>
      </div>
    </div>
  </div>

</template>
<style lang="scss">
  @import '../../styles/components/expansion-panels';
</style>
<script>
  import gsap from 'gsap';
  // import TweenMax from 'gsap';

  export default{
    props: [
      'open',
      'title',
      'summaryText',
      'secondaryText',

    ],

    data () {
      return {
        startHeight: 48
      }
    },

    // mounted () {

    // },

    methods: {
      togglePanel () {
        this.open = !this.open;

        setTimeout(() => {
          if (this.open) {
            var contentHeight = this.$refs.content.clientHeight;
            gsap.TweenLite.to(this.$refs.panel, 0.3, { height: this.startHeight + contentHeight + "px", margin: '16px 0', ease: gsap.Power1.easeOut });
          } else {
            gsap.TweenLite.to(this.$refs.panel, 0.3, { height: "48px", margin: '0 0', ease: gsap.Power1.easeOut });
          }
        }, 0);
      }
    }
  }
</script>
