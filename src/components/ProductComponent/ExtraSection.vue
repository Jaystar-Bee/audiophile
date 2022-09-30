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
    <div class="flex-1 min-w-fit">
      <div class="w-full p-10 bg-grey rounded-md">
        <img
          src="./../../assets/img/headphone-product-1.png"
          alt=""
          class="h-[12rem] mx-auto"
        />
      </div>
      <div class="mt-8 text-center">
        <h2 class="uppercase font-bold text-xl mb-8">XX99 MARK I</h2>
        <base-button :brown="true">see product</base-button>
      </div>
    </div>
    <!-- <div class="flex-1 min-w-fit">
      <div class="w-full p-10 bg-grey rounded-md">
        <img
          src="./../../assets/img/headphone-product-3.png"
          alt=""
          class="h-[12rem] mx-auto"
        />
      </div>
    </div>
    <div class="flex-1 min-w-fit">
      <div class="w-full p-10 bg-grey rounded-md">
        <img
          src="./../../assets/img/speaker-product-1.png"
          alt=""
          class="h-[12rem] mx-auto"
        />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ["extra"],
};
</script>