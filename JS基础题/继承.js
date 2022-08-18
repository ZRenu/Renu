function Parent(name_, age_) {
    this.name = name_
    this.age = age_
}
Parent.prototype.doEat = function () {
    console.log(this.name + ' eat')
}
function Son(favor_, sex_) {
    this.favor = favor_
    this.sex = sex_
}
/**
 * 原型链继承原理：将子类的prototype指向继承类的实例
 * 好处: 可以访问父类的实例属性
 * 不足：不能通过子类构造函数向父类构造函数传递参数
 */

// Son.prototype = new Parent('Renu', 28)
// Son.prototype.constructor = Son
// let sonobj = new Son('fish', '1')
// console.log(sonobj.name)


/** 
 * 借用构造函数函数继承
 * 在子类内部借助apply和call方法传递参数给父类,无法访问父类原型上的方法
*/
function daughter(name_, age_, phone_) {
    Parent.apply(this, [name_, age_])
    this.phone = phone_
}

// let daughterObj = new daughter('xixi', 15, 'han')
// console.log(daughterObj.name)
// console.log(daughterObj.doEat)  undefined 无法访问父类原型上的方法


/**
 * 组合模式 借用 + 原型链
 * 
 */
// daughter.prototype = new Parent('wang', 23)
// let daughterObj1 = new daughter('xi', 16, 'han')
// console.log(daughterObj1.name)
// daughterObj1.doEat()

/**寄生组合（最佳）
 * 
 */
let middle = Object.create(Parent.prototype)
daughter.prototype = middle

let lili = new daughter('lili', 15, '1223')
console.log(lili)