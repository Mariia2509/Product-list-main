import { createApp } from "vue";
import App from "./App.vue";
import router from "@/components/router/router";
import { createPinia } from 'pinia'


import "./App.css"

const app = createApp(App);
const pinia = createPinia();


app.use(pinia).use(router).mount("#app");