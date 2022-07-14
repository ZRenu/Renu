<template>
    <div>
        <input type="text" v-model="name">
        <input type="text" v-model="info.city">
        <hr />
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'renu',
            info: {
                city: 'SH'
            }
        }
    },
    watch: {
        name(oldval, val) {
            console.log('watch name', oldval, val) //值类型,可以正常拿到oldval
        },
        info: {
            handler(oldval, val) {
                console.log('watch info', oldval, val) //引用类型,类型可拿不到oldval
            },
            deep: true //深度监听
        }
    }
}
</script>