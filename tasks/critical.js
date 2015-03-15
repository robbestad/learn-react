var gulp = require("gulp");
var critical = require("critical");

module.exports = function(config){
  return function(){
    return critical.generateInline({
        base: 'public/dist/',
        src: 'index.html',
        styleTarget: 'app.css',
        htmlTarget: 'index.html',
        width: 320,
        height: 480,
        minify: true
    });

  };
};

