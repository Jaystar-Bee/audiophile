<template>
  <div class="min-w-[20rem]">
    <div class="flex justify-between items-center">
      <h2 class="font-semibold text-lg">Cart <span>( 3 )</span></h2>
      <p class="opacity-60 cursor-pointer duration-200 hover:text-deep-brown">
        Remove all
      </p>
    </div>

    <!---Cart details--->
    <div class="mt-16">
      <!---One detail--->
      <div class="flex items-center justify-between mb-10">
        <!---Images and the details-->
        <div class="flex items-center gap-4">
          <div class="p-4 rounded-md bg-grey">
            <img
              src="./../../assets/img/earphone-product-1.png"
              alt=""
              class="w-8"
            />
          </div>
          <div>
            <h2 class="uppercase font-bold">XX99 MK II</h2>
            <p class="text-sm opacity-60">$ 2990</p>
          </div>
        </div>
        <!----Funtions----->
        <div class="flex items-center gap-2 bg-grey py-2 px-4 font-bold">
          <button
            class="bg-transparent outline-none text-lg text-gray-500"
            @click="decreaseQuantity"
          >
            -
          </button>
          <p class="min-w-[1rem] text-center">{{ quantity }}</p>
          <button
            class="bg-transparent outline-none text-lg text-gray-500"
            @click="increaseQuantity"
          >
            +
          </button>
        </div>
      </div>
      <!---One detail--->
      <!-- <div class="flex items-center justify-between"> -->
      <!---Images and the details-->
      <!-- <div class="flex items-center gap-4">
          <div class="p-4 rounded-md bg-grey">
            <img
              src="./../../assets/img/earphone-product-1.png"
              alt=""
              class="w-8"
            />
          </div>
          <div>
            <h2 class="uppercase font-bold">XX99 MK II</h2>
            <p class="text-sm opacity-60">$ 2990</p>
          </div>
        </div>-->
      <!----Funtions----->
      <!--<div class="flex items-center gap-2 bg-grey py-2 px-4 font-bold">
          <button
            class="bg-transparent outline-none text-lg text-gray-500"
            @click="decreaseQuantity"
          >
            -
          </button>
          <p class="min-w-[1rem] text-center">{{ quantity }}</p>
          <button
            class="bg-transparent outline-none text-lg text-gray-500"
            @click="increaseQuantity"
          >
            +
          </button>
        </div>
      </div> -->
    </div>
    <!--Total-->
    <div class="flex justify-between items-center my-8">
      <p class="uppercase opacity-60 text-lg">total</p>
      <p class="font-bold">$ 2,990</p>
    </div>
    <base-button class="uppercase mx-auto w-full" :brown="true"
      >checkout</base-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity !== 1) {
        this.quantity--;
      }
    },
  },
};
</script>