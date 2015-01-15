var gulp = require('gulp');
var webpack = require('gulp-webpack');

module.exports = function(config){
  return function(){
    return gulp.src('../public/src/app.js')
    .pipe(webpack( require('../webpack.config.js') ))
    .pipe(gulp.dest('./'));
  };
};