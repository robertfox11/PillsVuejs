const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require("webpack");
module.exports = {
    mode: 'development',
    //la direccion de origen 
    entry: './src/api.js',
    watch: true,
    output: {
        //creamos una carpeta de salida dist
        path: path.resolve(__dirname, 'dist'),
        // publicPath : '/dist/',
        filename: "bundle.js" //agrupa archivo
            // chunkFilename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.s[ac]ss$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, { loader: 'css-loader' }, { loader: 'sass-loader' }, ],
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                    },
                }, ],
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 
                        name: '[hash:base64].[ext]',
                        outputPath: 'assets/img',
                        // useRelativePath: true,
                        esModule: false
                    },
                }, ],
            },
        ],
    },
    devServer: {
        port: 5000
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebPackPlugin({
            //vamos a copiar este index para mandarlo al dist
            template: './index.html',
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            // Creamos el codigo de salida Css
            filename: 'assets/scss/bundle.css'
        })
    ],

};