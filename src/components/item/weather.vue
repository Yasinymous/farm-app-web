<template>
  <div class="flex flex-row space-x-4 overflow-x-auto">
    <div
      v-for="i in 3"
      :key="i"
      class="max-w-xs rounded-lg cursor-pointer overflow-x-none"
    >
      <div class="py-4 px-4 bg-yellow-100 flex flex-col space-y-4">
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
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
        <div class="flex flex-row items-end justify-between space-x-10">
          <div class="flex flex-col items-start">
            <span>+24</span><span>Air Temp</span>
          </div>
          <span>ewqewqewq</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "weather",
});
</script>
