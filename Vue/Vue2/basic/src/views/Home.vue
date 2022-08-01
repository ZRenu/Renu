<template>
  <div class="home">
    <!-- <SlotIndex /> -->
    <!-- <DynamicIndex /> -->
    <!-- <AsynIndex /> -->
    <!-- <KeepAliveIndex /> -->
    <!-- <MixinIndex/> -->
    <!-- <NextTickIndex /> -->
    <!-- <BaseIndex/> -->
    <p>自定义v-model</p>
    <p>{{ name }}</p>
    <VModelIndex v-model="name" />
  </div>
</template>

<script>
// import SlotIndex from '../components/Slot/SlotIndex.vue';
// import DynamicIndex from '../components/Dynamic/DynamicIndex.vue';
// import AsynIndex from '../components/Asyn/AsynIndex.vue';
// import KeepAliveIndex from '../components/KeepAlive/KeepAliveIndex.vue';
// import MixinIndex from '../components/Mixin/MixinIndex.vue';
// import NextTickIndex from '../components/NextTick/NextTickIndex.vue';
import VModelIndex from '../components/VModel/VModelIndex.vue';
// import BaseIndex from '../components/BaseUse/BaseIndex.vue';
export default {
  name: "Home",
  components: {
    // SlotIndex,
    // DynamicIndex,
    // AsynIndex,
    // KeepAliveIndex,
    // MixinIndex,
    // NextTickIndex,
    VModelIndex,
    // BaseIndex
  },
  data() {
    return {
      name: 'Renu'
    }
  }
};
</script>
