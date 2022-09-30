<template>
  <div
    class="
      flex
      items-center
      gap-32
      justify-center
      container
      mx-auto
      flex-wrap
      px-4
      md:px-0
    "
  >
    <router-link
      v-for="slide in slides"
      :to="slide.href"
      :key="slide.id"
      class="flex-1 min-w-min slide mx-auto"
    >
      <div
        class="
          bg-grey
          rounded-md
          py-6
          pt-12
          cursor-pointer
          hover:text-deep-brown
        "
      >
        <img
          :src="require(`@/assets/img/${slide.img}.png`)"
          alt=""
          class="-mt-32 mx-auto h-32"
        />
        <div
          class="
            w-28
            h-6
            rounded-full
            bg-black
            mx-auto
            blur-xl
            -mt-4
            opacity-80
          "
        ></div>

        <div class="uppercase w-full mx-auto text-center mt-8">
          <h4 class="text-black">{{ slide.title }}</h4>
          <div class="flex items-center space-x-3 justify-center mt-4">
            <p class="duration-300 text-sm opacity-80">Shop</p>
            <img src="./../../assets/img/arrow-right-brown.png" alt="" />
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SlidesSection",
  data() {
    return {
      slides: [
        {
          id: 1,
          img: "headset-home-1",
          subset: "./../../assets/img/headset-home-1.webp",
          title: "Headphones",
          href: "/headphones",
        },
        {
          id: 2,
          img: "Home-speaker-1",
          subset: "./../../assets/img/Home-speaker-1.webp",
          title: "Speakers",
          href: "/speakers",
        },
        {
          id: 3,
          img: "Home-earphone-1",
          subset: "./../../assets/img/Home-earphone-1.webp",
          title: "Earphones",
          href: "/earphones",
        },
      ],
    };
  },
};
</script>

<style scoped>
.slide {
  min-width: 12rem;
  max-width: 26rem;
}
</style>