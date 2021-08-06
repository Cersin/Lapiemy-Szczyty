import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPaw, faMapMarkerAlt, faMountain, faHiking, faEnvelope, faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const moment = require('moment');
import 'moment/locale/pl';

library.add(faPaw, faMapMarkerAlt, faMountain, faHiking, faEnvelope, faBars);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(store);
app.use(require('vue-moment-v3'), {
    moment
});

app.mount('#app');
