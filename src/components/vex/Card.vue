<template>
  <div class="card">

    <div v-if="title || subtitle" class="primary-title">
      <h2 v-if="title" class="title">{{title}}</h2>
      <h3 v-if="subtitle" class="subtitle">{{subtitle}}</h3>
    </div>
    <div class="card-supporting-text">
      <slot></slot>
    </div>

    <div v-if="actions" class="card-actions">
      <button v-for="item in actions" primary="true">{{ item }}</button>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../../styles/components/_card';
  /**/
</style>

<script>
  import Button from './Button'

  export default{
    components: {
      Button
    },
    props: [
      'title',
      'subtitle',
      'content',
      'actions'
    ],

    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
