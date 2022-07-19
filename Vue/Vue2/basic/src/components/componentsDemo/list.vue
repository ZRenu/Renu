<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.title }}
                <button @click="deleteItem(item.id)">delete</button>
            </li>
        </ul>

    </div>
</template>
<script>
import event from './event'
export default {
    props: {
        list: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {}
    },
    methods: {
        deleteItem(id) {
            this.$emit('delete', id)
        },
        addTitleHandler(title) {
            console.log('on add title', title)
        }
    },
    mounted() {
        // 绑定自定义事件
        event.$on('onAddTitle', this.addTitleHandler)
    },
    beforeDestroy() {
        // 即时销毁，否则可能造成内存泄露
        event.$off('onAddTitle', this.addTitleHandler)
    }

}
</script>