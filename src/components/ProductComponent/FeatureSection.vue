<template>
  <div class="flex flex-col md:flex-row gap-10 container mx-auto px-4 md:px-0">
    <div class="flex-1">
      <h1 class="uppercase text-2xl md:text-4xl font-bold tracking-widest">
        Features
      </h1>
      <div class="mt-10 opacity-60">
        <p class="my-10">
          {{ product.feature1 }}
        </p>
        <p>
          {{ product.feature2 }}
        </p>
      </div>
    </div>
    <div class="flex-1 md:flex md:justify-center mt-10 md:mt-0">
      <div>
        <h1 class="uppercase text-2xl md:text-4xl font-bold tracking-widest">
          In the Box
        </h1>
        <div class="mt-10">
          <ul>
            <li
              class="flex items-center gap-6 mb-4"
              v-for="extra in product.inTheBox"
              :key="extra.id"
              :extra="extra"
            >
              <span class="font-bold text-deep-brown"
                >{{ extra.quantity }}x</span
              >
              <p class="opacity-60">{{ extra.name }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>