<template>
    <div>{{ x }} - {{ y }}</div>
</template>
<script>
import useMousePosition from './useMousePosition'
export default {
    setup() {
        const { x, y } = useMousePosition()
        return {
            x, y
        }
    }
}
</script>