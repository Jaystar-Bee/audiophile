<template>
  <button
    class="
      py-2
      sm:py-4
      px-4
      sm:px-8
      uppercase
      duration-500
      border-0
      outline-none
    "
    :class="
      outline && !brown
        ? 'border-2 bg-transparent border-black  hover:bg-black text-black hover:text-white'
        : brown && !outline
        ? 'border-2 bg-deep-brown text-white hover:bg-light-brown border-deep-brown hover:border-light-brown '
        : outline && brown
        ? ' border-2 bg-transparent border-deep-brown text-deep-brown hover:text-white hover:bg-light-brown'
        : 'border-2 bg-black hover:bg-gray-800 border-black text-white'
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