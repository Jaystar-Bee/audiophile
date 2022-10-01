<template>
  <div class="font-Manrope">
    <header class="bg-black">
      <the-header></the-header>
    </header>
    <router-view :key="$route.fullPath" />
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader.vue";
import TheFooter from "@/components/common/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
</style>
