# Vue3

## Vue3和Vue2有什么优势

- 性能更好
- 体积更小
- 支持TS
- 更好的代码支持
- 更好的逻辑抽离

## Vue3和Vue2生命周期有什么区别

### Options API生命周期

- beforeDestroy改成beforeUnmount
- destroyed改为unmouted
- 其他沿用vue2的生命周期

### Composition API生命周期

- setup等于 beforeCreate和created

## 如何理解Composition API和Options API

### 如何选择

- 不建议共用，会引起混乱
- 小型项目，业务简单，用Options API
- 中大型项目，逻辑负责，用Composition API

## 如何理解ref toRef toRefs

### ref

- 生成值类型的响应式数据
- 可以用于模版和reactive
- 通过.value修改值

### toRef

- 针对一个响应式对象（reactive封装）的prop
- 创建一个ref，具有响应式
- 两者保持引用关系
- 如果用于普通对象（非响应），产出的结果不具有响应式

### toRefs

- 将响应式对象（reactive封装）转换为普通对象
- 对象的每个prop都是对应的ref
- 两者保持引用关系

### 为什么需要ref

- 值类型会丢失值类型，但值类型无处不在

### 为什么需要.value

- ref是一个对象（不丢失响应式），.value存储值
- 通过.value 属性的get和set实现响应式

### 为何需要toRef toRefs

- 不丢失响应式的情况下，把对象解构。

## Vue3升级了那些重要功能

- createApp

```js
// vue2.x
const app  = new Vue({})
Vue.use()
Vue.mixin()
Vue.component()

// vue3.x
const app = Vue.createApp({})
app.use()
app.mixin()
```

- emits属性

```html
// 父组件
<parent :msg="msg" @sayHello="sayHello"/>
```

```js
// 子组件
export default {
    props:{
       msg:String 
    },
    emits:['sayHello'],
    setup(props,{emit}) {
        emit('sayHello','bbb')
    }
}
```

- 多事件处理

```js
<button @click="on($event),two($event)">submit</button>
```

- Fragment 不需要一个单一父节点多多个节点进行包裹

```html
// vue2
<template>
    <div>
        <h3></h3>
        <p></p>
    </div>
</template>

// vue3
<template>
     <h3></h3>
     <p></p>
</template>
```

- 异步组件

```js
// vue2
new Vue({
    components:{
        'my-component':()=>import('./my-component.vue')
    }
})

// vue3
import {createApp,defineAsyncComponent} from 'vue'
createApp({
    components:{
        AsyncComponent:defineAsyncComponent(()=>{
            import('./my-component.vue')
        })
    }
})
```

- 移除filter

```html
{{message | capitalize}}
<div v-bind:id="rawId | formId"></div>
```

- teleport

```html
<button @click="modalOpen = true"> open </button>

<teleport to="body">
<div v-if="modalOpen">
<p>teleport是弹窗</p>
<button @click="modalOpen = false"> Close </button>
</div>
</teleport>
```

- Suspense

```html
<template>
    <test1/>
</template>

fallback就是一个具名插槽，即Suspense组件内部
有两个slot，其中一个具名为Suspense

<template #fallback>
loading
</template>
```

- Composition API

 1. reactive
 2. ref
 3. readonly
 4. watch watchEffect
 5. setup
 6. 生命周期钩子函数

- Composition API实现逻辑复用(MousePosition)

 1. 抽离逻辑代码到一个函数
 2. 函数名约定为useXxx格式
 3. 在setup中引用useXxx函数

## vue3实现响应式

### Proxy实现

## watch和watchEffect区别

- 两者都可以监听data属性变化
- watch需要明确监听那个属性
- watchEffect会根据其中属性，自动监听七变化

## setup 如何获取组件实例

- setup和其他Composition中没有this
- 可以通过getCurrentInstance获取当前实例
- 若使用Options可照常使用this

## Vue3为何比vue2快

- Proxy响应式快
- PathchFlag

  1. 编译模版时，动态节点做表姐
  2. 标记，分为不同的类型，如TEXT props
  3. diff算法时，可以区分静态节点，以及不同类型的动态节点

- hoistStatic
- cacheHandler
- SSR优化
- tree-shaking

  1. 根据不同情况引入不同api

## Vite

