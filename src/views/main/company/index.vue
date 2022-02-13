<template>
  <div class="w-full flex flex-row">
    <div class="w-full flex flex-col h-screen space-y-10">
      <div class="h-min mx-10">
        <CompanySearchFilter />
      </div>
      <div class="flex flex-row px-10 space-x-10 h-5/6">
        <div
          class="flex flex-col justify-center"
          :class="opened ? 'w-2/2 md:w-1/2' : 'w-2/2'"
        >
          <CompanySorted />
          <CompanyList />
        </div>
        <CompanyMap
          class="hidden md:flex justify-center"
          :class="opened ? 'w-1/2' : 'w-0'"
        />
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
import CompanyMap from "./components/companyMapList.vue";
import CompanyList from "./components/companyList.vue";
import CompanySearchFilter from "./components/companySearchFilter.vue";
import CompanySorted from "./components/companySorted.vue";

export default defineComponent({
  name: "company-index",
  components: {
    CompanyList,
    CompanyMap,
    CompanySearchFilter,
    CompanySorted,
  },
  data() {
    return {
      opened: true,
    };
  },
});
</script>
