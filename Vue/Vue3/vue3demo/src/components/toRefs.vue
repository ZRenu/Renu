<template>
    <p>{{ age }}- {{ name }}</p>
</template>
<script>
import { toRefs, reactive } from "vue";
export default {
    name: 'ToRefs',
    setup() {
        const state = reactive({
            age: 20,
            name: 'renu'
        })

        const stateAsRefs = toRefs(state) // 将响应式对象，变成普通对象
        return stateAsRefs // 每个属性都是 ref 对象
    }
}
</script>