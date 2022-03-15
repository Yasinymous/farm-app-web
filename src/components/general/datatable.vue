<template>
  <div class="w-full p-0">
    <div
      class="overflow-x-scroll sm:rounded-lg min-w-screen mt-2 w-full divide-y-2 divide-green-500 border-2 border-gray-200"
    >
      <!-- style="min-height: 400px" -->
      <div class="px-2 py-2">
        <div class="text-left border-r-2 border-gray-200 pr-4 max-w-min">
          <span class="text-left text-3xl font-medium text-black-500">
            {{ tableTitle }}</span
          >
        </div>
      </div>
      <table class="w-full divide-y-2 divide-gray-300">
        <thead class="bg-gray-50">
          <tr class="divide-x-2 divide-gray-300">
            <th
              v-for="(header, index) in dataHeaders"
              :key="(index = header.id)"
              scope="col"
              :class="headerAlign(header)"
              class="px-4 py-3 text-md font-medium text-black-500"
            >
              <span>{{ header.name }}</span>
            </th>
          </tr>
        </thead>
        <tbody class="overflow-y-scroll bg-white divide-y divide-gray-300">
          <tr
            v-for="(item, index) in List"
            :key="index"
            :class="{ 'bg-gray-100': index % 2 != 0 }"
            class="divide-x-2 divide-gray-300 hover:bg-gray-200"
          >
            <td
              v-for="header in dataHeaders"
              :key="header.id"
              :class="headerAlign(header)"
              class="px-4 py-1 text-md font-medium text-gray-500"
            >
              <span v-if="item[header.value]"> {{ item[header.value] }}</span>
              <span v-if="header.value == 'index'"> {{ index + 1 }} </span>
              <span v-if="header.value == 'details'" class="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fill-rule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </td>
          </tr>

          <tr v-if="load || List.length == 0" class="p-4 text-center">
            <td colspan="10" class="p-4" v-if="load">
              <i class="fas fa-spinner fa-spin text-xl"></i>
              load
            </td>
            <td colspan="10" class="p-4" v-if="!load && List.length == 0">not found</td>
          </tr>
        </tbody>
      </table>
      <div class="py-2 px-2">
        <PaginationComponents
          :totalRowCount="totalCount"
          :currentPage="currentPage + 1"
          :pageCount="pageCount"
          @changePage="(r) => (currentPage = r - 1)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PaginationComponents from "@/components/general/pagination.vue";

export default defineComponent({
  name: "customerTable",
  components: {
    PaginationComponents,
  },

  props: {
    tableTitle: {
      type: String,
      default: "",
    },
    dataHeaders: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      stateId: 0,
      load: false,
      search: "",
      selectedItem: {
        id: "",
        connectId: "",
        hospitalId: "",
        hotelId: "",
        hotelTypeId: "",
      },
      List: [
        {
          name: "Test1",
          gender: "gender1",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test1",
          gender: "gender1",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test1",
          gender: "gender1",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test1",
          gender: "gender1",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test1",
          gender: "gender1",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test1",
          gender: "gender1",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test1",
          gender: "gender1",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test1",
          gender: "gender1",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test1",
          gender: "gender1",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test1",
          gender: "gender1",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test1",
          gender: "gender1",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test1",
          gender: "gender1",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
        {
          name: "Test2",
          gender: "gender2",
        },
      ],
      totalCount: 0,
      currentPage: 0,
      activeState: 1,
      pageCount: 1,
      filter: {
        welComeAndOutState: "",
        welcomeAndOutDate: "",
        reservationDate: "",
        operationState: "",
        operationDate: "",
        paymentState: "",
        seller: [],
      },
    };
  },
  methods: {
    headerAlign(header: any) {
      return {
        "text-center": header.align == "center",
        "text-left": header.align == "left",
        "text-right": header.align == "right",
        "max-w-min": header.value == "details" || header.value == "index",
        tableCustomColumn5: header.value == "details" || header.value == "index",
        tableCustomColumn15: header.value == "actions",
      };
    },
  },
  watch: {},
});
</script>

<style scoped>
tbody {
  display: block;
  overflow: auto;
  max-height: 500px;
}
thead,
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed; /* even columns width , fix width of table too*/
}
.tableCustomColumn5 {
  width: 5%;
}
.tableCustomColumn15 {
  width: 15%;
}
</style>
