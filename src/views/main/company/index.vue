<template>
  <div class="w-full flex flex-row">
    <div class="w-full flex flex-col h-screen">
      <!-- <Weather /> -->
      <div class="h-1/6">
        <CompanyFilterSort />
      </div>
      <!-- <div class="flex flex-row px-10 py-10 space-x-10 h-5/6 bg-black">
        <CompanyList class="flex justify-center" :class="opened ? 'w-1/2' : 'w-2/2'" />
        <CompanyMap class="flex justify-center" :class="opened ? 'w-1/2' : 'w-0'" />
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// global
// import Header from "@/components/item/header.vue";
// import Weather from "@/components/item/weather.vue";
// local
// import CompanyMap from "./companyMapList.vue";
// import CompanyList from "./companyList.vue";
import CompanyFilterSort from "./companyFilterSort.vue";

export default defineComponent({
  name: "company-index",
  components: {
    // CompanyList,
    // CompanyMap,
    CompanyFilterSort,
  },
  data() {
    return {
      opened: false,
    };
  },
});
</script>
