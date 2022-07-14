<template>
  <div id="app">
    <base1></base1>
    <watchDemoVue></watchDemoVue>
    <computedDemoVue></computedDemoVue>
  </div>
</template>

<script>
import base1 from './baseUse/base1.vue';
import watchDemoVue from './baseUse/watchDemo.vue';
import computedDemoVue from './baseUse/computedDemo.vue';
export default {
  name: "app",
  components: {
    base1,
    watchDemoVue,
    computedDemoVue
  }
};
</script>
