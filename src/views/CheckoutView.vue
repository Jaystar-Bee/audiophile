<template>
  <div class="container mx-auto py-20">
    <div>
      <p
        @click="$router.back()"
        class="hover:text-deep-brown cursor-pointer duration-300"
      >
        Go Back
      </p>
    </div>
    <div>
      <CheckoutForm
        v-if="cartLength > 0"
        @orderSuccess="openModal"
      ></CheckoutForm>
      <div v-else class="text-center w-[20rem] mx-auto mt-12">
        <h2 class="text-xl font-bold mb-10">No items to Order man</h2>
        <p class="mb-4">
          How did you get here? Please stop playing with the browser nav button
          or address bar
        </p>
        <p>
          Click
          <router-link to="/" class="text-deep-brown">here</router-link> to go
          somewhere safe
        </p>
      </div>
    </div>
  </div>
  <ModalSlot @close="closeModal" :normal="true" v-if="modalIsVisible">
    <template #default>
      <CheckoutSuccess @close="closeModal"></CheckoutSuccess>
    </template>
  </ModalSlot>
</template>
<script>
import CheckoutForm from "@/components/CheckoutComponent/CheckoutForm.vue";
import ModalSlot from "@/components/common/modalSlot.vue";
import CheckoutSuccess from "@/components/CheckoutComponent/CheckoutSuccess.vue";
export default {
  components: {
    CheckoutForm,
    ModalSlot,
    CheckoutSuccess,
  },
  data() {
    return {
      modalIsVisible: false,
    };
  },
  computed: {
    cartLength() {
      return this.$store.getters.cart.length;
    },
  },
  methods: {
    closeModal() {
      this.modalIsVisible = false;
      this.$store.dispatch("deleteCart");
      this.$router.replace("/");
    },
    openModal() {
      this.modalIsVisible = true;
    },
  },
};
</script>