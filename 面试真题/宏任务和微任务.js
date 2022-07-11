// 请写出输出顺序

async function async1() {
    console.log('async1 start') 
    await async2() 
    console.log('async1 end')
}
async function async2() {
    console.log('async2') 
}
console.log('script start')

setTimeout(function () {
    console.log('setTimeout')
}, 0) 

async1() 

new Promise(function (resolve) {
    console.log('promise1') 
    resolve()
}).then(function () {  
    console.log('promise2')
})
console.log('script end') 






// 解析
// async function async1() {
//     console.log('async1 start') // 2
//     await async2()
//     console.log('async1 end') // --微任务 6
// }
// async function async2() {
//     console.log('async2') // 3
// }
// console.log('script start') // 1

// setTimeout(function () {
//     console.log('setTimeout') // --宏任务 8
// }, 0)

// async1()

// //初始化promise时，传入函数会立刻执行
// new Promise(function (resolve) {
//     console.log('promise1') // 4
//     resolve()
// }).then(function () {
//     console.log('promise2') // -- --微任务 7
// })
// console.log('script end') // 5 同步代码执行完毕 （event loop - call stack 被清空）
// // 执行微任务
// //（尝试触发DOM）
// //触发event loop，执行宏任务