<template>
  <div
    class="
      container
      mx-auto
      mt-20
      flex flex-col
      md:flex-row
      items-center
      gap-10
    "
  >
    <div class="flex-1">
      <img
        src="./../../assets/img/earphone-background.png"
        alt=""
        class="rounded-xl min-w-[100%] sm:min-h-[20rem]"
      />
    </div>
    <div
      class="
        flex-1
        min-h-[12rem]
        sm:min-h-[20rem]
        bg-grey
        rounded-xl
        self-stretch
        flex flex-col
        justify-center
        bg-gradient-to-r
        from-grey
        to-red-50
      "
    >
      <div class="ml-8 md:ml-20">
        <h2 class="text-xl sm:text-2xl md:text-4xl font- mb-10">
          YX1 EARPHONES
        </h2>
        <div>
          <base-button :outline="true">See Product</base-button>
        </div>
      </div>
    </div>
  </div>
</template>