module.exports = {
  publicPath: "/", //引入js、图片等文件中，会自动拼接path
  assetsDir: "",
  indexPath: "index.html",
  outputDir: "dist",
  productionSourceMap: true, // 是否生成.map
  css: {
    loaderOptions: {
      postcss: {},
    },
  },
};
