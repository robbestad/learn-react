var webpack = require('webpack');

var config = {
    entry: "./public/src/scripts/app.js",
    output: {
        filename: "public/dist/app.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'es6-loader',
                exclude: /node_modules/
            }
        ],
        preLoaders:[
            {test: /\.js$/, loader: 'jsx-loader?stripTypes&harmony',exclude: /node_modules/}
        ]
    },
    plugins: [

    ],
    resolve: {
        // you can now require('file') instead of require('file.js')
        extensions: ['', '.js', '.json', '.jsx']
    }
};

if (process.env.NODE_ENV !== 'development') {
    config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(new webpack.optimize.OccurenceOrderPlugin(true));
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}
module.exports = config;
