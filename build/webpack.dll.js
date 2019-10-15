const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    // 依赖的库数组
    vendor: ['axios'],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      // DllPlugin的name属性需要和libary保持一致
      name: '[name]_[hash]',
      path: path.join(__dirname, 'public', '[name]-manifest.json'),
      // context需要和webpack.config.js保持一致
      context: __dirname,
    }),
  ],
};
