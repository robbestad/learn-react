var watchify = require('watchify'),
  gulp = require('gulp'),
  gutil = require('gulp-util');

// Wraps bundler with watchify to watch changes to bundled
// files, watches sass scripts, watches statics to copy and
// starts `index.js`.

module.exports = function(config){

  // Access our pre-configured browserify instance
  var bundler = require('../lib/bundler')(config);

  // A custom bundle function that can be used to rebundle indefinitely
  var bundle = require('../lib/bundle')(config);

  return function(){

    bundler = watchify(bundler);
    bundler.errHandler = function(err){
      gutil.log('Error in bundle:');
      gutil.log(err.stack);
    };
    bundler
      .on('update', function(){
        bundle(bundler);
        gutil.log('Rebundling...');
      });

    gulp.watch('./public/src/styles/**/*.*', ['styles']);

    gulp.watch(
      ['./public/src/index.html', './public/src/assets/**/*.*'],
      ['copy']
    );

    require('../')({logger:gutil.log});

    return bundle(bundler);

  };
};