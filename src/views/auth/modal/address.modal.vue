<template>
  <modal name="create-team-modal" @close="close" ref="modal">
    <template v-slot:header></template>
    <template v-slot:body>
      <div class="w-full space-y-8 p-10 rounded-xl flex justify-center">
        <div class="flex flex-col">
          <div class="flex items-center">
            <h2 class="font-bold text-black text-2xl">Address Select</h2>
          </div>
          <form @submit.prevent="submit()" class="mt-8 space-y-6 w-96">
            <div class="space-y-2 w-full text-sm text-left">
              <label class="font-bold text-black">Search</label>
              <!-- :value="currentPlace.formatted_address" -->
              <GMapAutocomplete
                @place_changed="setPlace"
                :value="currentPlace.formatted_address"
                class="appearance-none block w-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                :country="['EN']"
                :placeholder="'Enter Location'"
              />
            </div>
            <div class="w-full text-sm text-left">
              <GMapMap
                :center="center"
                :zoom="7"
                @click="handleClick"
                class="appearance-none block w-full bg-gray-100 hover:bg-white hover:border-yellow-500 text-grey-darker border border-grey-lighter rounded-lg h-80"
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
            <div class="text-left flex space-x-2">
              <button
                @click="reset()"
                type="button"
                class="bg-yellow-500 w-4/12 px-4 py-2 text-sm font-bold tracking-wider text-white rounded-lg hover:shadow-lg hover:bg-yellow-400"
              >
                Reset
              </button>

              <AsyncButton
                :containerClass="'bg-green-500 w-8/12 text-sm font-bold tracking-wider text-white rounded-lg hover:shadow-lg hover:bg-green-400'"
                :loadState="load"
                :text="'Save'"
                :loadTitle="'Save'"
                :type="'submit'"
              />
            </div>
          </form>
        </div>
      </div>
    </template>
  </modal>
</template>
<script lang="ts">
import { defineComponent } from "vue";

//global
import AsyncButton from "@/components/general/async.button.vue";

export default defineComponent({
  name: "add-address-modal",
  components: {
    AsyncButton,
  },
  data() {
    return {
      center: { lat: 41.006698052954086, lng: 28.976202403952016 },
      currentPlace: {
        formatted_address: "",
      },
      position: { lat: 41.006698052954086, lng: 28.976202403952016 },
      load: false,
      options: {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        clickable: true,
      },
    };
  },
  methods: {
    showModal() {
      (this.$refs.modal as HTMLFormElement).open();
    },
    submit(): void {
      this.load = true;
      setTimeout(() => {
        this.load = false;
        this.$emit("change", {
          position: this.position,
          address: this.currentPlace,
        });
        (this.$refs.modal as HTMLFormElement).close();
      }, 1000);
    },
    reset(): void {
      this.center = { lat: 41.006698052954086, lng: 28.976202403952016 };
      this.position = this.center;
      this.currentPlace = { formatted_address: "" };
    },
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
    handleClick(location: any) {
      this.position = {
        lat: location.latLng.lat(),
        lng: location.latLng.lng(),
      };
    },
  },
  watch: {},
});
</script>

<style scoped>
.my-card {
  width: 500px;
  max-width: 80vw;
}
</style>
