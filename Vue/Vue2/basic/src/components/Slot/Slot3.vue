<template>
    <div>
        <div>
            <slot name="header"></slot>
        </div>
        <slot></slot>
        <div>
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    }
}
</script>