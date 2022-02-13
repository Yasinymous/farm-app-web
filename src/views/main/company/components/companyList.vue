<template>
  <div
    :class="
      this.$parent.opened
        ? 'md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 '
        : 'lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 '
    "
    class="grid gap-10 overflow-y-auto overflow-x-hidden pr-3"
  >
    <div
      v-for="i in 10"
      :key="i"
      class="h-min rounded-md shadow-lg hover:scale-105 transition duration-500 cursor-pointer"
    >
      <div>
        <img
          src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg"
          alt=""
        />
      </div>
      <div class="py-4 px-4 bg-white">
        <h3 class="text-md font-semibold text-gray-600">
          Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
        </h3>
        <p class="mt-4 text-lg font-thin">$ 2400</p>
        <span
          class="flex items-center justify-center mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <button class="font-semibold text-gray-800">Add to Basket</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// global
// import Header from "@/components/item/header.vue";
// import Weather from "@/components/item/weather.vue";
// local

export default defineComponent({
  name: "company-list",
  components: {},
  data() {
    return {};
  },
});
</script>
