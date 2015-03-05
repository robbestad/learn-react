var webpack = require('webpack');

var config = {
    entry: "./public/src/scripts/app.js",
    output: {
        filename: "public/dist/bundle.js"
    },
    module: {
        loaders: [
                     { test: /\.js?$/, loaders: ['jsx-loader?harmony','babel-loader'], exclude: /node_modules/ }
        ]
    },
    plugins: [
    ],

    resolve: {
      // you can now require('file') instead of require('file.js')
      extensions: ['', '.js', '.json', '.jsx'],
      modulesDirectories: ['node_modules', 'vendors', 'public/src'],
      alias: {
        app: '/public/src/scripts'
      }
    },
};

module.exports = config;
