<template>
  <div class="border rounded-lg">
    <!-- search box -->
    <form
      @submit.prevent="search"
      class="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 space-y-2 md:space-y-0 py-2 px-3"
    >
      <div
        class="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 space-y-2 md:space-y-0 divide-x-0 md:divide-x"
      >
        <div
          class="flex flex-wrap items-stretch w-full relative h-10 bg-white items-center rounded"
        >
          <div class="flex justify-center">
            <span class="flex items-center pr-3 border-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
          <input
            v-on:keyup.enter="search"
            type="text"
            class="flex-shrink flex-grow text-sm flex-auto flex-1 border-0 h-10 border-grey-light text-grey-darker rounded rounded-l-none self-center relative outline-none"
            placeholder="Search vets, farm, users"
            v-model="searchBox"
          />
        </div>

        <div
          class="flex flex-wrap items-stretch w-full relative h-10 bg-white items-center rounded"
        >
          <div class="flex justify-center">
            <span class="flex items-center pr-3 md:px-3 border-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
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
            </span>
          </div>
          <GMapAutocomplete
            @place_changed="setPlace"
            class="appearance-none flex-shrink flex-grow text-sm flex-auto flex-1 border-0 h-10 border-grey-light text-grey-darker rounded rounded-l-none self-center relative outline-none"
            :country="['EN']"
            :placeholder="'Enter Location'"
          />
          <!-- :value="currentPlace.formatted_address" -->
        </div>
      </div>

      <div class="flex flex-row space-x-2">
        <button
          type="submit"
          class="bg-green-500 px-4 w-full text-sm font-bold tracking-wider text-white rounded-lg hover:shadow-lg hover:bg-green-400 h-10"
        >
          Search
        </button>

        <button
          v-on:keyup.esc="filterOpened = false"
          @click="filterOpened = !filterOpened"
          type="button"
          :class="
            filterOpened
              ? 'bg-gray-100 hover:bg-white text-green-500'
              : 'bg-green-500 hover:bg-green-400 text-gray-100'
          "
          class="px-4 text-sm font-bold tracking-wider text-white rounded-lg hover:shadow-lg h-10"
        >
          <svg
            v-if="!filterOpened"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </form>

    <!-- filter box -->
    <div
      v-show="filterOpened"
      class="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 space-y-2 md:space-y-0 py-2 px-3"
    >
      <div class="space-y-2 w-full text-sm text-left">
        <label class="font-bold text-black">Name</label>
        <input
          class="appearance-none block w-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
          required="required"
          placeholder="Name"
          type="text"
        />
      </div>

      <div class="space-y-2 w-full text-sm text-left">
        <label class="font-bold text-black">Tag</label>
        <input
          class="appearance-none block w-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
          required="required"
          placeholder="Tag"
          type="text"
          v-model="tag"
          v-on:keyup.enter="setTags"
        />
      </div>

      <div class="space-y-2 w-full text-sm text-left">
        <label class="font-bold text-black">Select Type</label>
        <select
          class="block w-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
          required="required"
          placeholder="Type"
        >
          <option value="0">Selected Type</option>
          <option value="1">Vet</option>
          <option value="2">Farm</option>
        </select>
      </div>
      <div class="space-y-2 w-full text-sm text-left">
        <label class="font-bold text-black">Sorted Type</label>
        <select
          class="block w-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
          required="required"
          placeholder="Type"
        >
          <option value="0">Sorted Type</option>
          <option value="1">Vet</option>
          <option value="2">Farm</option>
        </select>
      </div>
    </div>

    <!-- filter tags -->
    <div
      v-show="tags.length != 0"
      class="w-full flex flex-wrap items-center space-x-2 space-y-2 py-2 px-3"
    >
      <label class="font-bold text-black">Filter by</label>
      <div v-for="(item, index) in tags" :key="index" class="flex">
        <div
          class="flex flex-row items-center text-center bg-gray-100 space-x-1 py-1 px-2 rounded-lg border"
        >
          <svg
            @click="deleteTags(index)"
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#000"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span class="text-green-500 font-medium">{{ item.tag }}</span>
        </div>
      </div>
      <span @click="removeTags" class="font-bold text-red-500 cursor-pointer"
        >Clear All</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// global
// import Header from "@/components/item/header.vue";
// import Weather from "@/components/item/weather.vue";
// local

declare interface Tags {
  tag: string;
}

export default defineComponent({
  name: "company-search-filter",
  components: {},
  data() {
    return {
      filterOpened: false,
      searchBox: "",
      tag: "",
      tags: new Array<Tags>(),
    };
  },
  methods: {
    search(): void {
      alert(this.searchBox);
    },
    setPlace(): void {},
    setTags(): void {
      if (this.tag) {
        this.tags.push({ tag: this.tag });
        this.tag = "";
      }
    },
    deleteTags(index: number): void {
      this.tags.splice(index, 1);
    },
    removeTags(): void {
      this.tags = [];
    },
  },
});
</script>
