export default {
    data() {
        return {
            city: 'SH'
        }
    },
    methods: {
        show() {
            console.log(this.name)
        }
    },
    mounted() {
        console.log('mixin mounted', this.name)
    }
}