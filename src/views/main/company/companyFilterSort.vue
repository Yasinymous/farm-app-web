<template>
  <div class="border rounded-lg m-10">
    <div class="w-full flex space-x-2 divide-x py-3 px-3">
      <div
        class="flex flex-wrap items-stretch w-full relative h-10 bg-white items-center rounded"
      >
        <div class="flex justify-center">
          <span class="flex items-center pr-3 border-0">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
        <input
          type="text"
          class="flex-shrink flex-grow text-sm flex-auto flex-1 border-0 h-10 border-grey-light text-grey-darker rounded rounded-l-none self-center relative outline-none"
          placeholder="Username"
        />
      </div>

      <div
        class="flex flex-wrap items-stretch w-full relative h-10 bg-white items-center rounded"
      >
        <div class="flex justify-center">
          <span class="flex items-center px-3 border-0">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
        </div>
        <input
          type="text"
          class="flex-shrink flex-grow text-sm flex-auto flex-1 border-0 h-10 border-grey-light text-grey-darker rounded rounded-l-none self-center relative outline-none"
          placeholder="Username"
        />
      </div>

      <div
        class="flex flex-wrap items-stretch w-full relative h-10 bg-white items-center rounded"
      >
        <div class="flex justify-center">
          <span class="flex items-center px-3 border-0">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
        <input
          type="text"
          class="flex-shrink flex-grow text-sm flex-auto flex-1 border-0 h-10 border-grey-light text-grey-darker rounded rounded-l-none self-center relative outline-none"
          placeholder="Username"
        />
      </div>

      <button
        type="button"
        class="bg-green-500 px-3 text-sm font-bold tracking-wider text-white rounded-lg hover:shadow-lg hover:bg-green-400"
      >
        Search
      </button>
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
  name: "company-sort",
  components: {},
  data() {
    return {};
  },
});
</script>
