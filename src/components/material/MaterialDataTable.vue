<template>
  <div class="material-data-table">
    Data table!
      <table>
        <thead>
          <tr>
            <th v-for="header in headers">{{ header.title }}</th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="row in rows">
            <td v-for="key in keys">
              {{ row[key] }}
            </td>
          </tr>

        </tbody>
      </table>
  </div>

</template>

<style lang="scss" scoped>
  @import '../../styles/components/datatables';
  /**/
  table {
    width: 100%;
      &.fixed {

      }
  }
</style>

<script>
  import Button from './MaterialButton'

  export default{
    components: {
      Button
    },
    props: [
      'headers',
      'rows',
      'keys'
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
