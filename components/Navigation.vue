<template>
  <nav
    class="relative w-full flex flex-wrap items-center justify-between text-lg"
    bg-nav
  >
    <div
      class="container-fluid w-full flex flex-wrap items-center justify-between px-6 h-16"
    >
      <div class="container-fluid">
        <nuxt-link
          class="flex items-center text-black-900 hover:text-black-900 focus:text-black-900 mt-2 lg:mt-0 mr-1"
          to="/"
        >
          <img
            src="/logo.svg"
            class="navbar-brand"
            height="24"
            width="60"
            alt="Daim"
          />
        </nuxt-link>
      </div>

      <div class="hidden lg:flex justify-between">
        <Link
          v-bind="item"
          v-for="item of items"
          :key="item.name"
          class="text-xl hover:text-gray-200 btn font-bold text-white-500"
        />
      </div>

      <teleport to="#sidenav">
        <div
          class="w-60 h-full shadow-md bg-nav px-1 absolute top-0 left-0 flex-col lg:hidden"
          :class="{ hidden: !draw, flex: draw }"
        >
          <Link
            v-bind="item"
            v-for="item of items"
            :key="item.name"
            class="relative text-xl hover:text-grey-500 btn font-bold text-white-500"
          />
        </div>
      </teleport>

      <button
        class="navbar-toggler lg:hidden text-black border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="draw = !draw"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          class="w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup>
const { path } = useRoute();
const { data: items } = await useAsyncData(`content-navigation`, () => {
  // return queryContent("/navigation").sort({ pos: 1 }).find();
  return [
    {
      name: "Login",
      url: "/login",
      pos: "1/1",
    },
  ];
});
const draw = ref(false);
</script>
