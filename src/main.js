import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./main.css";
import store from "./store";

import BaseButton from './components/common/BaseButton.vue';

const app = createApp(App);
app.component("base-button", BaseButton);

app.use(store).use(router).mount("#app");
