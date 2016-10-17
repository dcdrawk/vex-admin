<template>
  <div class="row space-around">
    <div class="col-md-6">
      <material-card title="Profile" v-if="user">
        <div class="row">
          <div class="col-md-12">
            <div class="profile-pic-container">
              <img :src="user.photoURL"/>
            </div>
          </div>
        </div>
        <material-input :value="user.email" label="Email" type="text"></material-input>
        <material-input :value="user.displayName" label="Display Name" type="text"></material-input>
      </material-card>
    </div>
    <!--<vex-loading-spinner></vex-loading-spinner>-->
    <!--<i class="vex-icons">face</i>-->
  </div>
</template>
<style lang="scss" scoped>

  .profile-pic-container {
    margin: auto;
    width: 92px;
    height: 92px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 32px;

    img {
      width: 100%;
    }

  }

</style>
<script>
  import MaterialInput from '../vex/Input';
  import MaterialButton from '../vex/Button.vue';
  import MaterialCard from '../vex/Card.vue';
  import FirebaseService from '../../services/FirebaseService';
  import store from '../../services/Store';

  export default {
    store,
    components: {
      MaterialInput,
      MaterialButton,
      MaterialCard,
    },

    mounted () {
      console.log(store);
      console.log('profile is mounted');
    },

    data () {
      return {
        msg: 'hello vue',
        user: undefined
      }
    },

    methods: {
      logIn (event) {
        let email = this.$refs.email.value;
        let password = this.$refs.password.value;
        FirebaseService.logIn(email, password);
      }
    },

    vuex: {
      getters: {
        // a state getter function, which will
        // bind `store.state.count` on the component as `this.count`
        user: state => state.user
      }
    },
    computed: {
      user: function () {
        return store.state.user
      }
    }
  }
</script>
