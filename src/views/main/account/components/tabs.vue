<template>
  <ul class="flex cursor-pointer space-x-1">
    <router-link
      v-for="(item, i) in items"
      :key="i"
      :to="{ name: item.to }"
      tag="li"
      :class="this.$route.name == item.to ? 'bg-green-100' : ''"
      class="hover:bg-yellow-100 rounded-lg mx-3 cursor-pointer py-2 px-6 bg-white rounded-lg"
    >
      {{ item.name }}
    </router-link>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { tabItems } from "../utils";

export default defineComponent({
  name: "tab-panel",
  data() {
    return {
      items: tabItems,
    };
  },
});
</script>
