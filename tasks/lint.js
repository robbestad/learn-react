//'use strict';
//var gulp = require('gulp'),
//    jshint = require("gulp-jshint"),
//    react = require("gulp-react"),
//    stylish = require('jshint-stylish-ex');
//    //flow = require('gulp-flowtype');
//
//module.exports = function (config) {
//   return function(){
//    gulp.src([
//            'gulpfile.js',
//            config.paths.src + "scripts/**/*.js"
//        ])
//        .pipe(react({harmony: false, es6module: true, stripTypes: true}))
//        .pipe(jshint())
//        .pipe(jshint.reporter(stylish))
//        .on('error', function (e) {
//            console.error(e);
//        });
//    };
//};
