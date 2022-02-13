<template>
  <div class="h-screen flex flex-col justify-between py-5 bg-sideNavColor shadow-xl">
    <div>
      <img class="h-12 w-12 mx-auto my-2 rounded-lg" src="@/assets/svgsiyah.svg" alt="" />
    </div>

    <ul class="flex flex-col justify-center min-w-max space-y-8 mb-24">
      <router-link
        v-for="(item, i) in items"
        :key="i"
        :to="{ name: item.to }"
        tag="li"
        :class="this.$route.name == item.to ? 'bg-green-100' : ''"
        class="hover:bg-yellow-100 rounded-lg mx-3 cursor-pointer"
      >
        <svg
          class="mx-auto my-2"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path :d="item.icon" /></svg
      ></router-link>
    </ul>

    <div class="hover:bg-gray-200 rounded-lg mx-3 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 mx-auto my-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { navItems } from "./utils";
export default defineComponent({
  name: "nav-bar",
  data() {
    return {
      items: navItems,
    };
  },
});
</script>

<style scoped></style>
