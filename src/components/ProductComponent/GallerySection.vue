<template>
  <div class="items-center px-4 md:px-0 container mx-auto gap-20 md:flex">
    <div class="flex-1">
      <div
        v-if="images[0]"
        class="h-[18rem] bg-grey mb-10 rounded-lg overflow-hidden"
      >
        <img
          :src="require(`./../../assets/img/${images[0]}.png`)"
          alt=""
          class="object-cover h-[18rem] w-full"
        />
      </div>
      <div
        v-if="images[1]"
        class="h-[18rem] bg-grey mb-10 rounded-lg overflow-hidden"
      >
        <img
          :src="require(`./../../assets/img/${images[1]}.png`)"
          alt=""
          class="object-cover h-[18rem] w-full"
        />
      </div>
    </div>
    <div
      v-if="images[2]"
      class="
        flex-1
        h-[28.5rem]
        md:h-[38.5rem]
        bg-grey
        mb-10
        rounded-lg
        overflow-hidden
      "
    >
      <img
        :src="require(`./../../assets/img/${images[2]}.png`)"
        alt=""
        class="object-cover h-[28.5rem] md:h-[38.5rem] w-full"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["images"],
};
</script>