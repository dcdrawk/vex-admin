<template>
  <div class="row">
    <!--Title-->
    <h1 class="col-md-12 display-1">Buttons</h1>
    <Card title="Flat / Raised Buttons" class="col-md-12">

      <!--Button Markup-->
      <div class="row headings">
        <div class="col-md-4"><strong>Markup</strong></div>
        <div class="col-md-8"><strong>Output</strong></div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div>
            <span class="selector">
              {{ buttonSelector }}
            </span>
          </div>
        </div>
        <div class="col-md-8">
          <div>
            <Button>Button</Button>
          </div>
        </div>
      </div>

      <!--Button Properties-->
      <div class="row headings">
        <div class="col-md-4"><strong>Property</strong></div>
        <div class="col-md-8"><strong>Output</strong></div>
      </div>

      <!--Primary Button-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">:primary="true"</span>
          </div>
        </div>
        <div class="col-md-8">
          <div>
              <Button :primary="true">Button</Button>
          </div>
        </div>
      </div>

      <!--Secondary Button-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">:secondary="true"</span>
          </div>
        </div>
        <div class="col-md-8">
          <div>
            <Button :secondary="true">Button</Button>
          </div>
        </div>
      </div>

      <!--Raised Button-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">:raised="true"</span>
          </div>
        </div>
        <div class="col-md-8">
          <div>
            <Button :raised="true">Button</Button>
          </div>
        </div>
      </div>

      <!--Raised Primary Button-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">:primary="true" :raised="true"</span>
          </div>
        </div>
        <div class="col-md-8">
          <div>
            <Button :primary="true" :raised="true">Button</Button>
          </div>
        </div>
      </div>

      <!--Raised Secondary Button-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">:secondary="true" :raised="true"</span>
          </div>
        </div>
        <div class="col-md-8">
          <div>
            <Button :secondary="true" :raised="true">Button</Button>
          </div>
        </div>
      </div>
    </Card>


    <Card title="Flat / Raised Buttons" class="col-md-12">

      <!--Button Markup-->
      <div class="row headings">
        <div class="col-md-4"><strong>Markup</strong></div>
        <div class="col-md-8"><strong>Output</strong></div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div>
            <span class="selector">
              {{ iconButtonMarkup }}
            </span>
          </div>
        </div>
        <div class="col-md-8">
          <div>
            <icon-button icon="person"></icon-button>
          </div>
        </div>
      </div>

      <!--Button Properties-->
      <div class="row headings">
        <div class="col-md-4"><strong>Property</strong></div>
        <div class="col-md-8"><strong>Output</strong></div>
      </div>

      <!--Primary Button-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">:primary="true"</span>
          </div>
        </div>
        <div class="col-md-8">
          <div>
            <icon-button icon="person" :primary="true">Button</icon-button>
          </div>
        </div>
      </div>

      <!--Secondary Button-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">:secondary="true"</span>
          </div>
        </div>
        <div class="col-md-8">
          <div>
            <icon-button icon="person" :secondary="true">Button</icon-button>
          </div>
        </div>
      </div>

      <!--Raised Button-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">:raised="true"</span>
          </div>
        </div>
        <div class="col-md-8">
          <div>
            <icon-button icon="person" :raised="true"></icon-button>
          </div>
        </div>
      </div>

      <!--Raised Primary Button-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">:primary="true" :raised="true"</span>
          </div>
        </div>
        <div class="col-md-8">
          <div>
            <icon-button icon="person" :raised="true" :primary="true"></icon-button>
          </div>
        </div>
      </div>

      <!--Raised Secondary Button-->
      <div class="row centered">
        <div class="col-md-4">
          <div class="no-margin">
            <span class="selector">:secondary="true" :raised="true"</span>
          </div>
        </div>
        <div class="col-md-8">
          <div>
            <icon-button icon="person" :raised="true" :secondary="true"></icon-button>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
  import Card from '../vex/Card.vue';
  import Button from '../vex/Button.vue';
  import IconButton from '../vex/IconButton.vue';

  export default {
    components: {
      Card,
      Button,
      IconButton
    },
    data () {
      return {
        buttonSelector: '<Button>Button</Button>',
        iconButtonMarkup: '<icon-button icon="person"></icon-button>'
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .typography-demo > div {
    margin: 16px 0;
  }
  .headings {
    border-bottom: 1px solid rgba(0,0,0,.12);
    padding: 16px 0;
  }
  .selector {
    background-color: rgba(0,0,0,.12);
    padding: 8px;
    display: inline;
    font-family: 'Roboto Mono', monospace;
    color: rgb(63, 81, 181)
  }
  .no-margin {
    margin: 0 0 0 0;
  }

  .typography-demo .row {
    margin-bottom: 16px;
  }

</style>
