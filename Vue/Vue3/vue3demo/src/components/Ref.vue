<template>
    <div>
        <p ref="elemRef">ref获取DOM元素</p>
        <p>{{ nameRef }} - {{ state.age }}</p>
    </div>
</template>
<script>
import { ref, reactive, onMounted } from 'vue'
export default {
    name: 'Ref',
    setup() {
        const ageRef = ref(20) //值类型 响应式
        const nameRef = ref('vik')
        const elemRef = ref(null) // ref获取DOM元素

        const state = reactive({
            age: ageRef
        })
        setTimeout(() => {
            // console.log('ageRef', ageRef.value) //获取值
            ageRef.value = 25 // .value修改值
            nameRef.value = 'renu'
        }, 1500);

        onMounted(() => {
            console.log('ref template', elemRef.value.innerHTML)
        })

        return {
            nameRef,
            state,
            elemRef
        }

    }
}
</script>