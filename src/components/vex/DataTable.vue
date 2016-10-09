<template>
  <div class="material-data-table" :class="{ 'responsive': responsive, 'bordered': border, 'striped': striped, 'hover': hover }">
    <!--TABLE-->
    <div class="material-data-table-container">
      <table>
        <thead>
          <tr>
            <th v-if="selection" class="v-selection v-select-all" >
              <v-checkbox :value="selectAll" @click="toggleSelect()"></v-checkbox>
            </th>
            <th v-for="(column, index) in columns" :class="{ 'v-first-col': index === 0 }">
              <i class="material-icons v-order-by" v-if="index !== 0"
                 v-bind:class="{ 'hidden': order !== column.key, 'descending': direction === 1, 'ascending': direction === -1}">
                arrow_downward
              </i>
              <span @click="orderBy(column.key);">{{ column.head }}</span>
              <i class="material-icons v-order-by" v-if="index === 0"
                 v-bind:class="{ 'hidden': order !== column.key, 'descending': direction === 1, 'ascending': direction === -1}">
                arrow_downward
              </i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows">
            <td v-if="selection" class="v-selection">
              <v-checkbox :value="row[selectionKey]" @click="checkSelection()"></v-checkbox>
            </td>
            <td v-for="(column, index) in columns" :data-title="[column.head]" :class="{ 'v-first-col': index === 0, 'v-editable': column.editable }" @click="editField($event, column.editable, row, column.key);">
              <span v-if="!column.options">{{row[column.key]}}</span>
              <div class="v-column-options">
                <v-select v-if="column.options" :value="row[column.key]" :options="column.options">{{row[column.key]}}</v-select>
              </div>
              <i class="material-icons v-table-edit-icon" v-if="column.editable">edit</i>
            </td>
          </tr>
        </tbody>
      </table>
      <transition>
        <div ref="editor" v-show="editing" class="v-data-table-edit-container">
          <v-input ref="editinput" :value="editValue" :focus="true" @keyup.enter="saveEdit(editValue)" @keyup.esc="cancelEdit()"></v-input>
          <div class="v-edit-buttons">
            <v-button class="cancel" :primary="true" @click="cancelEdit()">cancel</v-button>
            <v-button class="save" :primary="true" @click="saveEdit(editValue)">save</v-button>
          </div>
        </div>
      </transition>

      <div class="v-table-edit-backdrop" v-if="editing" @click="cancelEdit()"></div>

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
  }
</style>

<script>
  import VButton from './Button';
  import VCheckbox from './Checkbox.vue';
  import VInput from './Input.vue';
  import VSelect from './Select.vue';
  export default {

    components: {
      VButton,
      VCheckbox,
      VInput,
      VSelect
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
      'options'
    ],

    // Data
    data () {
      return {
        selectAll: false,
        editing: false,
        editValue: '',
        editRow: undefined,
        editKey: undefined
      }
    },

    mounted () {
      console.log('ready');
        if (this.selection) {
          this.setSelection();
        }
    },

    // Methods
    methods: {
      orderBy (property) {
        if (this.order === property) {
          this.direction = this.direction * -1;
        } else {
          this.direction = 1;
        }
        this.order = property;
      },

      toggleSelect () {
        this.rows.forEach((item, index) => {
          if (!this.selectAll) {
            item[this.selectionKey] = true;
          } else {
            item[this.selectionKey] = false;
          }
        });
      },

      checkSelection () {
        setTimeout(() => {
          var allSelected = true;
          this.rows.forEach((item, index) => {
            if (!item[this.selectionKey]) {
              allSelected = false;
            }
          });
          console.log(allSelected);
          this.selectAll = allSelected;
        }, 0);
      },

      setSelection () {
        this.rows.forEach((item, index) => {
          if (!item[this.selectionKey]) {
            item.selected = false;
          }
        });

        var rows = JSON.parse(JSON.stringify(this.rows));
        this.$set('rows', rows);
      },

      editField (ev, editable, row, key) {
        if (editable) {
          this.editRow = row;
          this.editKey = key;
          var target = ev.target.nodeName !== 'SPAN' && ev.target.nodeName !== 'I' ? ev.target : ev.target.offsetParent;
          this.editing = !this.editing;
          this.editValue = row[key];
          this.$refs.editor.style.left = target.offsetLeft + target.clientWidth - 216 + 'px';
          this.$refs.editor.style.top = target.offsetTop + target.offsetParent.offsetTop + 'px';
          var input = this.$refs.editinput.getElementsByTagName('input')[0];
          this.$nextTick(() => {
            input.focus();
          });
        }
      },

      cancelEdit () {
        this.editing = false;
      },

      saveEdit (value) {
        this.editing = false;
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
        return this.rows.filter((row) => {
          return row.name.indexOf(this.searchQuery);
        })
      },
      orderedRows: function () {
        return _.orderBy(this.rows, this.order);
      }
    }

  }
</script>
