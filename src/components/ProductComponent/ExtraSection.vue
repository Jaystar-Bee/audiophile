<template>
  <div
    class="
      flex flex-wrap
      items-stretch
      justify-center
      container
      mx-auto
      px-4
      md:px-0
      gap-10
    "
  >
    <div
      v-for="product in extra"
      :key="product.id"
      :product="product"
      class="flex-1 min-w-fit"
    >
      <div class="w-full p-10 bg-grey rounded-md">
        <img
          :src="require(`./../../assets/img/${product.img}.png`)"
          alt=""
          class="h-[12rem] mx-auto"
        />
      </div>
      <div class="mt-8 text-center">
        <h2 class="uppercase font-bold text-xl mb-8">{{ product.title }}</h2>
        <router-link :to="`${product.realLink}`">
          <base-button :brown="true">see product</base-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["extra"],
};
</script>