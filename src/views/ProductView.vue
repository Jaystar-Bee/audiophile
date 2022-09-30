<template>
  <main v-if="product">
    <section class="container mx-auto">
      <HeadingSection :product="product"></HeadingSection>
    </section>
    <section class="my-32">
      <FeatureSection :product="product"></FeatureSection>
    </section>
    <section class="my-32">
      <GallerySection :images="product.gallery"></GallerySection>
    </section>
    <section class="my-32">
      <ExtraSection></ExtraSection>
    </section>

    <section class="my-40">
      <SlidesSection></SlidesSection>
    </section>
    <section class="my-40">
      <LocationSection></LocationSection>
    </section>
  </main>
</template>
<script>
import HeadingSection from "@/components/ProductComponent/HeadingSection.vue";
import FeatureSection from "@/components/ProductComponent/FeatureSection.vue";
import GallerySection from "@/components/ProductComponent/GallerySection.vue";
import ExtraSection from "@/components/ProductComponent/ExtraSection.vue";
import SlidesSection from "@/components/common/SlidesSection.vue";
import LocationSection from "@/components/common/LocationSection.vue";
export default {
  props: ["id"],
  components: {
    HeadingSection,
    FeatureSection,
    GallerySection,
    ExtraSection,
    SlidesSection,
    LocationSection,
  },
  data() {
    return {
      product: null,
    };
  },
  created() {
    const arr = this.$route.path.split("/");
    this.$store.dispatch("products/getProduct", {
      type: arr[1],
      id: this.id,
    });
    this.product = this.$store.getters["products/product"];
  },
};
</script>