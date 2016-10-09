<template>
  <div class="card">
    <div class="media-container" v-if="media">
      <img :src="media"/>
    </div>
    <div v-if="title || subtitle" class="primary-title">
      <h2 v-if="title" class="title">{{title}}</h2>
      <h3 v-if="subtitle" class="subtitle">{{subtitle}}</h3>
    </div>
    <div class="card-supporting-text">
      <slot></slot>
    </div>

    <div class="card-actions" v-if="_slotContents.actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../../styles/components/_card';
  /**/
  /*.card {*/
    /*margin-bottom: 16px;*/
  /*}*/
  .card {
    img {
      width: 100%;
    }
  }
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
      'actions',
      'media'
    ]
  }
</script>
