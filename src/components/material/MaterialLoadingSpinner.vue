<template>
  <div class="showbox">
    <div class="loader">
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10"/>
      </svg>
    </div>
  </div>
</template>
<style lang="scss">
  @import '../../styles/components/loadingspinner';
</style>
<script>
  import PaperRipple from 'paper-ripple'

  export default {
    props: [
      'color'
    ],
  }
</script>
