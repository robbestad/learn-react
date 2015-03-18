var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin');

module.exports = function(config){
    return function(){
        var pipeline = gulp.src('./public/src/styles/app.scss')
            .pipe(sass({
                includePaths: config.vendor.scss || []
            }))
            .on('error', function(err){
                gutil.log('Error in sass build:');
                gutil.log(err.stack);
            })
            .pipe(autoprefixer())
            .pipe(gulp.dest('./build'));

        if(config.cssmin)
            pipeline = pipeline.pipe(cssmin());

        return pipeline.pipe(gulp.dest('./public/dist'));
    };
};