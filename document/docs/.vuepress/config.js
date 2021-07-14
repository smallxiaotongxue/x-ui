var themeConfig = require('./config-file/theme-config');

module.exports = {
  title: "jr-ui",
  description: "一个通用的前端业务组件库",

  base: '/vuepress/',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': './assets/'
      }
    }
  },
  dest: './dist',
  markdown: {
    lineNumbers: true,
  },
  plugins: [],
  head: [
    ["link", { rel: "icon", href: `/favicon.ico` }],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "",
      },
    ],
  ],
  themeConfig: themeConfig
};
