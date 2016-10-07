<template>
  <div class="material-data-table" :class="{ 'responsive': responsive, 'bordered': border, 'striped': striped, 'hover': hover }">
    <!--TABLE-->
    <div class="material-data-table-container">
      <table>
        <thead>
          <tr>
            <th v-if="selection" class="v-selection v-select-all">
              <v-checkbox value="true"></v-checkbox>
            </th>
            <th v-for="column in columns" :class="{ 'v-first-col': $index === 0 }">
              <i class="material-icons v-order-by" v-if="$index !== 0"
                 v-bind:class="{ 'hidden': order !== column.key, 'descending': direction === 1, 'ascending': direction === -1}">
                arrow_downward
              </i>
              <span @click="orderBy(column.key);">{{ column.head }}</span>
              <i class="material-icons v-order-by" v-if="$index === 0"
                 v-bind:class="{ 'hidden': order !== column.key, 'descending': direction === 1, 'ascending': direction === -1}">
                arrow_downward
              </i>
            </th>
          </tr>
        </thead>
        <tbody>
        <!--<tr v-for="row in rows | filterBy filter in 'name' | orderBy order direction | testLength 'count'" >-->
          <tr v-for="row in rows | filterBy filter in 'name' | orderBy order direction | numRows 'count'">
            <td v-if="selection" class="v-selection">
              <v-checkbox value="true"></v-checkbox>
            </td>
            <td v-for="column in columns" data-title="{{[column.head]}}" :class="{ 'v-first-col': $index === 0 }">
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
  import Button from './Button';
  import VCheckbox from './Checkbox.vue';

  export default {

    components: {
      Button,
      VCheckbox
    },

    props: [
      'rows',
      'columns',
      'order',
      'direction',
      'filter',
      'count',
      'responsive',
      'border',
      'striped',
      'hover',
      'selection'
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
