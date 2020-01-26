const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { OUTPUT_PATH } = require('./constants');

module.exports = {
  stats: 'minimal',

  devServer: {
    contentBase: path.join(OUTPUT_PATH),
    compress: true,
    port: process.env.PORT,
    historyApiFallback: true,
    writeToDisk: true,
  },

  // prepend
  optimization: {
    noEmitOnErrors: false,
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.s?[ac]ss$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: [
            'default', {
              calc: { precision: 2 },
              mergeRules: true,
              discardDuplicates: true,
            },
          ],
        },
        canPrint: true,
      }),
    ],
  },
};
