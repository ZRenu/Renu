<template>
    <input type="text" :value="text" @input="$emit('change', $event.target.value)">
</template>
<script>
export default {
    model: {
        prop: 'text', //对应props text
        event: 'change'
    },
    props: {
        text: String,
        default() {
            return ''
        }
    },
    data() {
        return {}
    }
}
</script>