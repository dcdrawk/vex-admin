<template>
  <div class="row page-content">
    <h1 class="col-xs-12 display-1">Typography</h1>
    <Card title="Headings" class="col-xs-12 typography-demo">

      <div class="row headings">
        <div class="col-xs-4"><strong>Selector</strong></div>
        <div class="col-xs-8"><strong>Output</strong></div>
      </div>

      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">.display-4</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div class="display-4">Light 112px</div>
        </div>
      </div>

      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">.display-3</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div class="display-3">Regular 56px</div>
        </div>
      </div>

      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">.display-2</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div class="display-2">Regular 45px</div>
        </div>
      </div>

      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">.display-1</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div class="display-1">Regular 34px</div>
        </div>
      </div>

      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">.headline</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div class="headline">Regular 24px</div>
        </div>
      </div>

      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">.title</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div class="title">Medium 20px</div>
        </div>
      </div>

      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">.subheading</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div class="subheading">Regular 16px</div>
        </div>
      </div>

    </Card>


    <Card title="Body Text" class="col-xs-12 typography-demo">

      <div class="row headings">
        <div class="col-xs-4">Selector</div>
        <div class="col-xs-8">Output</div>
      </div>

      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">.body-1</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div class="body-1">Regular 14px</div>
        </div>
      </div>

      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">.body-2</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div class="body-2">Medium 14px</div>
        </div>
      </div>

      <div class="row centered">
        <div class="col-xs-4">
          <div class="no-margin">
            <span class="selector">.caption</span>
          </div>
        </div>
        <div class="col-xs-8">
          <div class="caption">Regular 12px</div>
        </div>
      </div>

    </Card>
  </div>
</template>

<script>
  import Card from '../../../components/vex/Card.vue';

  export default {
    components: {
      Card
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
