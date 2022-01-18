<template>
  <div v-show="open" class="w-full absolute top-0 left-0 z-50">
    <div
      @click="closed()"
      class="w-full h-screen absolute top-0 left-0 z-50 bg-black opacity-10 cursor-pointer"
    ></div>
    <div
      class="py-3 px-5 mb-4 bg-red-500 text-sm flex items-center justify-center relative"
      role="alert"
    >
      <span class="font-semibold text-white">{{ message }}</span>
      <button
        class="w-6 absolute right-10"
        type="button"
        data-dismiss="alert"
        aria-label="Close"
        @click="open = false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "global-message",
  data() {
    return {
      open: false,
      type: "",
      message: "",
    };
  },
  methods: {
    opened(message: string, type: string): void {
      this.open = true;

      this.message = message;
      this.type = type;
    },
    closed(): void {
      this.open = false;
    },
  },
});
</script>
