const EnvInfoPlugin = require('env-info-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [new EnvInfoPlugin()],
  },
}
