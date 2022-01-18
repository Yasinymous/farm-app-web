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

// vue message Comp
import message from '../src/components/general/message.vue';


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



app.component('Message',message);
// pass the injection key
// app.use(store);
// // app.use(Vuex);




app.use(router);

app.mount('#app')

