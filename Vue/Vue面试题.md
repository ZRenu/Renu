# 面试题

## v-show和v-if的区别

- v-show通过CSS display控制显示和隐藏
- v-if组件真正的渲染和销毁，而不是显示和隐藏
- 频繁切换显示用v-show，否则用v-if

## 为何在v-for中使用key

- 必须用key，且不能是index和random
- diff算法中通过tag和key来判断，是否是sameNode
- 减少渲染次数，提升渲染性能

## 描述Vue单组件和父子组件的生命周期

## Vue组件如何通讯（常见）

- 父子组件props和this.$emit
- 非父子组件自定义事件 event.$on event.$off event.$emit
- Vuex

## 描述组件渲染和更新的过程

### 初次渲染

- 解析模版为render函数（vue-loader）
- 触发响应式，监听data属性getter setter
- 执行render函数，生产vnode,patch(elem,vnode)

### 更新过程

- 修改data, 触发setter
- 重新执行render函数，生成newVnode
- patch(vnode,newVnode)

## 异步渲染

- 渲染和响应式的关系
- 渲染和模版的关系
- 渲染和vdom的关系

## ajax请求应该放在那个生命周期

- mounted
