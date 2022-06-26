<template>
  <div
    class="flex grow min-h-full shadow-md bg-white flex-col transition-all duration-500"
    :class="{ 'opacity-0': !draw, 'w-0': !draw, 'w-60': draw }"
  >
    <div
      v-for="item of items"
      :key="item.name"
      class="relative flex px-4 hover:bg-gray-500/10"
      :class="{ 'bg-gray-200': $route.path === item.url }"
    >
      <span :class="item.icon" class="text-gray w-32px h-32px my-auto"></span>
      <Link
        v-bind="item"
        class="relative hover:text-grey-500 btn text-black-500"
      ></Link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    draw: { type: Boolean, default: false },
    items: { type: Array, default: () => [] },
  },
};
</script>
