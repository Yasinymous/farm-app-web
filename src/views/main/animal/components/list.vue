<template>
  <div>
    <DataTable :tableTitle="'Animals'" :dataHeaders="headers" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// global
import DataTable from "@/components/general/datatable.vue";
// local
import { Headers } from "../utils/index";

export default defineComponent({
  name: "company-list",
  components: { DataTable },
  data() {
    return {
      headers: Headers,
    };
  },
});
</script>
