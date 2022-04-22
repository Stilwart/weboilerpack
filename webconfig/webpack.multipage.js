const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

// customHtml object
const customHtml = {
    default: {
    ficon: '/assets/img/favicon.ico',
      },
    index:{
      headerName: 'Weboilerpack',
    templatePage: '/index.html',
    fileName: 'index.html',
    }
 }
    // instance of HtmlWebpackPlugin
    const defaultPage = new HtmlWebpackPlugin({
      title: customHtml.index.headerName,
      favicon: paths.src + customHtml.default.ficon,
      template: paths.src + customHtml.index.templatePage,
      filename: customHtml.index.fileName,
    })

const customHtmlPage = {
  defaultPage: defaultPage
}

module.exports = {
customHtmlPage: customHtmlPage.defaultPage
};