<template>
  <div class="mx-10">
    <TabPanel />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TabPanel from "./components/tabs.vue";

export default defineComponent({
  name: "account-index",
  components: { TabPanel },
  data() {
    return {};
  },
});
</script>
