<template>
  <transition name="toast">
    <div class="v-toast-container" v-show="show">
      <div class="v-toast">
        <span>{{ text }}</span>
        <v-button v-if="action" @click.native="action">{{ actionText }}</v-button>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
  @import '../../styles/components/_toasts';
</style>
<script>

  import VButton from './Button.vue';
  import ToastService from '../../services/ToastService';

  export default {
    components: {
      VButton
    },

    props: [
      'text',
      'actionText',
      'action',
      'toggle',
      'delay',
    ],

    methods: {

    },

    data () {
      return {
        show: false,
        toastDelay: this.delay || 3000
      }
    },

    watch: {
      'toggle': {
        handler: function(val, oldVal) {
          console.log(this);
          if (this.toggle) {
            ToastService.queue(this, this.toastDelay);
          }
          setTimeout(() => {
            this.$emit('hide');
          }, this.toastDelay);
        },
      }
    }
  }
</script>
