const merge = require('webpack-merge');
// const path = require('path');
// const glob = require('glob');
// const PurgecssPlugin = require('purgecss-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const TerserPlugin = require('terser-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();

// const PATHS = {
//   src: path.join(__dirname, '../src'),
// };

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production';
}

// bundle：打包最终生成的文件
// chunk：每个chunk是由多个module组成，可以通过代码分割成多个chunk。
// module：webpack中的模块（js、css、图片等等）

const prodConfig = {
  mode: 'production', // 默认值
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // 提取css，功能与styel-loader（插入到header）互斥
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].[contenthash:8].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    // 通过cssnano压缩css
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
    }),
    // 移除没用到的css
    // new PurgecssPlugin({
    //   paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    // }),
    // new BundleAnalyzerPlugin(), // 分析包
  ],
  // externals: {
  //   // key是我们 import 的包名，value 是CDN为我们提供的全局变量名(amd)
  //   // 所以最后 webpack 会把一个静态资源编译成：module.export.react = window.React
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  //   axios: 'axios',
  //   'react-router-dom': 'ReactRouterDOM',
  // },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     cacheGroups: {
  //       vendors: {
  //         // test: /[\\/]node_modules[\\/]!(react|react-dom)[\\/]/,
  //         // cacheGroupKey here is `commons` as the key of the cacheGroup
  //         name: 'vendors',
  //         chunks: 'all',
  //         minChunks: 2,
  //       },
  //     },
  //   },
  // },
  optimization: {
    // 多进程并行压缩
    // minimizer: [
    //   new TerserPlugin({
    //     parallel: true,
    //     cache: true,
    //   }),
    // ],
    splitChunks: {
      chunks: 'all', //  分离所有引入的库
      // 提取公共库
      cacheGroups: {
        // commons: {
        //   // test: /(react|react-dom)/,
        //   test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        //   // cacheGroupKey here is `commons` as the key of the cacheGroup
        //   name:'commons',
        //   chunks: 'all'
        // },
        vendors: {
          // test: /node_modules/,
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

if (process.env.npm_config_report) {
  // npm_config_report这个值为true，必须是npm run XXX --report,用yarn会undefined
  prodConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = smp.wrap(merge(baseConfig, prodConfig));
