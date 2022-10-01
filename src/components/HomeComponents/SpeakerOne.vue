<template>
  <div
    class="
      bg-deep-brown
      container
      mx-auto
      pt-20
      rounded-xl
      text-white
      relative
      overflow-hidden
    "
  >
    <div
      class="
        absolute
        border border-white
        rounded-full
        w-[50rem]
        h-[50rem]
        md:w-[64rem] md:h-[64rem]
        border-opacity-50
      "
    ></div>
    <div
      class="
        absolute
        border border-white
        rounded-full
        w-[28rem]
        md:w-[32rem]
        h-[28rem]
        md:h-[32rem]
        border-opacity-50
      "
    ></div>
    <div
      class="
        absolute
        border border-white
        rounded-full
        w-[22rem]
        h-[22rem]
        md:w-[28rem] md:h-[28rem]
        border-opacity-50
      "
    ></div>
    <div class="flex flex-col md:flex-row justify-center gap-12 z-20 relative">
      <img
        src="./../../assets/img/Home-speaker-2.png"
        alt=""
        class="w-40 mx-auto md:mx-0 md:w-auto"
      />
      <div class="mt-16 md:mt-8 lg:pl-20 text-center">
        <h1
          class="uppercase w-40 mx-auto md:mx-0 md:w-auto text-4xl lg:text-6xl"
        >
          ZX9 SPEAKER
        </h1>
        <p class="w-4/6 mx-auto md:mx-0 lg:w-4/6 my-12">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <router-link to="/speakers/1">
        <base-button class="mb-10 md:mb-0">see product</base-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.absolute {
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media only screen and (min-width: 768px) {
  .absolute {
    top: 70%;
    left: 25%;
    transform: translate(-50%, -50%);
  }
} ;
</style>