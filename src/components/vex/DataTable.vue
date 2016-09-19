<template>
  <div class="material-data-table">
    <!--TABLE-->
    <div class="material-data-table-container">
      <table>
        <thead>
          <tr>
            <th v-for="column in columns">
              <i class="material-icons" v-if="$index !== 0"
                 v-bind:class="{'hidden': order !== column.key, 'descending': direction === 1, 'ascending': direction === -1}">
                arrow_downward
              </i>
              <span @click="orderBy(column.key);">{{ column.head }}</span>
              <i class="material-icons" v-if="$index === 0"
                 v-bind:class="{'hidden': order !== column.key, 'descending': direction === 1, 'ascending': direction === -1}">
                arrow_downward
              </i>
            </th>
          </tr>
        </thead>
        <tbody>
        <!--<tr v-for="row in rows | filterBy filter in 'name' | orderBy order direction | testLength 'count'" >-->
          <tr v-for="row in rows | filterBy filter in 'name' | orderBy order direction | numRows 'count'">
            <td v-for="column in columns">
              {{row[column.key]}}
            </td>
          </tr>
        </tbody>
      </table>
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
  import Button from './Button'

  export default{
    components: {
      Button
    },

    props: [
      'rows',
      'columns',
      'order',
      'direction',
      'filter',
      'count'
    ],
    methods: {
      orderBy(property) {
        if (this.order === property) {
          this.direction = this.direction * -1;
        } else {
          this.direction = 1;
        }
        this.order = property;
      }
    },
    filters: {
      //Get the number of rows
      numRows: function (arr) {
        this.$set('count', arr.length);
        return arr;
      }
    }
  }
</script>
