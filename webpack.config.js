var
  webpack = require('webpack'),
  path = require('path'),
  nodeRoot = path.resolve(__dirname, "node_modules");

var config = {
  entry: "./public/src/scripts/app.js",
  output: {
    filename: "public/dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: nodeRoot,
        include: path.resolve(__dirname, "public/src/scripts")
      }
    ]
  },
  plugins: [],
  devtool: "#eval",
  // don't parse some dependencies to speed up build.
  noParse: [
    nodeRoot,
    path.resolve(__dirname, 'public/src/assets/'),
    path.resolve(__dirname, 'public/src/components/'),
    path.resolve(__dirname, 'public/src/img/'),
    path.resolve(__dirname, 'public/src/lib/'),
    path.resolve(__dirname, 'public/src/styles/'),
    path.resolve(__dirname, 'public/src/*.map')
  ],
  cache: true,
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: ['node_modules', 'vendors', 'public/src'],
    alias: {
      app: './public/src/scripts'
    }
  }
};

if (process.env.NODE_ENV === 'development') {
// Development Config
  config.entry = ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080', './public/src/scripts/app.js'];
  config.devtool = 'eval';
  config.output = {
    path: __dirname + '/build',
    filename: 'bundle.js'
  };
  config.module = {
    loaders: [
      {test: /[\.js?$|\.jsx?$]/, loaders: ['react-hot', 'jsx?harmony', 'babel-loader'], exclude: /node_modules/}
    ]
  };
  config.resolve = {
    extensions: ['', '.js', '.jsx']
  };
  config.plugins = [
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = config;
