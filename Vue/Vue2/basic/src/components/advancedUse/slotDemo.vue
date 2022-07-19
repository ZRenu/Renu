<template>
    <a :href="url">
        <slot :slotData="website">
            默认内容
        </slot>
        <p>
            <slot name="header">

            </slot>
        </p>
    </a>
</template>
<script>
export default {
    props: ['url'],
    data() {
        return {
            website: {
                title: 'edit'
            }
        }
    }
}
</script>