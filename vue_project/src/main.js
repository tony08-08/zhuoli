import { createApp } from "vue";
import { createPinia } from "pinia";
import "normalize.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import App from "./App.vue";
import router from "./router";
import "./assets/css/index.less";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(createPinia());
app.use(router);

app.mount("#app");
