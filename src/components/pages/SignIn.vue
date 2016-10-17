<template>
  <div class="row space-around">
    <div class="col-xs-12 col-md-6">
      <v-card title="Sign In">
        Content
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <v-input label="Username"></v-input>
          </div>
          <div class="col-xs-12 col-md-6">
            <v-input label="Password"></v-input>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<style>

</style>

<script>
  import VInput from '../vex/Input';
  import VButton from '../vex/Button.vue';
  import VCard from '../vex/Card.vue';
//  import FirebaseService from '../../services/FirebaseService';
//  import MaterialLoadingSpinner from '../vex/LoadingSpinner.vue';
//  import router from 'vue-router';
//
  export default {
    components: {
      VInput,
      VButton,
      VCard
    },
//
//    data () {
//      return {
//        loggingIn: false
//      }
//    },
//
//    methods: {
//      logIn (event) {
//        this.loggingIn = true;
//        let email = this.$refs.email.value;
//        let password = this.$refs.password.value;
//        FirebaseService.logIn(email, password).then(() => {
//          this.loggingIn = false;
//          this.$router.go('profile');
//        });
//      }
//    }
    mounted () {
      console.log('sign in mounted');
    }
  }
</script>
