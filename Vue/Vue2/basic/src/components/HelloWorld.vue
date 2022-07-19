<template>
  <div id="app">
   
  </div>
</template>

<script>
// import base1 from './baseUse/base1.vue';
// import watchDemoVue from './baseUse/watchDemo.vue';
// import computedDemoVue from './baseUse/computedDemo.vue';
// import classDemoVue from './baseUse/classDemo.vue';
// import conditionDemo from './baseUse/conditionDemo.vue'
// import listDemoVue from './baseUse/listDemo.vue';
// import eventDemoVue from './baseUse/eventDemo.vue';
// import formDemoVue from './baseUse/formDemo.vue';
// import indexVue from './componentsDemo/index.vue';
// import indexVue from './advancedUse/index.vue';
// import nextTickVue from './advancedUse/nextTick.vue';
// import slotDemoVue from './advancedUse/slotDemo.vue';
export default {
  name: "app",
  components: {
    // base1,
    // watchDemoVue,
    // computedDemoVue,
    // classDemoVue,
    // conditionDemo
    // listDemoVue
    // eventDemoVue
    // formDemoVue
    // indexVue
    // indexVue
    // nextTickVue
    slotDemoVue
  },
  data() {
    return {
      website: {
        url: '',
        title: 'mi',
        subTitle: '明天更美好'
      }
    }
  }
};
</script>
