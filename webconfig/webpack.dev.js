const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const general = require('./webpack.general')

// object values
const devObject = {
mode: 'development',
devtool: 'inline-source-map',
port: general.object.port,
true: true,
false: false,
cssLoader: 'css-loader',
sassLoader: 'sass-loader',
styleLoader: 'style-loader',
postcssLoader: 'postcss-loader',
styles: /\.(sass|scss|css)$/,
}
module.exports = merge(common, {
  mode: devObject.mode,
  devtool: devObject.devtool,

  devServer: {
    historyApiFallback: devObject.true,
    open: devObject.true,
    compress: devObject.true,
    hot: devObject.true,
    port: devObject.port,
  },
  module: {
    rules: [
      {
        test: devObject.styles,
        use: [
          devObject.styleLoader,
          {
            loader: devObject.cssLoader,
            options: { 
              sourceMap: devObject.true, 
              importLoaders: 1, 
              modules: devObject.false 
            },
          },
          { loader: devObject.postcssLoader, 
            options: { 
            sourceMap: devObject.true 
          } 
          },
          { loader: devObject.sassLoader, 
            options: { 
            sourceMap: devObject.true 
          } 
        },
        ],
      },
    ],
  },
})
