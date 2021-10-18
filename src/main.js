import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// importing Bootstrap
// Adding bootstrap
window.bootstrap = require('bootstrap');
import "./scss/_custom_bootstrap.scss";
// importing Bootstrap Icons
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
// Import Vcalendar
import VCalendar from 'v-calendar';
// Import Apex Charts
import VueApexCharts from "vue3-apexcharts";

createApp(App)
  .use(router)
  .use(VCalendar, {})
  .use(VueApexCharts)
  .mount("#app");
