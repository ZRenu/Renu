# Vue原理

## 如何理解MVVM

在很早以前我们就有了“组件化”的思想，也就是同一个模板，根据后台的数据渲染不同的内容，但这个过程是通过dom去静态渲染的，所以当时jquery很流行。后来，在这个基础上，逐渐发展成“数据驱动视图”，也就是我们说的MVVM模型。

MVVM是Model - View - ViewModel的简写，数据和视图之间变更是通过ViewModel去实现的，数据更新时，通过ViewModel去通知视图更新；当视图更新时，也是通过ViewModel去修改数据，开发者不再将重心放在dom的操作上，而是让开发者更关注于数据和业务，dom操作则由ViewModel去实现，也就是Vue和React框架帮我们做的事。

但是Vue和React又不是完全遵循MVVM模型的，因为它们允许用户通过ref去获取dom，并进行对应的dom操作，这又与MVVM是相悖的，所以说它们不是完全遵循的。

## Vue响应式

- 组件data数据一旦变化，立刻触发试图更新
- 实现数据驱动视图的第一步
- 核心api Object.defineProperty

```js
//Object.defineProperty基本用法
const data = {}
const name = 'vik'
Object.defineProperty(data,'name',{
    get: function (){
        return name
    },
    set: function(newval){
      name = newval
    }
})
```

## 虚拟DOM

- DOM操作非常耗费性能
- vdom 用JS模拟DOM结构，计算出最小的变更，操作DOM

### 用JS模拟DOM结构

```html
<div id="div1" class="container">
    <p>vdeom</p>
    <ul style="font-size:20px">
    <li>a</li>
    </ul>
</div>
```

```js
{
    tag:'div',
    props:{
        className:'container',
        id:'div1'
    },
    children:[
        {
            tag:'p',
            children:'vdeom'
        },
        {
            tag:'ul',
            props:{style:'font-size:20px'},
            children:[
                {
                    tag:'li',
                    children:a
                }
            ]
        }
    ]
}
```

### snabbdom

### diff算法

### 模版编译

- 前置知识：JS的with语法
- vue template complier将模版编译为render函数(vue-templat-compiler)
- 执行render函数生成vnode
