<template>
  <div class="">
    <div
      v-if="!this.$parent.opened"
      @click="this.$parent.opened = true"
      class="cursor-pointer relative border-l w-5 flex flex-col justify-between shadow-xl"
    >
      <div
        class="absolute top-20 -left-4 flex items-center bg-white border rounded-full h-8 w-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          />
        </svg>
      </div>
    </div>
    <div v-else class="w-full relative">
      <div
        @click="this.$parent.opened = false"
        class="cursor-pointer absolute top-20 z-40 -left-4 flex items-center bg-white border rounded-full h-8 w-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>
      </div>
      <GMapMap
        :center="center"
        :zoom="7"
        @click="handleClick"
        class="appearance-none block w-full h-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg"
      >
        <GMapCluster>
          <GMapMarker
            :position="{
              lat: parseFloat(position.lat),
              lng: parseFloat(position.lng),
            }"
            @click="center = position"
            :draggable="true"
            @drag="updateCoordinates"
          />
        </GMapCluster>
      </GMapMap>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "company-map",
  components: {},
  data() {
    return {
      center: { lat: 41.006698052954086, lng: 28.976202403952016 },
      currentPlace: {
        formatted_address: "",
      },
      position: { lat: 41.006698052954086, lng: 28.976202403952016 },
      load: false,
    };
  },
});
</script>
