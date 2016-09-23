<template>
  <div class="row page-content">
    <!--Title-->
    <h1 class="col-xs-12 display-1">Toasts</h1>

    <!--Card Content-->
    <v-card title="Basic Toasts" class="col-xs-12">
      <!--Button Markup-->
      <div class="row headings">
        <div class="col-xs-4"><strong>Markup</strong></div>
        <div class="col-xs-8"><strong>Output</strong></div>
      </div>

      <div class="row">
        <div class="col-xs-4">
          <div>
            <span class="selector">
              {{ toastMarkup }}
            </span>
          </div>
        </div>
        <div class="col-xs-8">
          <div>
            <v-button @click="toggleToast('1')">show basic toast</v-button>
          </div>
        </div>
      </div>

      <!--Button Properties-->
      <div class="row headings">
        <div class="col-xs-4"><strong>Property</strong></div>
        <div class="col-xs-8"><strong>Output</strong></div>
      </div>

      <!--Toast with Action-->
      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">action="undo" :function="testAlert"</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div>
            <v-button @click="toggleToast('2')">show toast with action</v-button>
          </div>
        </div>
      </div>

      <v-toast :toggle.sync="show1" text="Simple Toast"></v-toast>

      <v-toast :toggle.sync="show2" text="Toast with Action" action-text="undo" :action="testAlert"></v-toast>

    </v-card>
  </div>
</template>

<script>
  // Imports
  import VCard from '../vex/Card.vue';
  import VToast from '../vex/Toast.vue';
  import VButton from '../vex/Button.vue';

  // Exports
  export default {

    // Components
    components: {
      VCard,
      VToast,
      VButton
    },

    // Data
    data () {
      return {
        show1: false,
        show2: false,
        toastMarkup: '<v-toast :show.sync="show" text="Simple Toast" action="undo"></v-toast>'
      }
    },

    methods: {
      toggleToast (number) {
        if (+number === 1) {
          this.show1 = true;
        } else {
          this.show2 = true;
        }
      },

      testAlert () {
        window.alert('dwadadad');
      }
    },



  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
//Import or add any styles here
</style>
