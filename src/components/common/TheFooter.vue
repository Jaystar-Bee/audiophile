<template>
  <footer class="bg-black text-white px-8 md:px-0">
    <div class="container mx-auto just">
      <div class="bg-deep-brown w-40 sm:w-52 h-1 sm:h-2 mx-auto sm:mx-0"></div>
      <div class="py-20">
        <!---Footer Navbar---->
        <div class="md:flex justify-between">
          <h2 class="font-bold text-4xl mb-10 md:mb-0 text-center sm:text-left">
            audiophile
          </h2>
          <div>
            <ul
              class="
                uppercase
                flex flex-col
                sm:flex-row
                items-center
                gap-4
                text-sm
                sm:text-base
                md:gap-10
                justify-center
                sm:justify-start
              "
            >
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/headphones">Headphnes</router-link></li>
              <li><router-link to="/speakers">speakers</router-link></li>
              <li><router-link to="/earphones">earphones</router-link></li>
            </ul>
          </div>
        </div>
        <!---Details-->
        <div
          class="sm:flex opacity-50 my-10 md:my-20 items-center justify-between"
        >
          <div class="flex-1 text-center sm:text-left">
            <p class="leading-7">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p class="mt-20">Copyright 2021. All Rights Reserved</p>
          </div>
          <div
            class="
              flex
              items-center
              space-x-4
              md:flex-1 md:justify-end
              justify-center
              mt-10
              sm:mt-0
            "
          >
            <img src="./../../assets/img/facebook-icon.png" alt="" />
            <img src="./../../assets/img/twitter-icon.png" alt="" />
            <img src="./../../assets/img/instagram-icon.png" alt="" />
          </div>
        </div>
        <!---Details end-->
      </div>
    </div>
  </footer>
</template>