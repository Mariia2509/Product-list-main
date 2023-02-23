<template>
  <!-- Wrapper -->
  <div class="w-full my-0 mt-16 mx-auto font-sans text-black bg-white box-border overflow-hidden">
    <store-header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import StoreHeader from '@/components/StoreHeader.vue';
export default {
  components: { StoreHeader },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;
html,
body {
  font-family: 'Roboto Mono', monospace;
}
</style>
