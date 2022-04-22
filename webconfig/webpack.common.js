const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')
const {customHtmlPage} = require('./webpack.multipage')
const paths = require('./paths')

// object values
const commonObject = {
headerName: 'Weboilerpack',
entryPage: '/index.js',
bundlePath: '[name].bundle.js',
public: '/',
resource: 'assets',
assetResource: 'asset/resource',
assetInline: 'asset/inline',
ignore: ['*.DS_Store'],
templatePage: '/index.html',
loadFilename: 'index.html',
module: 'node_modules',
extension: ['.js', '.jsx', '.json'],
babelLoader: ['babel-loader'],
jsRule: /\.js$/,
imageRule: /\.(?:ico|gif|png|jpg|jpeg)$/i,
resourceEx:/\.(woff(2)?|eot|ttf|otf|svg|)$/,
specChar: '@',
serviceWorker: 'service-worker.js',
true:true
}

module.exports = {
  entry: [paths.src + commonObject.entryPage],
  output: {
    path: paths.build,
    filename: commonObject.bundlePath,
    publicPath: commonObject.public
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: commonObject.resource,
          globOptions: {
            ignore: commonObject.ignore,
          },
          noErrorOnMissing: commonObject.true,
        },
      ],
    }),
    new CleanWebpackPlugin(),
    customHtmlPage,
    new GenerateSW({
      swDest: commonObject.serviceWorker,
      clientsClaim: commonObject.true,
      skipWaiting: commonObject.true
    })
  ],
  module: {
    rules: [
      { test: commonObject.jsRule, 
        use: commonObject.babelLoader 
      },

      { test: commonObject.imageRule, 
        type: commonObject.assetResource 
      },

      { test: commonObject.resourceEx, 
        type: commonObject.assetInline 
      },
    ],
  },
  resolve: {
    modules: [paths.src, commonObject.module],
    extensions: commonObject.extension,
    alias: {
      [commonObject.specChar]: paths.src,
      assets: paths.public,
    },
  },
}
