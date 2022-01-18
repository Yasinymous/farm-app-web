<template>
  <div class="flex flex-row w-full">
    <div class="bg-yellow-500 h-screen w-4/12">
      <!-- <img
        class="h-full object-cover"
        :src="'/assets/images/testImage.jpg'"
        alt="imageTest"
      /> -->
    </div>
    <div class="h-screen w-8/12 flex justify-center flex-wrap content-center">
      <div class="absolute right-5 top-5">
        <div v-if="$route.name == 'auth-sign-in'">
          <span>Not a member? </span>
          <router-link class="text-blue-500" :to="{ name: 'auth-sign-up' }"
            >Sign up now</router-link
          >
        </div>
        <div v-else>
          <span>Already a member? </span>
          <router-link class="text-blue-500" :to="{ name: 'auth-sign-in' }"
            >Sign In</router-link
          >
        </div>
      </div>
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "auth-index",
  data() {
    return {
      taskName: "",
    };
  },
  methods: {},
});
</script>
