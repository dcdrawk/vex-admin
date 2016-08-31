<template>
    <div>
        <div>ABOUT VIEW!</div>
        <material-input v-ref:email value="test" label="label"></material-input>
        <material-checkbox></material-checkbox>
        <button  @click="showDialog();">Button!</button>

        <material-dialog title="test" v-ref:dialog  >
            Here is the dialog!
        </material-dialog>
      <!--<i class="material-icons">face</i>-->
    </div>
</template>
<style>

</style>
<script>
  import MaterialInput from './material/MaterialInput';
  import MaterialCheckbox from './material/MaterialCheckbox';
  import MaterialDialog from './material/MaterialDialog.vue';


  export default {
    components: {
      MaterialInput,
      MaterialCheckbox,
      MaterialDialog
    },

    data () {
      return {
        msg: 'hello vue',
      }
    },

    methods: {
      showDialog () {
        this.$refs.dialog.show = true;
      }
    }
  }
</script>
