<template>
  <div class="flex items-center justify-between border-white-custom w-full">
    <span class="text-sm">{{ totalRowCount }} test</span>
    <div class="flex-1 flex justify-between sm:hidden">
      <button
        type="button"
        @click="current = current > 1 ? current - 1 : 1"
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ml-3"
      >
        test
      </button>
      <button
        type="button"
        @click="current = current < pageCount ? current + 1 : pageCount"
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
      >
        test
      </button>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div></div>
      <div>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            type="button"
            @click="current = current > 1 ? current - 1 : 1"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only"> test </span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <button
            type="button"
            v-for="item in pageCount"
            :key="item"
            aria-current="page"
            @click="current = item"
            class="z-10 bg-indigo-50 relative inline-flex items-center px-4 py-2 border-2 text-sm font-medium"
            :class="currentPage == item && 'border-green-500 text-green-600'"
          >
            {{ item }}
          </button>

          <button
            type="button"
            @click="current = current < pageCount ? current + 1 : pageCount"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only"> test </span>
            <!-- Heroicon name: solid/chevron-right -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["pageCount", "currentPage", "totalRowCount"],
  name: "pagination",
  data() {
    return {
      current: 0,
    };
  },
  watch: {
    current(val) {
      if (val != this.currentPage) {
        this.$emit("changePage", val);
      }
    },
    currentPage(val) {
      this.current = val;
    },
  },
});
</script>

<style></style>
