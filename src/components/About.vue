<template>
    <div>
        <div>ABOUT VIEW</div>
        <material-input v-ref:email value="test" label="label"></material-input>
        <button  v-on:click="greet($event)">Button!</button>
    </div>
</template>
<style>

</style>
<script>
    import MaterialInput from './material/MaterialInput';

    export default {
        components: {
            MaterialInput
        },

        data () {
            return {
                msg: 'hello vue'
            }
        },

        methods: {
            greet (event) {
                // `this` inside methods point to the Vue instance
                console.log('Hello ' + this.name + '!')
                // `event` is the native DOM event
                console.log(event.target.tagName)
                console.log(this.$refs.email.value);
            }
        }
    }
</script>
