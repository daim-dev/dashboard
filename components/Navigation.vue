<template>
  <nav
    class="relative w-full flex flex-wrap items-center justify-between text-lg shadow-md"
    bg-nav
  >
    <div
      class="container-fluid w-full flex flex-wrap items-center justify-between px-3 h-64px"
    >
      <div class="container-fluid flex">
        <button
          class="navbar-toggler flex text-white border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="$emit('update:draw', !draw)"
        >
          <span class="i-mdi-menu h-24px w-24px my-auto"></span>
        </button>
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

      <div class="md:flex justify-between hidden">
        <Link
          v-bind="item"
          v-for="item of items"
          :key="item.name"
          class="text-xl hover:text-gray-200 btn text-white-500 border-x-0 border-t-0 border-b-2 border-transparent mx-4 px-2"
          :class="{ 'border-b-white': $route.path === item.url }"
        />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    draw: { type: Boolean, default: false },
    items: { type: Array, default: () => [] },
  },
  emits: ["update:draw"],
};
</script>
