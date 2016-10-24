<template>
  <div class="doc-page">

    <!--Card Content-->
    <v-card title="Card Title" class="col-xs-12">
      Card Content
    </v-card>
  </div>
</template>

<script>
  // Imports
  import VCard from '../vex/Card.vue';

  // Exports
  export default {

    // Components
    components: {
      VCard
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
