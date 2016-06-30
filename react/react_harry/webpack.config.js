

/*
 webpack
 --colors 输出结果带彩色，比如：会用红色显示耗时较长的步骤
 --profile 输出性能数据，可以看到每一步的耗时
 --display-modules 默认情况下 node_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块
 */
/*var React = require('react');
var ReactDOM = require('react-dom');*/

/*webpack*/
var webpack = require('webpack');
/*提取公共组件*/
var CommonsChunkPlugin = require("../node_modules/webpack/lib/optimize/CommonsChunkPlugin");
/*js压缩工具*/
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

/*路径配置*/
var path = require('path');
var node_modules_dir = path.join(__dirname, '../node_modules');
/*引入压缩文件*/
var deps = [
    'react/dist/react.min.js',
    'react-dom/dist/react-dom.min.js'
];
var config = {
    /*入口文件（需要压缩的文件）*/


    entry: {
        m1: [
            /*实时刷新*/
            /*'webpack-dev-server/client?http://0.0.0.0:8080',
            'webpack/hot/dev-server',*/
            './entry/harry-1.js'],
        m2: [
            /*'webpack-dev-server/client?http://0.0.0.0:8080',
            'webpack/hot/dev-server',*/
            './entry/harry-2.js']
    },
    /*entry:{
        'm1':'./entry/harry-1.js',
        'm2':'./entry/harry-2.js'
    },*/

    /*（ resolve.alias ） 是 Webpack 的一个配置项，它的作用是把用户的一个请求重定向到另一个路径;例如：
    alias: {
        moment: "moment/min/moment-with-locales.min.js"
     }
     配合 module.noParse 忽略某些模块的解析可以进一步加快速度
     */
    resolve: {
        alias: {}
    },
    output: {
        path: path.resolve(__dirname, ''),
        filename: '[name].bundle.js'
    },

    module: {
        /*noParse 直接忽略某些模块的解析*/
        noParse: [],
        loaders: [

            {
                /*jsx、js 解析*/
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                /*css解析*/
                test: /\.css$/, loader: 'style-loader!css-loader'
            }, {
                /*图片解析*/
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.html$/,
                loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
            }
        ],
        include: path.join(__dirname, '.')
    },
    plugins: [
        new CommonsChunkPlugin('common.js'),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new uglifyJsPlugin({
            output: {
                comments: false // remove all comments
            },
            compress: {
                warnings: true
            }
        }),
        /*实时刷新的插件*/
        //new webpack.HotModuleReplacementPlugin()

    ]
};

deps.forEach(function (dep) {
    var depPath = path.resolve(node_modules_dir, dep);
    config.resolve.alias[dep.split(path.sep)[0]] = depPath;
    //config.module.noParse.push(depPath);
});

module.exports = config;