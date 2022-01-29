<template>
  <div class="h-screen flex flex-col justify-between py-5 bg-sideNavColor shadow-2xl">
    <div>
      <img class="h-12 w-12 mx-auto my-2 rounded-lg" src="@/assets/svgsiyah.svg" alt="" />
    </div>

    <ul class="flex flex-col justify-center min-w-max space-y-8 mb-24">
      <router-link
        :to="{ name: 'main-dashboard' }"
        tag="li"
        class="hover:bg-gray-200 rounded-lg mx-3 cursor-pointer"
      >
        <svg
          class="mx-auto my-2"
          :class="this.$route.name == 'main-dashboard' ? 'bg-red-500' : ''"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.5C0 0.223857 0.223858 0 0.5 0H10.5C10.7761 0 11 0.223858 11
          0.5V13.5C11 13.7761 10.7761 14 10.5 14H0.5C0.223858 14 0 13.7761 0 13.5V0.5Z M13
          10.5C13 10.2239 13.2239 10 13.5 10H23.5C23.7761 10 24 10.2239 24 10.5V23.5C24
          23.7761 23.7761 24 23.5 24H13.5C13.2239 24 13 23.7761 13 23.5V10.5Z M0 16.5C0
          16.2239 0.223858 16 0.5 16H10.5C10.7761 16 11 16.2239 11 16.5V23.5C11 23.7761
          10.7761 24 10.5 24H0.5C0.223858 24 0 23.7761 0 23.5V16.5Z M13 0.5C13 0.223858
          13.2239 0 13.5 0H23.5C23.7761 0 24 0.223858 24 0.5V7.5C24 7.77614 23.7761 8 23.5
          8H13.5C13.2239 8 13 7.77614 13 7.5V0.5Z"
          /></svg
      ></router-link>
      <router-link
        :to="{ name: 'main-operation' }"
        tag="li"
        class="hover:bg-gray-200 rounded-lg mx-3 cursor-pointer"
      >
        <svg
          :class="this.$route.name == 'main-operation' ? 'bg-red-500' : ''"
          class="mx-auto my-2"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.5C0 0.223857 0.223858 0 0.5 0H10.5C10.7761 0 11 0.223858 11 0.5V13.5C11 13.7761 10.7761 14 10.5 14H0.5C0.223858 14 0 13.7761 0 13.5V0.5Z M13 10.5C13 10.2239 13.2239 10 13.5 10H23.5C23.7761 10 24 10.2239 24 10.5V23.5C24 23.7761 23.7761 24 23.5 24H13.5C13.2239 24 13 23.7761 13 23.5V10.5Z M0 16.5C0 16.2239 0.223858 16 0.5 16H10.5C10.7761 16 11 16.2239 11 16.5V23.5C11 23.7761 10.7761 24 10.5 24H0.5C0.223858 24 0 23.7761 0 23.5V16.5Z M13 0.5C13 0.223858 13.2239 0 13.5 0H23.5C23.7761 0 24 0.223858 24 0.5V7.5C24 7.77614 23.7761 8 23.5 8H13.5C13.2239 8 13 7.77614 13 7.5V0.5Z"
          /></svg
      ></router-link>
      <router-link
        to="/about"
        tag="li"
        class="hover:bg-gray-200 rounded-lg mx-3 cursor-pointer"
      >
        <svg
          :class="this.$route.name == 'About' ? 'navIconColorFocus' : 'navIconColor'"
          class="mx-auto my-2"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.5C0 0.223857 0.223858 0 0.5 0H10.5C10.7761 0 11 0.223858 11 0.5V13.5C11 13.7761 10.7761 14 10.5 14H0.5C0.223858 14 0 13.7761 0 13.5V0.5Z M13 10.5C13 10.2239 13.2239 10 13.5 10H23.5C23.7761 10 24 10.2239 24 10.5V23.5C24 23.7761 23.7761 24 23.5 24H13.5C13.2239 24 13 23.7761 13 23.5V10.5Z M0 16.5C0 16.2239 0.223858 16 0.5 16H10.5C10.7761 16 11 16.2239 11 16.5V23.5C11 23.7761 10.7761 24 10.5 24H0.5C0.223858 24 0 23.7761 0 23.5V16.5Z M13 0.5C13 0.223858 13.2239 0 13.5 0H23.5C23.7761 0 24 0.223858 24 0.5V7.5C24 7.77614 23.7761 8 23.5 8H13.5C13.2239 8 13 7.77614 13 7.5V0.5Z"
          /></svg
      ></router-link>
    </ul>

    <div>
      <img class="h-12 w-12 mx-auto my-2 rounded-lg" src="" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "nav-bar",
});
</script>
