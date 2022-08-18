// 数组

let [a, b, c] = [1, 2, 3]

let [x, y, [z, h]] = [1, 2, [3, 4]]

let [w, s, [k]] = [1, 2, [3, 4]] // k = 3

// 对象
let users = {
    name: 'Renu',
    age: 20
}

let { name, age } = users
let { name: uname, age: auge } = users // 别名

// 字符串
let str = 'Renu'
let [r, e, n, u] = str

// 实际应用
function foo() {
    return users
}
let { name: fname, age: fage } = foo()

// 提取Json
let json = '{"j":"hello","p":"world"}'
let {j, p} = JSON.parse(json)



