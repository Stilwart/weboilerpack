const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const paths = require('./paths')
const common = require('./webpack.common')
const general = require('./webpack.general')

// object values
const proObject = {
  mode: 'production',
  publicPath: '/',
  fileName: 'js/[name].[contenthash].bundle.js',
  cssLoader:'css-loader',
  sassLoader: 'sass-loader',
  postcssLoader:'postcss-loader',
  plugFile: 'styles/[name].[contenthash].css',
  chunkFilename: '[id].css',
  spreadOperator: '...',
  optimizationName: 'runtime',
  size: general.object.size,
  styles: /\.(sass|scss|css)$/,
  true: true,
  false: false
  
}

module.exports = merge(common, {
  mode: proObject.mode,
  devtool: proObject.false,
  output: {
    path: paths.build,
    publicPath: proObject.publicPath,
    filename: proObject.fileName,
  },
  module: {
    rules: [
      {
        test: proObject.styles,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: proObject.cssLoader,
            options: {
              importLoaders: 2,
              sourceMap: proObject.false,
              modules: proObject.false,
            },
          },
          proObject.postcssLoader,
          proObject.sassLoader,
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: proObject.plugFile,
      chunkFilename: proObject.chunkFilename,
    }),
  ],
  optimization: {
    minimize: proObject.true,
    minimizer: [new CssMinimizerPlugin(), 
      proObject.spreadOperator],
    runtimeChunk: {
      name: proObject.optimizationName,
    },
  },
  performance: {
    maxAssetSize: proObject.size,
    maxEntrypointSize: proObject.size,
    hints: proObject.false,
  },
})
