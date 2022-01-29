<template>
  <button
    class="h-9 transition-all px-4 duration-200"
    :class="[containerClass]"
    :type="type"
    :disabled="loadState"
  >
    <span v-if="loadState" class="flex items-center justify-center">
      <img class="h-8" src="@/assets/icons/loading.svg" alt="" />
      <span class="pt-0.5">{{ loadTitle }}</span>
    </span>
    <div v-if="!loadState" class="">
      <span class="pt-0.5"> <i :class="icon"></i> {{ text }} </span>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "async-btn",
  props: {
    containerClass: {
      type: String,
      default: "",
      required: false,
    },
    loadState: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "fas fa-paper-plane",
      required: false,
    },
    loadTitle: {
      type: String,
      required: false,
      default: "Sign In",
    },
    text: {
      type: String,
      required: true,
      default: "Sign In",
    },
    type: {
      type: String,
      required: false,
      default: "submit",
    },
  },
  data() {
    return {
      open: false,
    };
  },
});
</script>
