// const webpack = require("webpack");
const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    // 三种hash的区别
    // hash: 项目文件有改动，构建的hash就会变化
    // chunkhash: 不同的entry会生成不同的chunkhash
    // contenthash: 内容不变，contenthash值不变
    // development环境必须是hash
    filename: '[name].[hash:8].js',
  },
  plugins: [],
  // webpack-dev-server(WDS)提供 bundle server的能力生成的 bundle.js
  // 文件可以通过 localhost://xxx 的方式去访问，另外 WDS 也提供 livereload(浏览器的自动刷新)。
  devServer: {
    port: 3366,
    overlay: true,
    contentBase: path.join(__dirname, '../public'), //  从哪里提供 bundle
    // 自动注入hot-module-replacement-plugin，提供 HMR 的 runtime，并且将 runtime 注入到 bundle.js 代码里面去
    // 热更新内容在内存上运行
    // HMR server将修改内容发送给HMR runtime，HMR runtime 去局部更新页面的代码
    hot: true,
    stats: 'errors-warnings',
  },
};

module.exports = merge(baseConfig, devConfig);
