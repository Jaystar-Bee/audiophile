<template>
  <nav
    class="
      flex
      items-center
      justify-between
      py-6
      container
      mx-auto
      border-b border-white border-opacity-20
      text-white
      px-1
    "
  >
    <div class="flex items-center">
      <div class="md:hidden mr-10">
        <img src="./../../assets/img/breadcrumb.png" alt="" />
      </div>
      <router-link to="/"
        ><h2 class="font-black text-2xl">audiophile</h2></router-link
      >
    </div>
    <div class="hidden md:block">
      <ul class="uppercase flex items-center justify-center space-x-8 text-sm">
        <li class="hover:text-light-brown cursor-pointer duration-300">
          <router-link to="/">Home</router-link>
        </li>
        <li class="hover:text-light-brown cursor-pointer duration-300">
          <router-link to="/headphones">Headphones</router-link>
        </li>
        <li class="hover:text-light-brown cursor-pointer duration-300">
          <router-link to="/speakers">Speakers</router-link>
        </li>
        <li class="hover:text-light-brown cursor-pointer duration-300">
          <router-link to="/earphones">Earphones</router-link>
        </li>
      </ul>
    </div>
    <div>
      <img src="./../../assets/img/cart.png" alt="" />
    </div>
  </nav>
</template>