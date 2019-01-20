//@ts-check
//@ts-ignore
import Vue from "vue";
//@ts-ignore
import App from "./App.vue";
import "./../node_modules/bulma/css/bulma.css";
import router from "./Router.js";
Vue.config.productionTip = false;
//@ts-ignore

//@ts-ignore
new Vue({ router, render: h => h(App) }).$mount("#app");
