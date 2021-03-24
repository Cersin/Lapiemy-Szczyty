import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
const moment = require('moment');
import 'moment/locale/pl';
import Editor from 'vue-editor-js/src/index';



library.add(faPaw);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(Editor) 
app.use(router);
app.use(store);
app.use(require('vue-moment-v3'), {
    moment
});

app.mount('#app');
