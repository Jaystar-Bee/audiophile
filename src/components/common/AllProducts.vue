<template>
  <div
    v-for="(product, index) in products"
    :key="product.id"
    :index="index + 1"
    :product="product"
    class="mt-32"
  >
    <div
      class="flex flex-col items-center gap-20"
      :class="index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'"
    >
      <div class="rounded-md bg-grey p-10 flex-1 w-full">
        <img
          :src="require(`./../../assets/img/${product.img}.png`)"
          alt=""
          class="mx-auto relative z-20"
        />
        <div class="w-52 h-6 blur-2xl bg-black mx-auto -mt-6 mb-10"></div>
      </div>
      <div class="flex-1 text-center md:text-left">
        <h4
          v-if="product.new"
          class="uppercase text-deep-brown font-light mb-8 tracking-[.6rem]"
        >
          new product
        </h4>
        <h1 class="font-bold text-3xl md:text-5xl mb-10 w-72 mx-auto md:mx-0">
          {{ product.title }}
        </h1>
        <p
          class="
            leading-7
            opacity-50
            tracking-wide
            mb-12
            w-5/6
            md:w-auto
            mx-auto
            md:mx-0
          "
        >
          {{ product.description }}
        </p>
        <base-button :brown="true">see product</base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props: ['products']
};
</script>