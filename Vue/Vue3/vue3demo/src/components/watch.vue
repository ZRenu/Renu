<template>
    <p>{{ numberRef }}</p>
    <p>{{ name }} {{ age }}</p>
</template>
<script>
import { reactive, ref, toRefs, watch, watchEffect } from 'vue'
export default {
    setup() {
        const numberRef = ref(100)
        const state = reactive({
            name: 'Renu',
            age: 20
        })
        watch(numberRef, (newNumber, oldNumber) => {
            console.log('newNumber', newNumber)
            console.log('oldNumber', oldNumber)
        })
        watch(() => state.age, (newState, oldState) => {
            console.log('newState', newState)
            console.log('oldState', oldState)
        })
        setTimeout(() => {
            numberRef.value = 200
        }, 1500);

        setTimeout(() => {
            state.age = 18
        }, 3000);

        // 初始化时，一定会执行一次（收集要监听的数据）
        watchEffect(() => { console.log('---', state.name) })

        return {
            numberRef,
            ...toRefs(state)
        }
    }
}
</script>