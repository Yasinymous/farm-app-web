<template>
  <div
    v-if="!opened"
    @click="opened = true"
    class="cursor-pointer relative border-l w-5 h-screen flex flex-col justify-between bg-sideNavColor shadow-xl"
  >
    <div
      class="absolute top-20 -left-3 flex items-center bg-white border rounded-full h-6 w-6"
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
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  </div>
  <div
    v-else
    :class="opened ? '' : 'relative'"
    class="w-96 absolute right-0 lg:relative h-screen justify-between px-8 bg-white border-l shadow-xl"
  >
    <div
      @click="opened = false"
      class="cursor-pointer absolute top-20 -left-3 flex items-center bg-white border rounded-full h-6 w-6"
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
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
    <div
      @click="opened = false"
      class="cursor-pointer absolute left-0 h-screen w-8 flex items-center"
    ></div>

    <div class="bg-black">test</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "side-bar",
  data() {
    return {
      opened: true,
    };
  },
});
</script>
