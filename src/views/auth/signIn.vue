<template>
  <Message ref="msgBox" />
  <div class="max-w-md w-full space-y-8 p-10 rounded-xl z-10">
    <div class="flex flex-col">
      <div class="flex flex-col sm:flex-row items-center">
        <h2 class="font-bold text-black text-2xl">Sign in to EasyAnimal</h2>
      </div>
      <form @submit.prevent="submit()" class="mt-8 space-y-6 w-96">
        <div class="space-y-2 w-full text-sm text-left">
          <label class="font-bold text-black">Username or Email Address</label>
          <input
            class="appearance-none block w-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            required="required"
            type="text"
            v-model="username"
            name="integration[shop_name]"
            id="integration_shop_name"
          />
        </div>
        <div class="space-y-2 w-full text-sm text-left">
          <div class="flex justify-between">
            <label class="font-bold text-black">Password</label>
            <span class="font-medium cursor-pointer text-blue-500">Forgot password?</span>
          </div>
          <input
            class="appearance-none block w-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            required="required"
            type="password"
            v-model="password"
            name="integration[shop_name]"
            id="integration_shop_name"
          />
        </div>
        <div class="text-left flex">
          <button
            type="submit"
            value="Submit"
            class="bg-green-500 w-full px-4 py-2 text-sm font-bold tracking-wider text-white rounded-lg hover:shadow-lg hover:bg-green-400"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "auth-sign-in",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submit(): void {
      alert(this.username);
      alert(this.password);
      // res mail same error box
      // res username same error box
    },
    messageBox(message: string, type: string) {
      (this.$refs.msgBox as HTMLFormElement).opened(message, type);
    },
  },
});
</script>
