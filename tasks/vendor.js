var gulp = require('gulp'),
  concat = require('gulp-concat');

module.exports = function(config){
  return function(){

    if(config.vendor.js.length === 0) return;

    return gulp.src(config.vendor.js)
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('./public/dist'));

  };
};