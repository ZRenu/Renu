let arr = [1, 2, 3]

//ES5中的方法

// for
for (let i = 0; i < arr.length; i++) {

}

// forEach
arr.forEach(function (elem, index, array) {

})

// for和forEach的区别
// forEach不支持break（结束循环） continue

// map
arr.map(function (value) { })

// map和forEach的区别
// forEach只是简单的循环，map会遍历数组的每一个元素，根据回调操作形成一个新的数组，不改变原来的数组


// filter:返回一个经过筛选新的数组，不改变原来的数组
arr.filter(function (value) { })

// some:遍历数组中是否有符合条件的数据，返回boolean，不改变原来的数组，只要有一个符合条件返回true
arr.some(function (val) { })

//every:遍历数组所有的数据，返回boolean，不改变原来的数组，所有数据符合条件返回true
arr.some(function (vale) { })

//reduce：累加
let sum = arr.reduce(function (prev, cur, index, array) {
    return prev + cur
}, 0)

// reduce：最大值
let max = arr.reduce(function (prev, cur) {
    return Math.max(prev, cur)
})

// reduce：去重
let newarr = arr.reduce(function (prev, cur) {
    prev.indexOf(cur) == -1 && prev.push(cur)
    return prev
}, [])


// for in:会遍历原型上的方法,可以使用hasOwnProperty规避
Array.prototype.foo = function () {
    console.log('foo')
}
for (let index in arr) {
    console.log(index, arr[index])
}

// ES6方法


// find:返回第一个通过验证的元素，没有找到返回undefined
// findIndex:返回第一个通过验证元素的下标
arr.find(function (val) {
    return val == 2
})

// for of
for (let item of arr) {
    console.log('元素')
}

for (let key of arr.keys()) {
    console.log('下标', key)
}

for (let [index, item] of arr.entries()) {
    console.log('小标和对应的值')
}

// slice
// let slicearr = Array.prototype.slice.call(arguments)  // 伪数组转数组

// ES6数组的扩展

// 伪数组转数组 Array.from

let arrLike = {
    0: 'es6',
    1: 'es7',
    length: 2
}

Array.from(arrLike)

// Array.of
Array.of(1)

Array.of(1, true, 'Renu', [1, 2])

// copyWithin(要替换的元素的位置，开始替换（可），结束（ke）) 

let copy = [1, 2, 3, 4, 5, 6]
console.log(copy.copyWithin(3, 0, 4))

// fill（填充的元素，填充开始的位置，填充结束的位置） 填充
let arrFill = new Array(3).fill(7)
copy.fill('Renu', 5)
console.log(copy)

// includes 数组是否包含某个元素
let arrLL = [1, 2, 3, NaN]
console.log(arrLL.indexOf(NaN))