import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faPaw);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router,store);
app.mount('#app');
