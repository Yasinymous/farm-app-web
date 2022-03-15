<template>
  <div class="w-full flex flex-row">
    <div class="w-full flex flex-col h-screen space-y-10">
      <div class="h-min mx-10">
        <SearchFilter />
      </div>
      <div class="px-10 space-x-10 h-5/6">
        <AnimalList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// global
// import Header from "@/components/item/header.vue";
// import Weather from "@/components/item/weather.vue";

// local
import AnimalList from "./components/list.vue";
import SearchFilter from "./components/searchFilter.vue";

export default defineComponent({
  name: "company-index",
  components: {
    AnimalList,
    SearchFilter,
  },
  data() {
    return {
      opened: true,
    };
  },
});
</script>
