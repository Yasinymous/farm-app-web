<template>
  <div v-show="open" class="w-full absolute top-0 left-0 z-50">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="py-3 px-16 text-sm flex items-center justify-center"
      :class="item.status == 'err' ? 'bg-red-500' : 'bg-green-500'"
    >
      <span class="font-semibold text-white">{{ item.message }}</span>
    </div>
    <button
      class="w-6 absolute top-2.5 right-10"
      type="button"
      data-dismiss="alert"
      aria-label="Close"
      @click="closed()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#fff"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <div @click="closed()" class="h-screen bg-black opacity-10"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "global-message",
  data() {
    return {
      open: false,
      list: [],
    };
  },
  methods: {
    opened(message: any): void {
      this.open = true;

      this.list = message;
    },
    closed(): void {
      this.open = false;
    },
  },
});
</script>
