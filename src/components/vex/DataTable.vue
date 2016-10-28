<template>
  <div class="material-data-table" :class="{ 'responsive': responsive, 'bordered': border, 'striped': striped, 'hover': hover }">
    <!--TABLE-->
    <div class="material-data-table-container">
      <table ref="table">
        <thead>
          <tr>
            <th v-if="selection" class="v-selection v-select-all" >
              <v-checkbox :value="selectAll" @click.native="toggleSelect()" @checked="selectAll = $event" ref="selectAll"></v-checkbox>
            </th>
            <th v-for="(column, index) in tableColumns" :class="{ 'v-first-col': index === 0 }">
              <i class="material-icons v-order-by" v-if="index !== 0"
                 v-bind:class="{ 'hidden': tableOrder !== column.key, 'descending': tableDirection === 1, 'ascending': tableDirection === -1}">
                arrow_downward
              </i>
              <span @click="orderBy(column.key);">{{ column.head }}</span>
              <i class="material-icons v-order-by" v-if="index === 0"
                 v-bind:class="{ 'hidden': tableOrder !== column.key, 'descending': tableDirection === 1, 'ascending': tableDirection === -1}">
                arrow_downward
              </i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filteredRows">
            <td v-if="selection" class="v-selection">
              <v-checkbox :value="row[selectionKey]" @click.native="checkSelection()" @checked="selectRow(row, selectionKey, $event)" ref="checkboxes"></v-checkbox>
            </td>
            <td v-for="(column, index) in tableColumns" :data-title="[column.head]" :class="{ 'v-first-col': index === 0, 'v-editable': column.editable }">
              <span v-if="!column.options">
                <span class="v-col-value" v-if="row !== editRow || column.key !== editKey" @click="editField($event, column.editable, row, column.key);">{{row[column.key]}}</span>
                <span v-if="row === editRow && column.key === editKey">
                  <v-input ref="editinput" :value="editValue" :focus="true" @keyup.native.enter="saveEdit(editValue, row, column.key)" @keyup.native.esc="cancelEdit(row, column.key)" @input="editValue = $event"></v-input>
                </span>
              </span>
              <div class="v-column-options">
                <v-select v-if="column.options" :value="row[column.key]" :options="column.options">{{row[column.key]}}</v-select>
              </div>
              <i class="material-icons v-table-edit-icon" v-if="column.editable && row !== editRow || column.editable && column.key !== editKey" @click="editField($event, column.editable, row, column.key);">edit</i>
              <i class="material-icons v-table-save-icon" v-if="column.editable && row === editRow && column.key === editKey" @click="saveEdit(editValue, row, column.key)">check</i>
              <i class="material-icons v-table-cancel-icon" v-if="column.editable && row === editRow && column.key === editKey" @click="cancelEdit(row, column.key)">close</i>
            </td>
          </tr>

          <tr v-if="filteredRows.length === 0">
            <td :colspan="columns.length" class="v-results-message">
              {{ noResults }}
            </td>
          </tr>
        </tbody>
      </table>

      <!--<v-dialog :show="editing" @hide="editing = false" :small="true">-->
        <!--&lt;!&ndash;<p>Confirm you opened the dialog</p>&ndash;&gt;-->
        <!--<v-input ref="editinput" :value="editValue" :focus="true" @keyup.native.enter="saveEdit(editValue)" @keyup.native.esc="cancelEdit()" @input="editValue = $event"></v-input>-->
        <!--<div slot="actions">-->
          <!--<v-button :primary="true" @click.native="showDialog.small = false">Cancel</v-button>-->
          <!--<v-button :primary="true" @click.native="showAlert('you clicked confirm', 'small')">Save</v-button>-->
        <!--</div>-->
      <!--</v-dialog>-->
      <!--<transition name="fade">-->
        <!--<div ref="editor" v-show="editing" class="v-data-table-edit-container">-->
          <!--<v-input ref="editinput" :value="editValue" :focus="true" @keyup.native.enter="saveEdit(editValue)" @keyup.native.esc="cancelEdit()" @input="editValue = $event"></v-input>-->
          <!--<div class="v-edit-buttons">-->
            <!--<v-button class="cancel" :primary="true" @click.native="cancelEdit()">cancel</v-button>-->
            <!--<v-button class="save" :primary="true" @click.native="saveEdit(editValue)">save</v-button>-->
          <!--</div>-->
        <!--</div>-->
      <!--</transition>-->

      <!--<div class="v-table-edit-backdrop" v-if="editing" @click="cancelEdit()"></div>-->

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
    table-layout: fixed;
    .v-input-container {
      margin: 14px 0;
      input {
        margin-bottom: 1px;
        border-bottom: 1px solid rgba(0,0,0,.24);
        width: 150px;
        position: relative;
        right: 40px;
      }
    }
    .v-input-container.focus input {
      margin-bottom: 0;
    }
  }
  .v-dialog-content {
    margin-bottom: 0;
  }


</style>

<script>
  import VButton from './Button';
  import VCheckbox from './Checkbox.vue';
  import VInput from './Input.vue';
  import VSelect from './Select.vue';
  import VDialog from './Dialog.vue';
  export default {

    components: {
      VButton,
      VCheckbox,
      VInput,
      VSelect,
      VDialog
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
      'selection',
      'selectionKey',
      'options',
      'noResults'
    ],

    // Data
    data () {
      return {
        tableRows: this.rows || [],
        tableColumns: this.columns || [],
        tableOrder: this.order || '',
        tableDirection: this.direction || 1,
        selectAll: false,
        editing: false,
        editValue: '',
        editRow: undefined,
        editKey: undefined
      }
    },

    mounted () {
        if (this.selection) {
          this.setSelection();
        }
    },

    // Methods
    methods: {
      orderBy (property) {
        if (this.tableOrder === property) {
          this.tableDirection = this.tableDirection * -1;
        } else {
          this.tableDirection = 1;
        }
        this.tableOrder = property;
      },

      toggleSelect () {
        this.$nextTick(() => {
          this.tableRows.forEach((item, index) => {
            if (this.selectAll) {
              console.log(this.$refs.checkboxes[index]);
              this.$refs.checkboxes[index].toggleCheckbox(true);
            } else {
              this.$refs.checkboxes[index].toggleCheckbox(false);
            }
          });
        });
        this.$emit('selected', this.tableRows);
      },

      checkSelection () {
        setTimeout(() => {
          var allSelected = true;
          this.tableRows.forEach((item, index) => {
            if (!item[this.selectionKey]) {
              allSelected = false;
            }
          });
          this.$refs.selectAll.toggleCheckbox(allSelected);
        }, 0);
      },

      setSelection () {
        this.tableRows.forEach((item, index) => {
          if (!item[this.selectionKey]) {
            item.selected = false;
          }
        });
        this.tableRows = JSON.parse(JSON.stringify(this.tableRows));
      },

      selectRow(row, key, ev) {
        row[key] = ev;
        this.$emit('selected', this.tableRows);
      },

      editField (ev, editable, row, key) {
          console.log('edit');
          if (this.editRow) {
            this.editRow.editing = false;
          }

          if (editable && !row.editing) {
            row.editing = key;
            console.log(row, key);
            this.editRow = row;
            this.editKey = key;
            this.editValue = row[key];
              this.$nextTick(() => {
                var input = this.$refs.editinput[0].$el.getElementsByTagName('input')[0];
                input.focus();
              });
          }
      },

      cancelEdit (row, key) {
        row.editing = false;
        this.editKey = '';
        this.editing = false;
        this.editRow.editing = false;
      },

      saveEdit (value, row, key) {
        console.log('save');
        row.editing = false;

        row[key] = value;

        this.editing = false;
        this.editRow.editing = false;
        this.editKey = '';
        this.editRow[this.editKey] = value;
      }
    },

    // Filters
    // filters: {
    //
    //   //Get the number of rows
    //   numRows: function (arr) {
    //     this.$set('count', arr.length);
    //     return arr;
    //   }
    // },

    computed: {
      filteredRows: function () {
        if (this.filter) {
          return this.tableRows.filter((row) => {
              return row.name.toLowerCase().indexOf(this.filter) >= 0;
          })
          .sort((a, b) => {
            a[this.tableOrder] < b[this.tableOrder] ? -1 : 1
          });
        } else {
          if (this.tableOrder) {
            console.log('order?');
            console.log(this.tableOrder);
            return this.tableRows.sort((a, b) => {
              return a[this.tableOrder] < b[this.tableOrder] ? -1 * this.tableDirection : 1 * this.tableDirection;
            });
          } else {
            return this.tableRows;
          }
        }
      }
    }

  }
</script>
