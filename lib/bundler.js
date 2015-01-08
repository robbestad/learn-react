var browserify = require('browserify'),
    reactify = require('reactify');

module.exports = function(config){
    // Create a browserify instance with proper options
    var bundler = browserify({
        cache: {}, packageCache: {}, fullPaths: true,
        debug: config.browserify.debug,
        paths: config.browserify.paths
    }).transform({'strip-types': true}, reactify);

    // Add the entry module to the bundler
    bundler.add('./public/src/scripts/app.js');

    return bundler;
};