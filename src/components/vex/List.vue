<template>

  <ul class="list" v-bind:class="{ 'dense': dense }">
    <slot></slot>
  </ul>

</template>
<style lang="scss">
  @import '../../styles/components/_buttons';
</style>
<script>

  export default{
    props: [
      'dense'
    ]

  }
</script>
