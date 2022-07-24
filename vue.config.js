const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    resolve:{
      alias:{
        'assets': '@/assets',
        'content': '@/components/content',
        'components': '@/components',
        'api': '@/api',
        'views': '@/views'
      }
    }
  },
  //代理跨域
  devServer: {
    proxy: {
      //代理服务器看到 路径带有api就会工作
      '/api': {
        target: "https://autumnfish.cn",
        changeOrigin:true,
        logLevel:"debug"
        //路径重写
        //pathRewrite:{'^api':''}
      }
    }
  }
})
