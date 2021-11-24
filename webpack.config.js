const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    entry: {
        main: './src/index.js',
        test: './src/test.js'
        // main: ['./src/index.js', './src/test.js'],
    }, // Source js file to webpack bunch
    output: {
        filename: "[name].js", // Name default is main.js
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    optimization: {
      splitChunks: {
          chunks: "all"
      }
    },
    devServer: {
        static: './dist',
        port: 8081,
        open: true
    },
    mode: "development",
    watch: false,
    devtool: 'inline-source-map', // Easy debug which error in js file | mode: development as same
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'KAY KAFE'
        })]
}
