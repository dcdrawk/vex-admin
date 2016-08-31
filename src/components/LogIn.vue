<template>
  <div class="row space-around">
    <div class="col-md-6">
      <material-card title="Log In">
        <material-input v-ref:email value="" label="Email" type="text">></material-input>
        <material-input v-ref:password value="" label="Password"type="password"></material-input>
        <material-button  v-on:click="logIn()">Log In</material-button>
      </material-card>
    </div>

    <!--<i class="material-icons">face</i>-->
  </div>
</template>
<style>

</style>
<script>
  import MaterialInput from './material/MaterialInput';
  import MaterialButton from './material/MaterialButton.vue';
  import MaterialCard from './material/MaterialCard.vue';
  import FirebaseService from '../services/FirebaseService';

  export default {
    components: {
      MaterialInput,
      MaterialButton,
      MaterialCard
    },

    data () {
      return {
        msg: 'hello vue'
      }
    },

    methods: {
      logIn (event) {
        let email = this.$refs.email.value;
        let password = this.$refs.password.value;
        FirebaseService.logIn(email, password);
      }
    }
  }
</script>
