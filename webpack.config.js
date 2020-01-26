const merge = require('webpack-merge');
const configs = require('./webpack');

const env = process.env.NODE_ENV || 'development';

module.exports = merge.strategy({
  plugins: 'append',
  optimization: 'prepend',
})(configs.base, configs[env]);
