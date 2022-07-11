const obj = {
    age: 20,
    name: 'renu',
    address: {
        city: 'shanghai'
    },
    arr: ['a', 'b', 'c']
}
function deepClone(obj) {
    if (typeof obj !== 'object' || obj == null) return obj
    let result;
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        // hasOwnProperty保证key不是原型的属性
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }
    return result
}
function deepClone1(obj) {
    if (typeof obj !== 'object' || obj == null) return obj
    let cloneObj = new obj.constructor()
    Object.keys(obj).map(x => cloneObj[x] = deepClone1(obj[x]))
    return cloneObj
}

const obj1 = deepClone1(obj)
console.log(obj1)
