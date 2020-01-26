const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {

  // Fix https://github.com/webpack-contrib/mini-css-extract-plugin/issues/168#issuecomment-420095982
  stats: { children: false },

  optimization: {
    noEmitOnErrors: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: false,
        parallel: true,
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
          mangle: {
            keep_classnames: true,
            keep_fnames: true,
          },
        },
      }), new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.s?[ac]ss$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: [
            'default', {
              calc: { precision: 2 },
              discardEmpty: true,
              mergeRules: true,
              discardDuplicates: true,
              discardComments: { removeAll: true },
            },
          ],
        },
        canPrint: true,
      }),
    ],
  },
};
