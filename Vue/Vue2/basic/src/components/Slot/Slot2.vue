<template>
    <div>
        <slot :slotDate="website">
            <!-- 默认显示 -->
            {{ website.name }}
        </slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            website: {
                name: 'renu',
                age: 28
            }
        }
    }
}
</script>