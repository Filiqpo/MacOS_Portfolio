import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";

const app = createApp(App);
const pinia = createPinia();

app.use(FloatingVue);
app.use(pinia);
app.mount("#app");
