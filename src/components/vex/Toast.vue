<template>
  <transition name="toast">
    <div class="v-toast-container" v-show="show">
      <div class="v-toast">
        <span>{{ text }}</span>
        <v-button v-if="action" @click="action">{{ actionText }}</v-button>
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
    ],

    methods: {

    },

    data () {
      return {
        show: false
      }
    },

    watch: {
      'toggle': {
        handler: function(val, oldVal) {
          if (this.toggle) {
            ToastService.queue(this);
          }
          this.$emit('toggle');
        },
      }
    }
  }
</script>
