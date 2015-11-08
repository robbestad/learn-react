var webpack = require('webpack');

module.exports = {
    entry: ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8080','./public/src/scripts/app.js'],
    devtool: 'eval',

    output: {
        path: __dirname+'/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /[\.js?$|\.jsx?$]/, loaders: ['react-hot', 'jsx?harmony','babel-loader'], exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};
