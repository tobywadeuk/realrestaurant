const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development",
    entry: {
      index: "./src/index.js",
      homepage: "./src/homepage.js",
      menupage: "./src/menupage.js",
      aboutpage: "./src/aboutpage.js",
    },
    devtool: 'inline-source-map',
    devServer: {
        static: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Welcome to REAL',
        }),
      ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    }
};