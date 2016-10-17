<template>
  <div class="row page-content space-around">
    <div class="col-xs-12 col-md-6">
      <v-card title="Sign In">
        <div class="row">
          <div class="col-xs-12 col-md-12">
            <v-input label="Email" type="email" :value="email" @input="email = $event"></v-input>
          </div>
          <div class="col-xs-12 col-md-12">
            <v-input label="Password" type="password" :value="password" @input="password = $event"></v-input>
          </div>
        </div>
        <div slot="actions">
          <v-button :primary="true" @click.native="signIn()">Sign In</v-button><v-button>Sign Up</v-button>
          <span class="caption v-light-text">Forgot Password?</span>
        </div>
      </v-card>
      <v-loading-spinner v-if="signingIn"></v-loading-spinner>
      <v-toast :text="'Signed In as ' + email" :toggle="showToast" @hide="showToast = false"></v-toast>
    </div>
  </div>
</template>

<style>
  .v-loading-spinner {
    margin-top: 16px;
  }
</style>

<script>
  import VInput from '../vex/Input.vue';
  import VButton from '../vex/Button.vue';
  import VCard from '../vex/Card.vue';
  import VLoadingSpinner from '../vex/LoadingSpinner.vue';
  import VToast from '../vex/Toast.vue';

  export default {
    components: {
      VInput,
      VButton,
      VCard,
      VLoadingSpinner,
      VToast
    },

    // Data
    data () {
      return {
        signingIn: false,
        showToast: false,
        email: '',
        password: ''
      }
    },

    // Methods
    methods: {
      signIn (event) {
        if (!this.signingIn) {
          this.signingIn = true;

          setTimeout(() => {
            this.signingIn = false;
            this.showToast = true;
          }, 2000)
        }
      }
    }
  }
</script>
