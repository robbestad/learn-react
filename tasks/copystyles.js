var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

module.exports = function(config){
  return function(){
    return gulp
      .src(
        ['./public/dist/app.css'],
        {base:'./public/dist/'}
      )
      .pipe($.rename({
          basename: "site" // site.css
      }))
      .pipe(gulp.dest('./public/dist'));
  };
};