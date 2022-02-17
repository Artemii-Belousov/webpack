const {resolve} = require('path');
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: resolve(__dirname, 'js', 'main.js'),
    output: {
        filename: 'mini.[contenthash].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.mp3$/,
                loader: 'file-loader', //Вместо use используем loader
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [    
        new HtmlPlugin({
            template: (__dirname, 'index.html')
        })
    ]
}