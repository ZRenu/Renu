<template>
    <div>
        <button @click="changeState('A')">A</button>
        <button @click="changeState('B')">B</button>
        <button @click="changeState('C')">C</button>

        <keep-alive>
            <keepAliveStateA v-if="state === 'A'" />
            <keepAliveStateB v-if="state === 'B'" />
            <keepAliveStateC v-if="state === 'C'" />
        </keep-alive>
    </div>
</template>
<script>
import keepAliveStateA from './keepAliveStateA.vue'
import keepAliveStateB from './keepAliveStateB.vue'
import keepAliveStateC from './keepAliveStateC.vue'
export default {
    components: {
        keepAliveStateA,
        keepAliveStateB,
        keepAliveStateC
    },
    data() {
        return {
            state: 'A'
        }
    },
    methods: {
        changeState(state) {
            this.state = state
        }
    }
}
</script>