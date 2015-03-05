var webpack = require('webpack');
var path = require('path');

//module.exports = {
//    devtool: 'eval',
//
//    entry: {
//        app: ['webpack-dev-server/client?http://localhost:3000',
//            'webpack/hot/only-dev-server',
//            './public/src/scripts/app.js'
//        ]
//    },
//    output: {
//        path: __dirname +'./public/dist',
//        filename: 'bundle.js',
//        publicPath:  '/public/dist'
//    },
//    plugins: [
//        new webpack.HotModuleReplacementPlugin(),
//        new webpack.NoErrorsPlugin()
//    ],
//    resolve: {
//        extensions: ['', '.js', '.jsx']
//    },
//    module: {
//        loaders: [
//            { test: /\.js?$/, loaders: ['react-hot', 'jsx?harmony','babel-loader'], exclude: /node_modules/ }
//        ]
//    }
//};

module.exports = {
    entry: ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:3000','./public/src/scripts/app.js'],
    output: {
        path: __dirname+'/public/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'jsx?harmony','babel-loader'], exclude: /node_modules/ }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};