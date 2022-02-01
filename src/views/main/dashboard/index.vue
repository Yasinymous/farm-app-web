<template>
  <div class="w-full flex flex-row">
    <div class="w-full flex flex-col">
      <Header />
      <!-- <Weather /> -->
      <div>header content</div>

      <div>header content</div>
    </div>

    <!-- <SideBar class="h-screen" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// global
import Header from "@/components/item/header.vue";
// import Weather from "@/components/item/weather.vue";
// local
// import SideBar from "./sideBar.vue";

export default defineComponent({
  name: "dashboard-index",
  components: {
    Header,
    // Weather,
    // SideBar,
  },
  data() {
    return {};
  },
});
</script>
