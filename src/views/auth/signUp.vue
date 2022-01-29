<template>
  <Message ref="msgBox" />
  <AddressModal ref="address" @change="setPlace" />
  <div class="w-full space-y-8 p-10 rounded-xl z-10">
    <div class="flex flex-col">
      <div class="flex items-center">
        <h2 class="font-bold text-black text-2xl">Sign up to EasyAnimal</h2>
      </div>
      <form @submit.prevent="submit()">
        <div v-if="stepper == 0" class="mt-8 space-y-6 w-96">
          <div class="space-x-2 w-full flex">
            <div class="space-y-2 w-full text-sm text-left">
              <label class="font-bold text-black">Name</label>
              <input
                class="appearance-none block w-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                required="required"
                placeholder="Name"
                type="text"
                v-model="name"
              />
            </div>

            <div class="space-y-2 w-full text-sm text-left">
              <label class="font-bold text-black">Username</label>
              <input
                class="appearance-none block w-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                required="required"
                placeholder="Username"
                type="text"
                v-model="username"
              />
            </div>
          </div>

          <div class="space-y-2 w-full text-sm text-left">
            <label class="font-bold text-black">Password</label>
            <input
              class="appearance-none block w-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="space-y-2 w-full text-sm text-left">
            <label class="font-bold text-black">Re Password</label>

            <input
              class="appearance-none block w-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              placeholder="Re Password"
              v-model="repassword"
            />
          </div>
          <div class="text-left flex">
            <button
              @click="stepper = 1"
              class="bg-green-500 w-full px-4 py-2 text-sm font-bold tracking-wider text-white rounded-lg hover:shadow-lg hover:bg-green-400"
            >
              Next
            </button>
          </div>
        </div>
        <div v-if="stepper == 1" class="mt-8 space-y-6 w-96">
          <div class="space-x-2 w-full flex">
            <div class="space-y-2 w-full text-sm text-left">
              <label class="font-bold text-black">Phone</label>
              <vue-tel-input :value="phone" @input="onInput"></vue-tel-input>
            </div>

            <div class="space-y-2 w-full text-sm text-left">
              <label class="font-bold text-black">Select Type</label>
              <select
                class="appearance-none block w-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                required="required"
                placeholder="Type"
                v-model="type"
              >
                <option value="0">Selected Type</option>
                <option value="1">Vet</option>
                <option value="2">Farm</option>
              </select>
            </div>
          </div>

          <div class="space-y-2 w-full text-sm text-left">
            <label class="font-bold text-black">Email</label>

            <input
              class="appearance-none block w-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="email"
              placeholder="Email"
              v-model="email"
            />
          </div>

          <div class="space-x-2 w-full flex">
            <div class="space-y-2 w-3/4 text-sm text-left">
              <label class="font-bold text-black">Company Name</label>

              <input
                class="appearance-none block w-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                required="required"
                type="text"
                placeholder="Company Name"
                v-model="companyName"
              />
            </div>
            <div class="space-y-2 w-1/4 text-sm text-left">
              <label class="font-bold text-black">Address</label>

              <button
                type="button"
                class="flex flex-row items-center appearance-none block w-full bg-gray-300 hover:bg-gray-100 hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                @click="addressModalOpen()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 10 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="text-left flex space-x-2">
            <button
              @click="stepper = 0"
              type="button"
              class="bg-yellow-500 w-4/12 px-4 py-2 text-sm font-bold tracking-wider text-white rounded-lg hover:shadow-lg hover:bg-yellow-400"
            >
              Prev
            </button>

            <AsyncButton
              :containerClass="'bg-green-500 w-8/12 text-sm font-bold tracking-wider text-white rounded-lg hover:shadow-lg hover:bg-green-400'"
              :loadState="load"
              :text="'Sign Up'"
              :loadTitle="'Sign Up'"
              :type="'submit'"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

//global
import AsyncButton from "@/components/general/async.button.vue";
// local
import AddressModal from "./modal/address.modal.vue";

declare interface Message {
  name: string;
  status: string;
  message: string;
}

export default defineComponent({
  name: "auth-sign-up",
  components: {
    AsyncButton,
    AddressModal,
  },
  data() {
    return {
      stepper: 0,
      name: "",
      username: "",
      password: "",
      repassword: "",

      phone: "",
      email: "",
      type: 0,
      companyName: "",

      address: "",
      position: "",

      message: new Array<Message>(),

      load: false,
    };
  },
  methods: {
    submit(): void {
      this.load = true;
      if (this.validate()) {
        // message box err message dondur

        let data = {
          name: this.name,
          username: this.username,
          password: this.password,
          repassword: this.repassword,

          phone: this.phone,
          email: this.email,
          type: this.type,
          companyName: this.companyName,

          address: this.address,
          position: this.position,
        };

        if (!this.address || !this.position) {
          this.message.push({
            name: "Sign-Up-Address",
            status: "err",
            message: "There are spaces in the Addressform.",
          });
        }

        this.message.push({
          name: "Sign-Up-Email",
          status: "err",
          message: "There are spaces in the Email.",
        });

        this.message.push({
          name: "Sign-Up-Username",
          status: "err",
          message: "There are spaces in the Username.",
        });

        setTimeout(() => {
          this.messageBox(this.message);
          this.load = false;
          this.message = [];
          console.log(data);
        }, 1000);
      }
    },
    onInput(phone: any, phoneObject: any): void {
      if (phoneObject?.formatted) {
        this.phone = phoneObject.formatted;
      }
      //   console.log(phoneObject); object olarak telefon dondurme
    },
    validate(): boolean {
      if (!this.name || !this.username || !this.password || !this.repassword) {
        this.message.push({
          name: "Sign-Up-Step-1",
          status: "err",
          message: "There are spaces in the form.",
        });
      }
      if (this.password != this.repassword) {
        this.message.push({
          name: "Sign-Up-Pass",
          status: "err",
          message: "Passwords do not match.",
        });
      }
      return true;
    },
    setPlace(data: any): void {
      alert(data.position.lat);
      alert(data.address.formatted_address);
      this.address = data.address.formatted_address;
      this.position = data.position;
    },
    messageBox(message: object) {
      (this.$refs.msgBox as HTMLFormElement).opened(message);
    },
    addressModalOpen(): void {
      (this.$refs.address as HTMLFormElement).showModal();
    },
  },
});
</script>
