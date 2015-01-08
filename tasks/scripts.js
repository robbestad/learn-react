module.exports = function(config){

  // Access our pre-configured browserify instance
  var bundler = require('../lib/bundler')(config);

  // A custom bundle function that can be used to rebundle indefinitely
  var bundle = require('../lib/bundle')(config);

  return function(){

    return bundle(bundler);

  };

};