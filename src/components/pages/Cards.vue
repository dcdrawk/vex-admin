<template>
  <div class="row page-content">
    <!--Title-->
    <h1 class="col-xs-12 display-1">Cards</h1>

    <!--Card Content-->
    <!--<div class="col-xs-12">-->
      <v-card title="Basic Cards" class="col-xs-12">
        <!--Card Markup-->
        <div class="row headings">
          <div class="col-xs-4"><strong>Markup</strong></div>
          <div class="col-xs-8"><strong>Output</strong></div>
        </div>

        <div class="row">
          <div class="col-xs-4">
            <div class="selector">
              <span>
                {{ cardMarkup }}
              </span>
            </div>
          </div>
          <div class="col-xs-4">
            <v-card title="Card Title">
              Supporting Text Goes Here
            </v-card>
          </div>
        </div>

        <!--Card Properties-->
        <div class="row headings">
          <div class="col-xs-4"><strong>Property</strong></div>
          <div class="col-xs-8"><strong>Output</strong></div>
        </div>

        <!--Subheader Card-->
        <div class="row centered">
          <div class="col-xs-4">
            <div class="no-margin">
              <span class="selector">subtitle="Here is the Subtitle"</span>
            </div>
          </div>
          <div class="col-xs-4">
            <v-card title="Card Title" subtitle="Here is the Subtitle">
              Supporting Text Goes Here
            </v-card>
          </div>
        </div>
      </v-card>
    <!--</div>-->

    <!--Card With Actions-->
    <!--<div >-->
      <v-card title="Card with Actions" class="col-xs-12">
        <!--Card Markup-->
        <div class="row headings">
          <div class="col-xs-4"><strong>Markup</strong></div>
          <div class="col-xs-8"><strong>Output</strong></div>
        </div>

        <div class="row">
          <div class="col-xs-4">
            <div class="selector">
              <span>
                {{ cardWithActionsMarkup }}
              </span>
            </div>
          </div>
          <div class="col-xs-4">
            <v-card title="Card Title">
              Supporting Text Goes Here
              <div slot="actions">
                <v-button primary="true">Action 1</v-button>
                <v-button primary="true">Action 2</v-button>
              </div>
            </v-card>
          </div>
        </div>
      </v-card>
    <!--</div>-->

    <!--Card With Media-->
    <!--<div class="col-xs-12">-->
      <v-card title="Card with Media" class="col-xs-12">
        <!--Card Markup-->
        <div class="row headings">
          <div class="col-xs-4"><strong>Markup</strong></div>
          <div class="col-xs-8"><strong>Output</strong></div>
        </div>

        <div class="row">
          <div class="col-xs-4">
            <div class="selector">
              <span>
                {{ cardWithMediaMarkup }}
              </span>
            </div>
          </div>
          <div class="col-xs-4">
            <v-card title="Card Title" media="http://placehold.it/640x360">
              Supporting Text Goes Here
            </v-card>
          </div>
        </div>
      </v-card>
    <!--</div>-->
  </div>
</template>

<script>
  // Imports
  import VCard from '../vex/Card.vue';
  import VButton from '../vex/Button.vue';
  
  // Exports
  export default {

    // Components
    components: {
      VCard,
      VButton
    },

    // Data
    data () {
      return {
        cardMarkup: `<v-card title="Card Title">
  Supporting Text Goes Here
</v-card>`,
        cardWithActionsMarkup: `<v-card title="Card Title">
  Supporting Text Goes Here
  <div slot="actions">
    <v-button primary="true">Action 1</v-button>
    <v-button primary="true">Action 2</v-button>
  </div>
</v-card>`,
        cardWithMediaMarkup: `<v-card title="Card Title" media="http://placehold.it/640x360">
  Supporting Text Goes Here
</v-card>`
      }
    },

    methods: {
      testAlert(ev) {
        console.log('test');
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  //Import or add any styles here
</style>
