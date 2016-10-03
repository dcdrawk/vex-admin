<template>

  <div v-el:panel class="v-expansion-panel" @click="togglePanel();" :class="{ 'closed': !open, 'open': open}">
    <!--<slot></slot>-->
    <div class="row">
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

      <div v-el:content v-if="open" class="col-xs-12" transition="fade">
        <slot></slot>
      </div>
    </div>
  </div>

</template>
<style lang="scss">
  @import '../../styles/components/expansion-panels';

  

</style>
<script>
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

    ready () {
      setTimeout(() => {
        // this.startHeight = this.$els.panel.clientHeight;
        this.$els.panel.style.height = this.startHeight + 'px';
      }, 0);
    },

    methods: {
      togglePanel () {
        this.open = !this.open;

        setTimeout(() => {
          if (this.open) {
            var contentHeight = this.$els.content.clientHeight;
            this.$els.panel.style.height = this.startHeight + contentHeight + 'px';
          } else {
            this.$els.panel.style.height = this.startHeight + 'px';
          }
        }, 0);
      }
    }
  }
</script>
