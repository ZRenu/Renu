<template>
    <p>{{ ageRef }} {{ state.name }}</p>
</template>
<script>
import { toRef, reactive } from 'vue'
export default {
    name: 'ToRef',
    setup() {
        const state = reactive({
            age: 20,
            name: 'renu'
        })
        const ageRef = toRef(state, 'age')
        return {
            state,
            ageRef
        }
    }
}
</script>