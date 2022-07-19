<template>
    <div>
        <h3>Vue高级特性</h3>
        <p>{{ name }}</p>
        <customVModelVue v-model="name" />
    </div>
</template>
<script>
import customVModelVue from "./customVModel.vue";
export default {
    components: {
        customVModelVue
    },
    data() {
        return {
            name: 'vik'
        }
    }
}
</script>