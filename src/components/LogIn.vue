<template>
  <div class="row space-around">
    <div class="col-md-6">
      <material-card title="Log In">
        <material-input v-ref:email value="" label="Email" type="text" @keyup.enter="logIn()">></material-input>
        <material-input v-ref:password value="" label="Password" type="password" @keyup.enter="logIn()"></material-input>

        <div class="row">
          <div class="col-md-6">
            <material-button  v-on:click="" raised="true">Create Account</material-button>
          </div>
          <div class="col-md-6">
            <material-button  v-on:click="logIn()" raised="true" primary="true"
                              v-bind:class="{ 'disabled': !this.$refs.email.value || !this.$refs.password.value }">Log In</material-button>
          </div>
        </div>

      </material-card>

      <div class="row" v-if="loggingIn">
        <div class="col-md-12">
          <material-loading-spinner></material-loading-spinner>
        </div>
      </div>

    </div>
  </div>
</template>

<style>

</style>

<script>
  import MaterialInput from './material/MaterialInput';
  import MaterialButton from './material/MaterialButton.vue';
  import MaterialCard from './material/MaterialCard.vue';
  import FirebaseService from '../services/FirebaseService';
  import MaterialLoadingSpinner from './material/MaterialLoadingSpinner.vue';
  import router from 'vue-router';

  export default {
    components: {
      MaterialInput,
      MaterialButton,
      MaterialCard,
      MaterialLoadingSpinner
    },

    data () {
      return {
        loggingIn: false
      }
    },

    methods: {
      logIn (event) {
        this.loggingIn = true;
        let email = this.$refs.email.value;
        let password = this.$refs.password.value;
        FirebaseService.logIn(email, password).then(() => {
          this.loggingIn = false;
          this.$router.go('profile');
        });
      }
    }
  }
</script>
