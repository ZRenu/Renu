// 面试题
// Promise.resolve().then(() => {
//     console.log(1)
// }).catch(() => {
//     console.log(2)
// }).then(() => {
//     console.log(3)
// })

// 无论resolve和rejected内部没有报错，返回都是resolved的值
// Promise.resolve().then(() => { //rejected
//     console.log(1)
//     throw new Error('err01')
// }).catch(() => { //resolved
//     console.log(2)
// }).then(() => {
//     console.log(3)
// })


// Promise.resolve().then(() => {
//     console.log(1)
//     throw new Error('erro1')
// }).catch(() => { //这个没有报错，返回resolved状态，所以后面不会执行
//     console.log(2)
// }).catch(() => {
//     console.log(3)
// })