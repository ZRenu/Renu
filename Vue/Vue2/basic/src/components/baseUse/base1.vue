<template>
    <div>
        <p>文本插值 {{ message }}</p>
        <p>JS表达式 {{ flag ? "yes" : 'no' }} 只能用表达式，不能是语法</p>
        <p :id="dynameicId">动态属性ID</p>
        <hr />
        <p v-html="rawHtml"></p>
        <span>【注意】使用v-html之后，将会覆盖子元素 XSS风险</span>
        <hr />
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: 'hello vue',
            flag: true,
            rawHtml: '指令-原始 html <b>加粗</b> <i>斜体</i>',
            dynameicId: `id -${Date.now()}`
        }
    }
}
</script>