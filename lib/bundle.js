var gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  uglify = require('gulp-uglify');

module.exports = function(config){
  return bundle = function(bundler){
    var pipeline = bundler
      .bundle();

    if(typeof bundler.errHandler === 'function')
      pipeline = pipeline.on('error', bundler.errHandler);

    pipeline = pipeline.pipe(source('app.js'))
      .pipe(buffer());

    if(config.uglify)
      pipeline = pipeline.pipe(uglify());

    return pipeline.pipe(gulp.dest('./public/dist'));
  };
};