<template>
  <transition name="modal-fade">
    <div
      v-show="isModalVisible"
      class="modal-backdrop w-full overflow-auto h-screen lg:h-full md:h-full bg-white lg:bg-transparent md:bg-transparent"
    >
      <div class="relative w-full md:w-min z-50 flex flex-wrap justify-center">
        <div
          class="rounded-sm relative flex flex-col h-screen lg:h-full md:h-full w-full bg-white outline-none focus:outline-none rounded-none lg:rounded-2xl md:rounded-2xl"
        >
          <header class="modal-header pb-5" id="modalTitle">
            <slot name="header">
              <button
                type="button"
                class="btn-close"
                @click="close"
                aria-label="Close modal"
              >
                x
              </button>
            </slot>
          </header>

          <section class="" id="modalDescription">
            <slot name="body"> This is the default body! </slot>
          </section>
        </div>
      </div>
      <div
        @click="close()"
        class="z-40 bg-gray-800 bg-opacity-25 absolute w-screen h-screen"
      ></div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "modal",
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    open() {
      this.isModalVisible = true;
    },
    close() {
      this.isModalVisible = false;
      this.$emit("close", true);
    },
  },
  mounted() {
    document.body.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) {
        this.close();
      }
    });
  },
});
</script>

<style>
.modal-backdrop {
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 25px;
  padding: 5px 15px;
  cursor: pointer;
  font-weight: bold;
  color: #000;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
