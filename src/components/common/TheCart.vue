<template>
  <div v-if="products.length == 0" class="text-center">
    <h1 class="font-bold text-xl mb-8">Cart is Empty</h1>
    <p>Check out each products and start adding to cart</p>
    <p class="text-deep-brown">Happing Shopping !!</p>
  </div>
  <div v-else class="sm:min-w-[20rem]">
    <div class="flex justify-between items-center">
      <h2 class="font-semibold text-lg">
        Cart <span>( {{ products.length }} )</span>
      </h2>
      <p
        class="opacity-60 cursor-pointer duration-200 hover:text-deep-brown"
        @click="deleteCart"
      >
        Remove all
      </p>
    </div>

    <!---Cart details--->
    <div class="mt-16">
      <!---One detail--->
      <div
        v-for="product in products"
        :key="product.title"
        :product="product"
        class="flex space-x-6 sm:space-x-4 items-center justify-between mb-10"
      >
        <!---Images and the details-->
        <div class="flex items-center gap-4">
          <div class="p-4 rounded-md bg-grey">
            <img
              :src="require(`./../../assets/img/${product.img}.png`)"
              alt=""
              class="w-8"
            />
          </div>
          <div>
            <h2 class="uppercase font-bold">
              {{
                product.title.length > 12
                  ? product.title.slice(0, 12) + "&hellip;"
                  : product.title
              }}
            </h2>
            <p class="text-sm opacity-60">$ {{ product.priceInDollars }}</p>
          </div>
        </div>
        <!----Funtions----->
        <div class="flex items-center gap-2 bg-grey py-2 px-4 font-bold">
          <button
            class="bg-transparent outline-none text-lg text-gray-500"
            @click="decreaseQuantity(product.title, product.quantity)"
          >
            -
          </button>
          <p class="min-w-[1rem] text-center">{{ product.quantity }}</p>
          <button
            class="bg-transparent outline-none text-lg text-gray-500"
            @click="increaseQuantity(product.title)"
          >
            +
          </button>
        </div>
      </div>
    </div>
    <!--Total-->
    <div class="flex justify-between items-center my-8">
      <p class="uppercase opacity-60 text-lg">total</p>
      <p class="font-bold">$ {{ total }}</p>
    </div>
    <router-link to="/checkout-cart" @click="$emit('close')">
      <base-button class="uppercase mx-auto w-full" :brown="true" type="button"
        >checkout</base-button
      >
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    products() {
      return this.$store.getters.cart;
    },
    total() {
      return this.$store.getters.total;
    },
  },
  methods: {
    increaseQuantity(title) {
      this.$store.dispatch("increaseProduct", { title });
    },
    decreaseQuantity(title, quantity) {
      if (quantity === 1) {
        // this.quantity--;
        this.$store.dispatch("deleteProduct", { title });
        return;
      }
      this.$store.dispatch("decreaseProduct", { title });
    },
    deleteCart() {
      this.$store.dispatch("deleteCart");
    },
  },
};
</script>