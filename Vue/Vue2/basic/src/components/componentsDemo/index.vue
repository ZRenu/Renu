<template>
    <div>
        <inputVue @add="addHandler" />
        <listVue :list="list" @delete="deleteHandler" />
    </div>
</template>
<script>
import inputVue from './input.vue'
import listVue from './list.vue'
export default {
    components: {
        inputVue,
        listVue
    },
    data() {
        return {
            list: [
                {
                    id: 'id-1',
                    title: '标题1'
                },
                {
                    id: 'id-2',
                    title: '标题2'
                }
            ]
        }
    },
    methods: {
        addHandler(title) {
            this.list.push({
                id: `id-${Date.now()}`,
                title
            })
        },
        deleteHandler(id) {
            this.list = this.list.filter(item => item.id !== id)
        }
    },

}
</script>