# Vue2

## 基本使用（baseUse/*)

### 插值、指令、v-html

- base1.Vue

### class和style

- classDemo

### computed和watch

- computed有缓存，data不变则不会重新计算
- watch如何深度监听
- watch监听引用类型，拿不到oldVal

### 条件渲染(conditionDemo)

- v-if/v-else
- v-if和v-show区别(v-show会渲染dom，只是display:none)
- v-if和v-show使用场景(切换频繁用v-show)

### 循环(listDemo)

v-for和v-if不建议一起用，因为v-for优先级高

### 事件(eventDemo)

- event是原生的
- 事件被挂载到当前元素
- 事件修饰符（event.stop:阻止事件继续传播,event.submit.prevent:提交事件不再加载页面）

### 表单(formDemo)

- v-model
- 常见的表单项 textarea checkbox radio select
- 修饰符lazy number trim

## 组件使用(componentsDemo/*)

- props(子组件向父组件传递数据)和$emit（父组件触发子组件的事件）
- 组件间通讯-自定义事件(vue本身就有实现自定义实现的能力)
- 组件生命周期

### 组件生命周期（单个组件）

- 挂载阶段
- 更新阶段
- 销毁阶段

### 父子组件生命周期

## Vue高级特性 advancedUse

### 自定义v-model

### $nextTick

- Vue是异步渲染
- data改变之后，DOM不会立刻渲染
- $nextTick会在DOM渲染之后触发，以获取最新的DOM节点

### slot

- 默认
- 父组件获取子组件的数据
- 具名插槽


