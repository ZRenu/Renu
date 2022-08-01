<template>
    <div>
        <h1>异步组件</h1>
        <div>
            <FormDemo v-if="showFrom" />
        </div>
        <button @click="showFrom = true">加载异步组件</button>
    </div>
</template>
<script>
export default {
    components: {
        FormDemo: () => import('./FormDemo.vue')
    },
    data() {
        return {
            showFrom: false
        }
    }
}
</script>