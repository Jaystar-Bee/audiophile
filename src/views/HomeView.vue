<template>
  <section
    class="bg-deep-black pb-28 md:pb-0 md:py-20 rounded-b-xl px-2 md:px-0"
  >
    <JumbotronSection></JumbotronSection>
  </section>

  <section class="py-40 px-4 md:px-0">
    <SlidesSection></SlidesSection>
  </section>
  <section class="py-10 px-8 md:px-0">
    <SpeakersSection></SpeakersSection>
  </section>
  <section class="my-32 px-4 md:px-0">
    <LocationSection></LocationSection>
  </section>
</template>

<script>
import JumbotronSection from "@/components/HomeComponents/JumbotronSection.vue";
import SlidesSection from "@/components/common/SlidesSection.vue";
import LocationSection from "@/components/common/LocationSection.vue";
import SpeakersSection from "@/components/HomeComponents/SpeakersSection.vue";
export default {
  name: "HomeView",
  components: {
    JumbotronSection,
    SlidesSection,
    SpeakersSection,
    LocationSection,
  },
};
</script>