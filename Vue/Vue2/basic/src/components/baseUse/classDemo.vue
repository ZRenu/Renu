<template>
    <div>
        <hr />
        <p :class="{ black: isBlack, yellow: isYellow }">使用class</p>
        <p :class="[black, yellow]">使用class[数组]</p>
        <p :style="styleData">使用style</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isBlack: true,
            isYellow: true,
            black: 'black',
            yellow: 'yellow',
            styleData: {
                fontSize: '40px', //驼峰试
                color: 'red'
            }


        }
    }
}
</script>
<style scoped>
.black {
    color: rgb(232, 197, 25);
}

.yellow {
    font-size: 20px;
}
</style>