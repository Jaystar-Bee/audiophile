<template>
  <div class="container mx-auto py-20">
    <div>
      <p @click="$route.back()" class="hover:text-deep-brown duration-300">
        Go Back
      </p>
    </div>
    <div>
      <CheckoutForm></CheckoutForm>
    </div>
  </div>
</template>
<script>
import CheckoutForm from "./../components/CheckoutForm.vue";
export default {
  components: {
    CheckoutForm,
  },
};
</script>