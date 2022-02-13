<template>
  <div class="flex flex-row items-center justify-between my-2 relative">
    <div class="flex flex-row items-center space-x-2">
      <span class="text-sm">We found</span>
      <span class="font-bold text-lg">10 search results</span>
    </div>
    <div
      @click="openedSorted = !openedSorted"
      class="flex flex-row items-center space-x-2 cursor-pointer"
    >
      <span class="text-sm">Sort by</span>
      <span class="font-bold text-lg text-green-500">any</span>
      <div
        :class="
          openedSorted
            ? 'bg-gray-100 hover:bg-white text-green-500'
            : 'bg-green-500 hover:bg-green-400 text-gray-100'
        "
        class="py-2 px-2 text-sm font-bold tracking-wider rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      </div>
    </div>

    <div
      v-show="openedSorted"
      class="z-40 absolute top-10 px-3 py-3 w-32 right-0 border rounded-md bg-white"
    >
      <ul class="text-left space-y-2">
        <li class="p-1 cursor-pointer hover:bg-gray-100 rounded-md">ASC</li>
        <li class="p-1 cursor-pointer hover:bg-gray-100 rounded-md">DESC</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "company-sorted",
  data() {
    return { openedSorted: false };
  },
});
</script>
