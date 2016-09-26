<template>
  <div class="row page-content">
    <!--Title-->
    <h1 class="col-xs-12 display-1">Chips</h1>

    <!--Card Content-->
    <v-card title="Chips" class="col-xs-12">
      Card Content

      <v-chips :chips="demoChips" placeholder="+add a chip"></v-chips>
    </v-card>
  </div>
</template>

<script>
  // Imports
  import VCard from '../vex/Card.vue';
  import VChips from '../vex/VChips.vue';

  // Exports
  export default {

    // Components
    components: {
      VCard,
      VChips
    },

    // Data
    data () {
      return {
        demoChips: ['Chip 1', 'Chip 2', 'Chip 3'],
        focused: false
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
