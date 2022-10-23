<template>
  <div class="px-4 md:px-0">
    <div class="my-12 md:my-20">
      <p
        class="capitalize cursor-pointer hover:text-deep-brown duration-300"
        @click="$router.back()"
      >
        go back
      </p>
    </div>
    <div class="flex flex-col md:flex-row items-center gap-20">
      <div class="flex-1 bg-grey p-10 py-20 rounded-md w-full">
        <img
          :src="require(`./../../assets/img/${product.img}.png`)"
          alt=""
          class="mx-auto relative z-10"
        />
        <div
          class="
            w-32
            sm:w-40
            h-6
            rounded-full
            bg-black
            mx-auto
            blur-xl
            -mt-6
            opacity-80
          "
        ></div>
      </div>
      <div class="flex-1">
        <h1
          class="
            w-[20rem]
            font-bold
            text-3xl
            md:text-5xl
            uppercase
            pl-3
            sm:pl-0
          "
        >
          {{ product.title }}
        </h1>
        <p class="my-6 md:my-12 opacity-60 w-11/12 pl-3 pr-2 sm:pr-0 sm:pl-0">
          {{ product.description }}
        </p>
        <h2 class="my-12 text-lg font-semibold pl-3 sm:pl-0">
          $ {{ product.priceInDollars.toFixed(2) }}
        </h2>
        <div
          class="
            flex
            items-center
            gap-4
            md:gap-8
            w-11/12
            mx-auto
            sm:w-auto sm:mx-0
          "
        >
          <div
            class="
              flex
              items-center
              gap-6
              bg-grey
              py-2
              md:py-4
              px-4
              md:px-6
              font-bold
            "
          >
            <button
              class="bg-transparent outline-none border-0 text-lg text-gray-500"
              @click="decreaseQuantity"
            >
              -
            </button>
            <p class="min-w-[2rem] text-center">{{ quantity }}</p>
            <button
              class="bg-transparent outline-none border-0 text-lg text-gray-500"
              @click="increaseQuantity"
            >
              +
            </button>
          </div>
          <base-button :brown="true" @click="addToCart"
            >add to cart</base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
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
    addToCart() {
      const total = this.product.priceInDollars * this.quantity;
      const newCart = {
        ...this.product,
        quantity: this.quantity,
        total,
      };
      this.$store.dispatch("addNewItem", newCart);
    },
  },
};
</script>