var 
  gulp = require('gulp'),
  gutil = require('gulp-util');

// Wraps bundler with watchify to watch changes to bundled
// files, watches sass scripts, watches statics to copy and
// starts `index.js`.
// watchify = require('watchify'), 

module.exports = function(config){

  return function(){

    gulp.watch('./public/src/scripts/**/*.*', ['webpack']);
    gulp.watch('./public/src/styles/**/*.*', ['styles']);

    gulp.watch(
      ['./public/src/index.html', './public/src/assets/**/*.*'],
      ['copy']
    );

    require('../')({logger:gutil.log});

  };
};