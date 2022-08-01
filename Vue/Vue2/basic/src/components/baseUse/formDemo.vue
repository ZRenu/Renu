<template>
    <div>
        <p>输入框:{{ name }}</p>
        <input type="text" v-model.trim="name" />
        <input type="text" v-model.lazy="name" />
        <input type="text" v-model.number="age" />
        <p>多行文本:{{ desc }}</p>
        <textarea v-model="desc"></textarea>
        <p>复选框{{ checked }}</p>
        <input type="checkbox" v-model="checked" />
        <p>多个复选框 {{ checkedNames }}</p>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label>Jack</label>
        <input type="checkbox" id="jon" value="Jon" v-model="checkedNames">
        <label>Jon</label>
        <p>单选 {{ gender }}</p>
        <input type="radio" id="male" value="male" v-model="gender" />
        <label for="male">男</label>
        <input type="radio" id="female" value="female" v-model="gender" />
        <label for="female">男</label>
        <p>下拉列表{{ selected }}</p>
        <select v-model="selected" multiple>
            <option value="" disabled>请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'renu',
            age: 18,
            desc: 'I like juice',

            checked: true,
            checkedNames: [],

            gender: 'male',
            selected: '',
            selectedList: []

        }
    }
}
</script>