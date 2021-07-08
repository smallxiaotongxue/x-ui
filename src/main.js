import Vue from "vue";
import App from "./App.vue";

import jrUi from "../src/packages";
Vue.use(jrUi);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
