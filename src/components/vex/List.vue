<template>

  <ul class="list" v-bind:class="{ 'dense': dense }">
    <slot></slot>
  </ul>

</template>
<style lang="scss">
  @import '../../styles/components/_buttons';
  .list-item i {
    vertical-align: middle;
  }
</style>
<script>

  export default{
    props: [
      'dense'
    ]

  }
</script>
