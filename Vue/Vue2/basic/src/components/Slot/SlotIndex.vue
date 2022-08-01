<template>
    <div>
        <h1>Slot</h1>
        <h2>基本使用</h2>
        <Slot1 :url=url />
        <h2>获取子组件数据作用域插槽</h2>
        <Slot2>
            <template v-slot="slotProps">
                {{ slotProps.slotDate.age }}
            </template>
        </Slot2>
        <h2>具名插槽</h2>
        <slot3>
            <template>默认插槽</template>
            <template v-slot:header>
                header
            </template>
            <template v-slot:footer>
                footer
            </template>
        </slot3>
    </div>
</template>
<script>
import Slot1 from './Slot1.vue'
import Slot2 from './Slot2.vue'
import Slot3 from './Slot3.vue'
export default {
    data() {
        return {
            url: 'https://staging-cn.vuejs.org/'
        }
    },
    components: {
        Slot1,
        Slot2,
        Slot3
    }
}
</script>