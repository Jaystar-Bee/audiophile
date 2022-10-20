<template>
  <nav
    class="
      flex
      items-center
      justify-between
      py-6
      container
      mx-auto
      border-b border-white border-opacity-20
      text-white
      px-5
      sm:px-1
    "
  >
    <div class="flex items-center">
      <div class="md:hidden mr-10">
        <img
          src="./../../assets/img/breadcrumb.png"
          alt=""
          class="cursor-pointer"
          @click="toggleNav"
        />
      </div>
      <router-link to="/"
        ><h2 class="font-black text-xl sm:text-2xl">audiophile</h2></router-link
      >
    </div>
    <div class="hidden md:block">
      <ul class="uppercase flex items-center justify-center space-x-8 text-sm">
        <li class="hover:text-light-brown cursor-pointer duration-300">
          <router-link to="/">Home</router-link>
        </li>
        <li class="hover:text-light-brown cursor-pointer duration-300">
          <router-link to="/headphones">Headphones</router-link>
        </li>
        <li class="hover:text-light-brown cursor-pointer duration-300">
          <router-link to="/speakers">Speakers</router-link>
        </li>
        <li class="hover:text-light-brown cursor-pointer duration-300">
          <router-link to="/earphones">Earphones</router-link>
        </li>
      </ul>
    </div>
    <div>
      <img src="./../../assets/img/cart.png" alt="" @click="toggleCart" />
    </div>
  </nav>
  <teleport to="body">
    <ModalSlot @close="closeNav" v-if="navIsVisible" :nav="true">
      <template #nav>
        <div>
          <SlidesSection @close="closeNav"></SlidesSection>
        </div>
      </template>
    </ModalSlot>

    <ModalSlot @close="closeCart" v-if="cartIsVisible" :cart="true">
      <template #cart>
        <TheCart @close="closeCart"></TheCart>
      </template>
    </ModalSlot>
  </teleport>
</template>
<script>
import ModalSlot from "./modalSlot";
import SlidesSection from "./SlidesSection.vue";
import TheCart from "./TheCart.vue";
export default {
  components: {
    ModalSlot,
    SlidesSection,
    TheCart,
  },
  data() {
    return {
      navIsVisible: false,
      cartIsVisible: false,
    };
  },
  computed: {
    navAndCart() {
      return `${this.navIsVisible}|${this.cartIsVisible}`;
    },
  },
  methods: {
    closeNav() {
      this.navIsVisible = false;
    },
    closeCart() {
      this.cartIsVisible = false;
    },
    toggleNav() {
      if (this.cartIsVisible) {
        this.cartIsVisible = false;
      }
      this.navIsVisible = !this.navIsVisible;
    },
    toggleCart() {
      if (this.navIsVisible) {
        this.navIsVisible = false;
      }
      this.cartIsVisible = !this.cartIsVisible;
    },
  },
};
</script>