const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { IS_PRODUCTION } = require('./constants');
const { ENTRY_PATH } = require('./constants');

module.exports = [
  {
    enforce: 'pre',
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    include: [ENTRY_PATH],
    loader: 'eslint-loader?parser=babel-eslint',
    options: {
      fix: true,
      emitError: false,
    },
  },

  // ts/tsx loader
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      'babel-loader', {
        loader: 'ts-loader',
        options: { transpileOnly: true, compilerOptions: { noEmit: false }},
      },
    ],
  },

  // js/jsx loader
  {
    test: /\.jsx?$/,
    exclude: file => /node_modules/.test(file),
    use: ['babel-loader'],
  },

  // css/scss loader
  {
    test: /\.s?[ac]ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { modules: false },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          map: false,
          plugins: () => [
            // eslint-disable-next-line array-element-newline
            require('postcss-preset-env')({ browsers: ['last 2 versions']}),
            require('cssnano')({
              calc: { precision: 2 },
              discardEmpty: IS_PRODUCTION,
              mergeRules: true,
              discardDuplicates: true,
              discardComments: { removeAll: IS_PRODUCTION },
            }),
          ],
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            outputStyle: IS_PRODUCTION ? 'compressed' : 'expanded',
            includePaths: [path.resolve(__dirname, '../node_modules')],
          },
        },
      },
    ],
  },
];
