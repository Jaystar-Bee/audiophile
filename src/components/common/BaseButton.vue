<template>
  <button
    class="py-2 sm:py-4 px-4 sm:px-8 uppercase duration-500 border-2"
    :class="
      outline && !brown
        ? 'bg-transparent border-black  hover:bg-black text-black hover:text-white'
        : brown && !outline
        ? 'bg-deep-brown text-white hover:bg-light-brown border-deep-brown hover:border-light-brown '
        : outline && brown
        ? 'bg-transparent border-deep-brown text-deep-brown hover:text-white hover:bg-light-brown'
        : 'bg-black hover:bg-gray-800 border-black text-white'
    "
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "BaseButton",
  props: ["outline", "brown"],
};
</script>