const path = require('path')
const UglifyPlugin = require('uglify-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // 配置loader
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader'
      }
    ]
  },
  // 代码模块路径解析的配置
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"]
  },
  plugins: [
    // 使用uglifyjs-webpack-plugin来压缩代码
    // 其实webpack默认就会使用js代码压缩的插件对代码进行压缩
    new UglifyPlugin()
  ]
}