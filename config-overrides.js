const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@assets' : 'src/assets'
  })(config)

  return config
}