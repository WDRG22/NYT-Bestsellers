import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import "./assets/styles.scss";
import FontAwesomeIcon from "@/utilities/fontawesome-icons";
import App from "./App.vue";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(createPinia())
  .use(router)
  .mount("#app");
