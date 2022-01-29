<template>
  <Message ref="msgBox" />
  <div class="w-full space-y-8 p-10 rounded-xl z-10">
    <div class="flex flex-col">
      <div class="flex items-center">
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
          />
        </div>
        <div class="text-left flex">
          <AsyncButton
            :containerClass="'bg-green-500 w-full text-sm font-bold tracking-wider text-white rounded-lg hover:shadow-lg hover:bg-green-400'"
            :loadState="load"
            :text="'Sign In'"
            :loadTitle="'Sign In'"
            :type="'submit'"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

//global
import AsyncButton from "@/components/general/async.button.vue";

declare interface Message {
  name: string;
  status: string;
  message: string;
}

export default defineComponent({
  name: "auth-sign-in",
  components: {
    AsyncButton,
  },
  data() {
    return {
      username: "",
      password: "",
      message: new Array<Message>(),

      load: false,
    };
  },
  methods: {
    submit(): void {
      // boyle bir kullanici yok
      // username veya sifre yanlis

      this.message.push({
        name: "Sign-In",
        status: "err",
        message:
          "The user name you entered does not belong to an account. Please check the username and try again.",
      });
      this.load = true;
      setTimeout(() => {
        this.messageBox(this.message);
        this.load = false;
      }, 1000);

      // res mail same error box
      // res username same error box
    },
    messageBox(message: object) {
      (this.$refs.msgBox as HTMLFormElement).opened(message);
    },
  },
});
</script>
