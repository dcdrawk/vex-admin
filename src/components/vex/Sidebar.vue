<template>

  <div class="sidebar whiteframe-z3" v-bind:class="{ 'open': open, 'closed': !open}">
    <slot></slot>
  </div>

</template>

<style lang="scss">
  @import '../../styles/components/sidebar';
</style>

<script>
  export default {
    props: [
      'open'
    ]
  }
</script>
