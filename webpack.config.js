var webpack = require('webpack');

var config = {
    entry: "./public/src/scripts/app.js",
    output: {
        filename: "public/dist/app.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader?harmony&stripTypes'}
        ]
    },
    plugins: [
    ]
};

if (process.env.NODE_ENV !== 'development') {
    config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(new webpack.optimize.OccurenceOrderPlugin(true));
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}
module.exports = config;
