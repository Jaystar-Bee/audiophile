<template>
  <div
    @click="$emit('close')"
    class="fixed top-0 h-full w-full bg-black opacity-70 z-30 backdrop-blur-md"
  ></div>
  <div
    v-if="cart"
    class="fixed top-32 right-10 bg-white rounded-lg p-4 sm:p-10 z-30 cart"
  >
    <slot name="cart"></slot>
  </div>
  <div
    v-if="nav"
    class="
      absolute
      sm:fixed
      top-20
      w-full
      bg-white
      rounded-b-lg
      py-32
      sm:py-40
      px-10
      z-30
      overflow-y-auto
    "
  >
    <slot name="nav"></slot>
  </div>
  <div v-if="normal" class="center fixed bg-white rounded-lg p-10 z-30">
    <slot name="default"></slot>
  </div>
</template>
<script>
export default {
  props: ["cart", "nav", "normal"],
};
</script>

<style scoped>
.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 444px) {
  .cart {
    left: 50%;
    transform: translateX(-50%);
    width: 98%;
  }
}
</style>