<template>
  <div class="row page-content">
    <!--Title-->
    <h1 class="col-xs-12 display-1">Page Title</h1>

    <!--Card Content-->
    <Card title="Card Title" class="col-xs-12">
      Card Content
    </Card>
  </div>
</template>

<script>
  // Imports
  import Card from '../vex/Card.vue';

  // Exports
  export default {

    // Components
    components: {
      Card
    },

    // Data
    data () {
      return {
        msg: 'Hello World'
      }
    },

    methods: {

    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
//Import or add any styles here
</style>
