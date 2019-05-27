export default {
  alias: {
    "@": `${__dirname}/src`,
    "@i": `${__dirname}/src/assets/images`,
    "@c": `${__dirname}/src/components`,
  },
  proxy: {
    "/m": {
      "target": "http://doll3.allpaycloud.cn/management_new/m",
      "changeOrigin": true,
      "pathRewrite": { "^/m": "" }
    }
  },
  publicPath: './static/'
}
