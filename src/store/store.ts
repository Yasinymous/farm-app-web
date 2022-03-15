import { InjectionKey } from "vue";
import { createStore } from "vuex";


export const store = createStore({
  modules: {
  },
});

export type Store = typeof store;

export const key: InjectionKey<Store> = Symbol();