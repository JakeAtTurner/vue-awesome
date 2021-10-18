module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'demo',
  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat')
    config.module.rule('vue').use('vue-loader').tap(options => {
      return {
        ...options,
        compilerOptions: {
          compactConfig: {
            MODE: 2
          }
        }
      }
    })
    config
      .entry('app')
      .clear()
      .add('./src/demo/main.js')
  }
}
