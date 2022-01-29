<template>
  <div id="app" class="flex flex-row max-h-screen">
    <div class="w-20">
      <Navbar />
    </div>
    <div class="w-screen h-screen">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Navbar from "@/components/item/navbar.vue";

export default defineComponent({
  name: "main-index",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
