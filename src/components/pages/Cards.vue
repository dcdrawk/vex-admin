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
          <div class="col-md-4">
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
          <div class="col-md-4">
            <Card title="Card Title" subtitle="Here is the Subtitle">
              Supporting Text Goes Here
            </Card>
          </div>
        </div>
      </Card>
    </div>

    <!--Card With Actions-->
    <div class="col-md-12">
      <Card title="Card with Actions">
        <!--Card Markup-->
        <div class="row headings">
          <div class="col-md-4"><strong>Markup</strong></div>
          <div class="col-md-8"><strong>Output</strong></div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="selector">
              <span>
                {{ cardWithActionsMarkup }}
              </span>
            </div>
          </div>
          <div class="col-md-4">
            <Card title="Card Title">
              Supporting Text Goes Here
              <div slot="actions">
                <button primary="true">Action 1</button>
                <button primary="true">Action 2</button>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>

    <!--Card With Media-->
    <div class="col-md-12">
      <Card title="Card with Media">
        <!--Card Markup-->
        <div class="row headings">
          <div class="col-md-4"><strong>Markup</strong></div>
          <div class="col-md-8"><strong>Output</strong></div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="selector">
              <span>
                {{ cardWithMediaMarkup }}
              </span>
            </div>
          </div>
          <div class="col-md-4">
            <Card title="Card Title" media="http://placehold.it/640x360">
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
  import Button from '../vex/Button.vue';
  // Exports
  export default {

    // Components
    components: {
      Card,
      Button
    },

    // Data
    data () {
      return {
        cardMarkup: `<Card title="Card Title">
  Supporting Text Goes Here
</Card>`,
        cardWithActionsMarkup: `<Card title="Card Title">
  Supporting Text Goes Here
  <div slot="actions">
    <button primary="true">Action 1</button>
    <button primary="true">Action 2</button>
  </div>
</Card>`,
        cardWithMediaMarkup: `<Card title="Card Title" media="http://placehold.it/640x360">
  Supporting Text Goes Here
</Card>`
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
