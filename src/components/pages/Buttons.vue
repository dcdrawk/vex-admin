<template>
  <div class="row page-content">
    <!--Title-->
    <h1 class="col-xs-12 col-sm-12 col-xs12 display-1">Buttons</h1>

    <v-card title="Flat / Raised Buttons" class="col-xs-12">

      <!--Button Markup-->
      <div class="row headings">
        <div class="col-xs-4"><strong>Markup</strong></div>
        <div class="col-xs-8"><strong>Output</strong></div>
      </div>

      <div class="row">
        <div class="col-xs-4">
          <div>
            <span class="selector">
              {{ buttonSelector }}
            </span>
          </div>
        </div>
        <div class="col-xs-8">
          <div>
            <v-button>Button</v-button>
          </div>
        </div>
      </div>

      <!--Button Properties-->
      <div class="row headings">
        <div class="col-xs-4"><strong>Property</strong></div>
        <div class="col-xs-8"><strong>Output</strong></div>
      </div>

      <!--Primary Button-->
      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">:primary="true"</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div>
              <v-button :primary="true">Button</v-button>
          </div>
        </div>
      </div>

      <!--Secondary Button-->
      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">:secondary="true"</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div>
            <v-button :secondary="true">Button</v-button>
          </div>
        </div>
      </div>

      <!--Raised Button-->
      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">:raised="true"</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div>
            <v-button :raised="true">Button</v-button>
          </div>
        </div>
      </div>

      <!--Raised Primary Button-->
      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">:primary="true" :raised="true"</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div>
            <v-button :primary="true" :raised="true">Button</v-button>
          </div>
        </div>
      </div>

      <!--Raised Secondary Button-->
      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">:secondary="true" :raised="true"</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div>
            <v-button :secondary="true" :raised="true">Button</v-button>
          </div>
        </div>
      </div>
    </v-card>


    <v-card title="Flat / Raised Buttons" class="col-xs-12">

      <!--Button Markup-->
      <div class="row headings">
        <div class="col-xs-4"><strong>Markup</strong></div>
        <div class="col-xs-8"><strong>Output</strong></div>
      </div>

      <div class="row">
        <div class="col-xs-4">
          <div>
            <span class="selector">
              {{ iconButtonMarkup }}
            </span>
          </div>
        </div>
        <div class="col-xs-8">
          <div>
            <v-icon-button icon="person"></v-icon-button>
          </div>
        </div>
      </div>

      <!--Button Properties-->
      <div class="row headings">
        <div class="col-xs-4"><strong>Property</strong></div>
        <div class="col-xs-8"><strong>Output</strong></div>
      </div>

      <!--Primary Button-->
      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">:primary="true"</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div>
            <v-icon-button icon="person" :primary="true">Button</v-icon-button>
          </div>
        </div>
      </div>

      <!--Secondary Button-->
      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">:secondary="true"</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div>
            <v-icon-button icon="person" :secondary="true">Button</v-icon-button>
          </div>
        </div>
      </div>

      <!--Raised Button-->
      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">:raised="true"</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div>
            <v-icon-button icon="person" :raised="true"></v-icon-button>
          </div>
        </div>
      </div>

      <!--Raised Primary Button-->
      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">:primary="true" :raised="true"</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div>
            <v-icon-button icon="person" :raised="true" :primary="true"></v-icon-button>
          </div>
        </div>
      </div>

      <!--Raised Secondary Button-->
      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">:secondary="true" :raised="true"</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div>
            <v-icon-button icon="person" :raised="true" :secondary="true"></v-icon-button>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
  import VCard from '../vex/Card.vue';
  import VButton from '../vex/Button.vue';
  import VIconButton from '../vex/IconButton.vue';

  export default {
    components: {
      VCard,
      VButton,
      VIconButton
    },
    data () {
      return {
        buttonSelector: '<v-button>Button</v-button>',
        iconButtonMarkup: '<v-icon-button icon="person"></v-icon-button>'
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>
