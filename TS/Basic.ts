let isDone: boolean = false
let age: number = 10
let firstName: string = 'renu'
let message: string = `hello, ${firstName}`
let u: undefined = undefined
let n: null = null
let noSure: any = 4

// 数组
let arrOfNumbers: number[] = [1, 2, 3]

// 元组 tuple 
let user: [string, number, boolean] = ['string', 23, false]

// 只可以新增数组离的类型
user.push('add')
user.push(23)
user.push(true)

// Interface 接口
interface IPerson {
    readonly id: number;
    name: string;
    age: number;
    address?: string;
    // 声明函数
    add(x: number, y: number, z?: number): number
}

let Renu: IPerson = {
    id: 1, // readonly只能在定义时赋值
    name: 'Renu',
    age: 18,
    add(x, y, z?) {
        return x + y
    },

}

// Function 函数

function Add(x: number, y: number, z?: number): number {
    return x + y
}
let add = (x: number, y: number, z?: number) => { return x + y }

// (x: number, y: number, z?: number) => number 声明类型
let add1: (x: number, y: number, z?: number) => number = add

// union types 联合类型

let numberOrString: number | string
numberOrString = 123
numberOrString = 'string'


function getLength(input: string | number): number {
    const str = input as string // 类型断言
    if (str.length) {
        return str.length
    } else {
        const number = input as number // 类型断言
        return number.toString().length
    }
}

// Enum 枚举

enum Direction {
    up, // 0
    down = 10,
    left, // 11
    right // 12
}
const up = Direction[0] // up

// 常量枚举
const enum D {
    top = 'TOP',
    right = 'RIGHt'
}
const value = 'TOP'
if (value === D.top) {
    console.log('top')
}



export { }