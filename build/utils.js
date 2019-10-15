const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProd = process.env.NODE_ENV === 'production';
exports.cssLoader = function() {
  const styleOrMiniCss = isProd
    ? {
        loader: MiniCssExtractPlugin.loader,
      }
    : 'style-loader'; // creates style nodes from JS strings
  return [
    {
      test: /\.css$/,
      // 执行顺序是逆序 sass-loader -> css-loader -> style-loader
      use: [
        styleOrMiniCss,
        {
          loader: 'css-loader',
          options: {
            // CSS Modules hack
            // https://github.com/postcss/postcss-loader#css-modules
            importLoaders: 1,
          },
        }, // translates CSS into CommonJS
        'postcss-loader',
      ],
    },
    {
      test: /\.scss$/,
      use: [
        styleOrMiniCss, // creates style nodes from JS strings
        {
          loader: 'css-loader',
          options: {
            // CSS Modules hack
            // https://github.com/postcss/postcss-loader#css-modules
            importLoaders: 1,
          },
        }, // translates CSS into CommonJS
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
          },
        }, // compiles Sass to CSS, using Node Sass by default
        'postcss-loader',
      ],
    },
  ];
};

exports.picLoader = function() {
  return {
    test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
    // url-loader包含了file-loader
    use: isProd
      ? [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
          // 自动压缩图片
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ]
      : [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
  };
};
