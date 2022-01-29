<template>
  <div class="w-full flex flex-row">
    <div class="w-full flex flex-col">
      <Header />
      <Weather />
      <div>header content</div>

      <div>header content</div>
      <GMapAutocomplete
        @place_changed="setPlace"
        class="rounded w-full mt-1 border-gray-200 p-3 border"
        :country="['TR']"
      />

      <GMapMap :center="center" :zoom="7" map-type-id="terrain" class="h-full">
        <GMapCluster>
          <GMapMarker
            :key="index"
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

    <SideBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// global
import Header from "@/components/item/header.vue";
import Weather from "@/components/item/weather.vue";
// local
import SideBar from "./sideBar.vue";

export default defineComponent({
  name: "dashboard-index",
  components: {
    Header,
    Weather,
    SideBar,
  },
  data() {
    return {
      center: { lat: 41.006698052954086, lng: 28.976202403952016 },
      currentPlace: null,
      position: { lat: 41.006698052954086, lng: 28.976202403952016 },
    };
  },
  methods: {
    setPlace(val: any) {
      this.currentPlace = val;
      if (val) {
        //this.$parent.customerInfo.adress = val.formatted_address;
        this.position = {
          lat: val.geometry.location.lat(),
          lng: val.geometry.location.lng(),
        };
        this.center = this.position;
      }
    },
    updateCoordinates(location: any) {
      this.position = {
        lat: location.latLng.lat(),
        lng: location.latLng.lng(),
      };
    },
  },
});
</script>
