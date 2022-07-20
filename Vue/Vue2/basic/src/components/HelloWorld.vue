<template>
  <div id="app">
    <FormDemo v-if="showForm" />
    <button @click="showForm = true">show from </button>
    <!-- 动态组件 -->
    <!-- <component :is="nextTickName" /> -->
    <div v-for="(name) in newData" :key="name">
      <component :is="name" />
    </div>
    <!-- <keepAliveVue /> -->
    <mixinDemo />
  </div>
</template>

<script>
import base1 from './baseUse/base1.vue';
// import watchDemoVue from './baseUse/watchDemo.vue';
// import computedDemoVue from './baseUse/computedDemo.vue';
// import classDemoVue from './baseUse/classDemo.vue';
// import conditionDemo from './baseUse/conditionDemo.vue'
// import listDemoVue from './baseUse/listDemo.vue';
// import eventDemoVue from './baseUse/eventDemo.vue';
// import formDemoVue from './baseUse/formDemo.vue';
// import indexVue from './componentsDemo/index.vue';
// import indexVue from './advancedUse/index.vue';
import nextTickVue from './advancedUse/nextTick.vue';
// import slotDemoVue from './advancedUse/slotDemo.vue';
// import keepAliveVue from './advancedUse/keepAlive.vue';
import mixinDemo from './advancedUse/mixinDemo.vue'
export default {
  name: "app",
  components: {
    base1,
    // computedDemoVue,
    // classDemoVue,
    // conditionDemo
    // listDemoVue
    // eventDemoVue
    FormDemo: () => import('./baseUse/formDemo.vue'),
    // indexVue
    // indexVue
    nextTickVue,
    // keepAliveVue,
    // slotDemoVue,
    mixinDemo
  },
  data() {
    return {
      showForm: false,
      website: {
        url: '',
        title: 'mi',
        subTitle: '明天更美好'
      },
      // nextTickName: 'nextTickVue'
      newData: [
        'base1',
      ]
    }
  }
};
</script>
