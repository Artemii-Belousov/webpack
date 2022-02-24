const {
  resolve
} = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'mini.[contenthash].js'

  },
  module: {
    rules: [{
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.(png|jpe?g|webp|git|svg|gif|)$/i,
        use: [{
          loader: 'img-optimize-loader',
          options: {
            compress: {
              // This will take more time and get smaller images.
              mode: 'high', // 'lossless', 'low'
              disableOnDevelopment: true,
              webp: true, // преобразует файлы в формат webp
              gifsicle: {
                optimizationLevel: 3, //сжатие для gif
              },
            },
          },
        }, ],
      },
      {
        test: /\.(mp[3|4])$/i,
        use: ['file-loader']
      },
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: resolve(__dirname, 'src', 'index.html')
    })
  ]
}