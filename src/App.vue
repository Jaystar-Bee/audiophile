<template>
  <div class="font-Manrope">
    <header class="bg-black sticky top-0 z-50">
      <the-header></the-header>
    </header>
    <div class="bg-light-grey">
      <router-view :key="$route.fullPath" />
    </div>
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
  mounted() {
    this.$store.dispatch("getFromLocal");
  },
};
</script>

<style>
@import "./main.css";
</style>

