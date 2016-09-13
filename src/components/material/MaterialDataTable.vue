<template>
  <div class="material-data-table">

    <div class="material-data-table-header">
      <h2>{{ title }}</h2>
    </div>
    <div class="material-data-table-container">

      <!--<table cellspacing="0" cellpadding="0">-->
        <slot></slot>
        <!--<thead>-->
          <!--<tr>-->
            <!--<th v-for="header in headers">{{ header.title }}</th>-->
          <!--</tr>-->
        <!--</thead>-->
        <!--<tbody>-->

          <!--<tr v-for="row in rows">-->
            <!--<td v-for="key in keys">-->
              <!--{{ row[key] }}-->
            <!--</td>-->
          <!--</tr>-->

        <!--</tbody>-->
      <!--</table>-->
    </div>
  </div>

</template>

<style lang="scss">
  @import '../../styles/components/datatables';
  /**/
  h2 {
    font-size: 20px;
  }
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
      'title',
      'headers',
      'rows',
      'keys',

    ],

//    data () {
//      return {
//        msg: 'hello vue'
//      }
//    },

//    ready () {
//      console.log('data table ready!');
//      console.log(this);
//    }
  }
</script>
