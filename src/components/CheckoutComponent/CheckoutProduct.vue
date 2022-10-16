<template>
  <div class="flex items-center justify-between mb-10">
    <div class="flex gap-3 items-center">
      <div class="bg-grey rounded-md p-4">
        <img
          :src="require(`./../../assets/img/${product.img}.png`)"
          alt=""
          class="w-12"
        />
      </div>
      <div>
        <h4 class="uppercase font-semibold">{{ product.title }}</h4>
        <p class="opacity-60">${{ product.priceInDollars }}</p>
      </div>
    </div>
    <p class="opacity-60">x{{ product.quantity }}</p>
  </div>
</template>
          <script>
export default {
  props: ["product"],
};
</script>