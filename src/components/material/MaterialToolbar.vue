<template>
    <div class="toolbar">
        <slot></slot>
        <span class="title">{{ title }}</span>
    </div>
</template>

<style lang="scss">
    @import '../../styles/components/toolbar';
</style>

<script>
    export default {
        props: [
            'title'
        ]
    }
</script>
