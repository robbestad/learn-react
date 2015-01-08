var extend = require('extend');

module.exports = function(config, env){
  if(env === 'development')
    config = extend(true, {}, config, config.development);
  else if(env === 'production')
    config = extend(true, {}, config, config.production);

  delete config.development;
  delete config.production;

  return config;
};
