<template>
  <main>
    <header class="bg-black py-28 lg:py-40 text-white">
      <h1
        class="text-3xl md:text-4xl lg:text-6xl font-bold uppercase text-center"
      >
        Earphones
      </h1>
    </header>

    <section class="container mx-auto md:py-40 px-4 md:px-0 mb-32">
      <HeadphoneProducts :products="earphoneProducts"></HeadphoneProducts>
    </section>
    <section class="py-20">
      <SlidesSection></SlidesSection>
    </section>
    <section class="py-32">
      <LocationSection></LocationSection>
    </section>
  </main>
</template>

<script>
import HeadphoneProducts from "@/components/common/AllProducts.vue";
import SlidesSection from "@/components/common/SlidesSection.vue";
import LocationSection from "@/components/common/LocationSection.vue";
export default {
  components: {
    HeadphoneProducts,
    SlidesSection,
    LocationSection,
  },
    computed: {
    earphoneProducts() {
      return this.$store.getters["products/earphones"];
    },
  },
};
</script>