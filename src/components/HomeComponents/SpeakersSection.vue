<template>
  <div>
    <SpeakerOne></SpeakerOne>
    <SpeakerTwo></SpeakerTwo>
    <SpeakerThree></SpeakerThree>
  </div>
</template>
<script>
import SpeakerOne from "@/components/HomeComponents/SpeakerOne.vue";
import SpeakerTwo from "@/components/HomeComponents/SpeakerTwo";
import SpeakerThree from "@/components/HomeComponents/SpeakerThree";
export default {
  components: {
    SpeakerOne,
    SpeakerTwo,
    SpeakerThree,
  },
};
</script>