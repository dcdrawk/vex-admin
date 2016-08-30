<template>
  <div id="app">

    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <material-card title="Card Title"
                subtitle="Card Subtitle Text"
                content="this is the content"
                v-bind:actions="actions"
          ></material-card>

        </div>

        <div class="col-md-12 col-sm-12 col-xs-12">
          <material-button raised="true" primary="true">MY BUTTON</material-button>
        </div>

        <router-view></router-view>

      </div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import MaterialCard from './components/material/MaterialCard'
import MaterialButton from './components/material/MaterialButton'

//var router = new VueRouter();
//console.log('test', router)
export default {

  components: {
    Hello,
    MaterialCard,
    MaterialButton
  },
  data () {
    return {
      actions: ['test', 'test2']
    }
  }
}
</script>

<style lang="scss">
@import './styles/core';

html {
  height: 100%;
}
</style>
