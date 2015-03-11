var webpack = require('webpack');

module.exports = {
    entry: ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8080','./public/src/scripts/app.js'],
    devtool: 'eval',

    output: {
        path: __dirname+'/public/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'jsx?harmony','babel-loader'], exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};