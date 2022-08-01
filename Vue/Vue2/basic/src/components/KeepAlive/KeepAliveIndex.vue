<template>
    <div>
        <h1>keep-alive缓存组件</h1>
        <keep-alive>
            <KeepAlive1 />
        </keep-alive>
        <KeepAlive2 />
    </div>
</template>
<script>
import KeepAlive1 from './KeepAlive1.vue'
import KeepAlive2 from './KeepAlive2.vue'
export default {
    components: {
        KeepAlive1,
        KeepAlive2
    }
}
</script>