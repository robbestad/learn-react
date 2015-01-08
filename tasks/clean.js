var del = require('del');

module.exports = function(config){
  return function(forTask){
    return function(done){
      del(config.clean[forTask], done);
    };
  };
};