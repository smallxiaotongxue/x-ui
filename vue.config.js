module.exports = {
  pages: {
    index: {
      // 修改入口
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        return options;
      });
  },
};
