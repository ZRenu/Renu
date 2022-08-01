<template>
    <div>{{ name }} - {{ city }}</div>
</template>
<script>
import mixin from './mixin'
export default {
    mixins: [mixin],
    data() {
        return {
            name: 'Renu'
        }

    }
}
</script>