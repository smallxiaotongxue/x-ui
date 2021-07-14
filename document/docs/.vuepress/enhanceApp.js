import Vue from "vue";
import Element from "element-ui"; // 引入elementUi
import "element-ui/lib/theme-chalk/index.css";

import jrUi from "../../../src/packages";


import hljs from "highlight.js";
import 'prismjs/themes/prism-tomorrow.css';
import "highlight.js/styles/monokai-sublime.css"; //样式文件
Vue.directive("highlight", function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
});

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  Vue.use(Element);
  Vue.use(jrUi);
};
