<template>
  <div
    class="
      container
      mx-auto
      text-white
      md:flex
      items-center
      bg-[url('./assets/img/tablet-jumbotron-background.png')]
      bg-contain
      bg-center
      bg-no-repeat
      md:bg-none
    "
  >
    <div class="flex-1 text-center md:text-left">
      <h4
        class="
          text-grey
          font-thin
          mb-6
          tracking-widest
          md:tracking-[1rem]
          uppercase
          text-sm text-opacity-50
          md:text-lg
          pt-52
          md:pt-0
        "
      >
        New product
      </h4>
      <div class="text-center md:text-left lg:w-4/6">
        <h1
          class="
            w-60
            md:w-full
            mx-auto
            md:mx-0
            text-3xl
            lg:text-5xl
            xl:text-7xl
            font-bold
          "
        >
          XX99 Mark II Headphones
        </h1>
        <p
          class="
            text-white text-xs
            sm:text-sm
            w-60
            mx-auto
            md:mx-0
            mt-6
            tracking-widest
            md:w-9/12
            text-opacity-70
            leading-7
          "
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
      </div>

      <div class="mt-8">
        <router-link to="/headphones/1">
          <base-button :brown="true">See product</base-button>
        </router-link>
      </div>
    </div>
    <div class="flex-1 hidden md:block">
      <picture>
        <source
          srcset="./../../assets/img/Home-headset.webp"
          type="image/webp"
        />
        <img
          src="./../../assets/img/Home-headset.png"
          alt="xx99 mark 2 headphones"
        />
      </picture>
    </div>
  </div>
</template>
<style scoped>
.container {
  min-height: 40rem;
}
</style>
