<template>
  <div class="min-w-[18rem] sm:min-w-[36rem] max-w-[44rem]">
    <div>
      <img src="./../../assets/img/checkout-confirm.png" alt="" />
      <h1
        class="
          uppercase
          text-xl
          sm:text-3xl
          font-semibold
          tracking-wide
          my-6
          sm:my-10
          w-9/12
        "
      >
        Thank you for your order
      </h1>
      <p class="opacity-60">You will receive an email confirmation shortly.</p>
    </div>
    <div
      class="
        flex flex-col
        sm:flex-row
        rounded-lg
        w-full
        overflow-hidden
        my-10
        shadow-slate-300 shadow-lg shadow-opacity-20
      "
    >
      <div class="w-full sm:w-7/12 bg-grey px-8">
        <div class="flex items-center justify-between py-8">
          <div class="flex items-center gap-4 md:gap-10">
            <img
              src="./../../assets/img/earphone-product-1.png"
              alt=""
              class="w-10"
            />
            <div class="opacity">
              <h4 class="font-semibold text-lg">{{ cart[0].title }}I</h4>
              <p class="opacity-60 mt-1">$ {{ cart[0].priceInDollars }}</p>
            </div>
          </div>
          <p class="opacity-60">x{{ cart[0].quantity }}</p>
        </div>
        <div class="pt-8 border-t border-gray-500" v-if="cartLength > 1">
          <p class="text-center">and {{ cartLength - 1 }} other item(s)</p>
        </div>
      </div>

      <div
        class="
          w-full
          sm:w-5/12
          bg-black
          px-4
          flex flex-col
          justify-center
          text-white
          py-6
          sm:py-0
        "
      >
        <p class="uppercase font-thin opacity-60 mt-4">Grand price</p>
        <p>
          <strong class="text-xl">$ {{ grandTotal }}</strong>
        </p>
      </div>
    </div>
    <div>
      <base-button :brown="true" class="w-full" @click="$emit('close')">Continue</base-button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    cartLength() {
      return this.$store.getters.cart.length;
    },
    grandTotal() {
      return this.$store.getters.grandTotal;
    },
  },
};
</script>