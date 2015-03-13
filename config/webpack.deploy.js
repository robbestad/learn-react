var webpack = require("webpack");

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

module.exports = {
  entry: {
    Main: './react/App.jsx'
  },
  output: {
    path: './public/scripts/react',
    filename: 'bundle.js'
  },
  plugins: [definePlugin],
  module: {
    loaders: [
      { test: /\.scss$/, loader: "style!css!sass?includePaths[]=./scss/" },
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'}
    ],
    noParse: /parse-latest.js/
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    modulesDirectories: ['./', 'node_modules'],
    extensions: ['', '.js', '.json', '.jsx', '.css', '.scss']
  }
};
