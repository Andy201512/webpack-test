const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  // JavaScript执行入口文件
  entry: './src/index.js',
  output: {
    // 把所有依赖的模块合并输出到一个bundle.js文件
    filename: 'bundle.js',
    // 输出文件都放到dist目录下
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    // 使用模板./index.html根据当前的index.html页面生成新的页面
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    // 需要使用插件清除的文件名称，当执行webpack命令时会先将指定目录下文件删除
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}