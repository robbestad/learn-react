var gulp = require('gulp'),
    jsx = require('gulp-jsx'),
    babel = require('gulp-babel');

module.exports = function(config){
    return function(){

        if(config.vendor.js.length === 0) return;
            return gulp.src('public/src/scripts/**/*.js')
                .pipe(babel())
                .pipe(jsx())
                .pipe(gulp.dest('compiled'));
    };
};