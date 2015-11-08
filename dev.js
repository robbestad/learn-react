var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    contentBase: __dirname+"/public/dist",
    quiet: false,
    noInfo: false,
    lazy: true,
    filename: "bundle.js",
    watchDelay: 300,
    headers: { "X-Custom-Header": "yes" },
    stats: { colors: true },
    historyApiFallback: true
}).listen(8080, 'localhost', function (err, result) {
        if (err) {
            console.log(err);
        }

        console.log('Listening at localhost:8080');
    });