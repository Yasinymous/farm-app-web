import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'

// import store from './store';

// css
import './assets/tailwind.css'

// router
import router from './router'

// vue phone packpage
import VueTelInput from 'vue3-tel-input'
import './assets/vueTel.css'

// vue modal
import modal from '@/components/general/modal.vue'
// vue message Comp
import message from '../src/components/general/message.vue';
// google maps
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);

const VueTelInputOptions = {
    mode: "international",
    onlyCountries: ['TR', 'AZ'],
    inputOptions: {
        placeholder: "phone",
        required: true,
        maxlength: 20,
      },
  }

app.use(VueTelInput,VueTelInputOptions);

app.use(VueGoogleMaps, {
  load: {
      key: process.env.VUE_APP_GOOGLE_MAP_API_KEY,
      libraries: "places",
      language: 'en',
  },
})

app.component('modal', modal)

app.component('Message',message);
// pass the injection key
// app.use(store);
// // app.use(Vuex);




app.use(router);

app.mount('#app')

