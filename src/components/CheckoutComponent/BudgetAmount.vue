<template>
  <div class="uppercase">
    <div class="flex items-center justify-between mb-4">
      <p class="opacity-60">Total</p>
      <p class="font-semibold">$ {{ cartTotal }}</p>
    </div>
    <div class="flex items-center justify-between mb-4">
      <p class="opacity-60">Shipping</p>
      <p class="font-semibold">$ {{ shippingCost }}</p>
    </div>
    <div class="flex items-center justify-between mb-4">
      <p class="opacity-60">Vat (Included)</p>
      <p class="font-semibold">$ {{ vatCost }}</p>
    </div>
    <div class="flex items-center justify-between my-8">
      <p class="opacity-60">Grand Total</p>
      <p class="font-semibold text-deep-brown">$ {{ grandTotal }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["cartTotal", "shippingCost", "vatCost"],
  computed: {
    grandTotal() {
      return this.cartTotal + this.shippingCost + this.vatCost;
    },
  },
};
</script>