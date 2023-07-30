<template>
   <main class="py-12">
        <div class="container mx-auto px-4">
            <div>
                 <img
                    src="/img/404-error.png"
                    alt="404"
                    class="mx-auto"
                 />
            </div>
            <div class="text-center">
                    <h1 class="text-4xl font-bold leading-tight mb-4">
                            404
                    </h1>
                    <p class="text-gray-700 text-xl mb-8">
                            Sorry, we couldn't find this page.
                    </p>
                    <router-link
                            to="/"
                            class="inline-block bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-2 leading-none rounded"
                         >
                         Go back home
                    </router-link>
            </div>
        </div>
   </main>
</template>