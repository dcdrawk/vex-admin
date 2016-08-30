<template>
  <div class="hello test">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {

  props: ['title'],

  data () {
    console.log(this)
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      props: ['title']
//      msg: 'Hello test'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}
</style>
