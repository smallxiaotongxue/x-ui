import Vue from "vue";
import App from "./App.vue";

import Element from "element-ui"; // 引入elementUi
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Element);

import jrUi from "../packages";

Vue.use(jrUi);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
