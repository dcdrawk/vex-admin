<template>
  <div class="row page-content">
    <!--Title-->
    <h1 class="col-md-12 display-1">Cards</h1>

    <!--Card Content-->
    <div class="col-md-12">
      <Card title="Basic Cards">
        <!--Card Markup-->
        <div class="row headings">
          <div class="col-md-4"><strong>Markup</strong></div>
          <div class="col-md-8"><strong>Output</strong></div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="selector">
              <span>
                {{ cardMarkup }}
              </span>
            </div>
          </div>
          <div class="col-md-8">
            <Card title="Card Title">
              Supporting Text Goes Here
            </Card>
          </div>
        </div>

        <!--Card Properties-->
        <div class="row headings">
          <div class="col-md-4"><strong>Property</strong></div>
          <div class="col-md-8"><strong>Output</strong></div>
        </div>

        <!--Subheader Card-->
        <div class="row centered">
          <div class="col-md-4">
            <div class="no-margin">
              <span class="selector">subtitle="Here is the Subtitle"</span>
            </div>
          </div>
          <div class="col-md-8">
            <Card title="Card Title" subtitle="Here is the Subtitle">
              Supporting Text Goes Here
            </Card>
          </div>
        </div>

        <!--Subheader Card-->
        <div class="row centered">
          <div class="col-md-4">
            <div class="no-margin">
              <span class="selector">subtitle="Here is the Subtitle"</span>
            </div>
          </div>
          <div class="col-md-8">
            <Card title="Card Title" subtitle="Here is the Subtitle" :actions="actions">
              Supporting Text Goes Here
            </Card>
          </div>
        </div>
      </Card>
    </div>
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
        cardMarkup: `<Card title="Card Title">
  Supporting Text Goes Here
</Card>`,
        actions: ['Test 1', 'Test 2']
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
