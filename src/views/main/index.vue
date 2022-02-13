<template>
  <div id="app" class="flex flex-row max-h-screen">
    <div class="w-20">
      <Navbar />
    </div>
    <div class="w-screen h-screen overflow-y-auto overflow-x-hidden">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

//global
import Header from "@/components/item/header.vue";
import Navbar from "@/components/item/navbar.vue";

export default defineComponent({
  name: "main-index",
  components: {
    Header,
    Navbar,
  },
  data() {
    return {};
  },
  mounted() {
    if (this.$route.name === "main") {
      this.$router.push({ name: "main-dashboard" });
    }
  },
  methods: {
    headerController() {
      //  switch (this.$route.name) {
      // case "main":
      //   this.$router.push({ name: "main-dashboard" });
      //   break;
      // case "test":
      //   this.$router.push({ name: "main-dashboard" });
      //   break;
      // default:
      //   break;
      //   }
    },
  },
});
</script>
