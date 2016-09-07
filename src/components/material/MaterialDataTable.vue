<template>
  <div class="material-data-table">
    Data table!
      <table>
        <tr v-for="row in rows">{{ row.name }}</tr>
      </table>
  </div>

</template>

<style lang="scss">
  @import '../../styles/components/datatables';
  /**/
</style>

<script>
  import Button from './MaterialButton'

  export default{
    components: {
      Button
    },
    props: [
      'rows',
    ],

    data () {
      return {
        msg: 'hello vue'
      }
    },

    ready () {
      console.log('data table ready!');
      console.log(this);
    }
  }
</script>
