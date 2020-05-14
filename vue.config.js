module.exports = {
  chainWebpack: config => {
    config.module
        .rule('vue')
        .use('iview-loader')
        .loader('iview-loader')
        .tap(()=> ({prefix: false}))
        .end()
       .rule('toml')
       .test(/\.toml$/)
       .use('toml-loader')
       .loader('toml-loader')
       .end()
  }
}