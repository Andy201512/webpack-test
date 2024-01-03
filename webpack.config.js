const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  // 配置模块如何解析
  resolve: {
    // 定义引入路径别名
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  // JavaScript执行入口文件，对象语法多入口模式
  entry: {
    default: './src/entry/default.js',
    customize: './src/entry/customize.js'
  },
  output: {
    // 把所有依赖的模块合并输出到一个bundle.js文件
    filename: '[name].[contenthash].bundle.js',
    // 输出文件都放到dist目录下
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    // 想生成多个html文件，可以多次HtmlWebpackPlugin插件，但是输出文件字段要不同
    new HtmlWebpackPlugin({
      chunks: ['default'],
      filename: 'defaultIndex.html',
    }),
    // 使用模板./index.html根据当前的index.html页面生成新的页面
    new HtmlWebpackPlugin({ 
      chunks: ['customize'],
      filename: 'customizeIndex.html',
      template: './src/html/index.html',
    }),
    // 需要使用插件清除的文件名称，当执行webpack命令时会先将指定目录下文件删除
    new CleanWebpackPlugin(),
    // 提取 CSS 文件到单独输出
    new MiniCssExtractPlugin({
      filename: 'css/index.css'
    }),
    // 捆绑分析插件
    // new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // compiles sass to CSS
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.styl$/i,
        use: [
          // compiles stylus to CSS
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader',
        ],
      }
    ],
  },
}