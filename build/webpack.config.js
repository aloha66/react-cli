const webpack = require('webpack');
const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { cssLoader, picLoader } = require('./utils');
const resolve = dir => path.resolve(__dirname, '..', dir);

module.exports = {
  mode: 'production', // 默认值
  // entry: './src',  // 默认值
  // output: './dist', // 默认值
  stats: 'errors-warnings', // 在cmd里只显示error和warning错误
  output: {
    // 三种hash的区别
    // hash: 项目文件有改动，构建的hash就会变化
    // chunkhash: 不同的entry会生成不同的chunkhash
    // contenthash: 内容不变，contenthash值不变
    filename: '[name].[chunkhash:8].js',
  },
  // loader转换成wepack能识别的文件
  // mode:'development',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'], // 模块搜索目录,优先搜索
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': resolve('src'),
      '@con': resolve('src/containers'),
      '@com': resolve('src/components'),
      '@api': resolve('src/api'),
      '@const': resolve('src/const'),
      '@img': resolve('src/assets/img'),
      '@ass': resolve('src/assets'),
      '@scss': resolve('src/assets/scss'),
    },
  },
  module: {
    rules: [
      // test 匹配规则
      // use 指定使用的loader名称
      {
        // eslint预检
        enforce: 'pre',
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        // loader: 'eslint-loader',
        use: [
          // 开启多进程
          // {
          //   loader: 'thread-loader',
          //   // loaders with equal options will share worker pools
          //   options: {
          //     // the number of spawned workers, defaults to (number of cpus - 1) or
          //     // fallback to 1 when require('os').cpus() is undefined
          //     workers: require('os').cpus().length - 1,
          //   },
          // },
          // 'cache-loader', // 经验证，cache-loader在首次编译的时候，能保持正常的编辑速度，在第二次编译的时候，
          //hard-source-webpack-plugin 设置简单，首次运行速度低于正常值，第二次运行速度极快
          'eslint-loader',
          // your expensive loader (e.g babel-loader)
        ],
      },
      ...cssLoader(),
      picLoader(),
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: [
          // 开启多进程
          // {
          //   loader: 'thread-loader',
          //   // loaders with equal options will share worker pools
          //   options: {
          //     // the number of spawned workers, defaults to (number of cpus - 1) or
          //     // fallback to 1 when require('os').cpus() is undefined
          //     workers: require('os').cpus().length - 1,
          //   },
          // },
          // 'cache-loader',
          'babel-loader?cacheDirectory=true',
          // your expensive loader (e.g babel-loader)
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  // plugins 作用于整个构建过程
  plugins: [
    new HtmlWebpackPlugin({
      // 用于生成的HTML文档的标题
      title: 'wepakc配置demo',
      // webpack 生成模板的路径
      template: path.join(__dirname, '../public/index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new ProgressBarPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new HardSourceWebpackPlugin(), // 缓存
    // 只加载中文
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
  ],
};
