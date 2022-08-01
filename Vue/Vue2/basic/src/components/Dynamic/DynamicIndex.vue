<template>
    <div>
        <div v-for="(val, key) in newDate" :key="key">
            <component :is="val.type" />
        </div>
    </div>
</template>
<script>
import TextV from './Text.vue';
import Img from './Img.vue'
export default {
    components: {
        TextV,
        Img
    },
    data() {
        return {
            newDate: {
                1: { type: 'TextV' },
                2: { type: 'Img' },
                3: { type: 'TextV' },

            }
        }
    }
}
</script>