module.exports = function(err, def){
  var ret = def || 'An unknown error occurred.';
  if(err.responseJSON && typeof err.responseJSON.error === 'string'){
    ret = err.responseJSON.error;
  }
  return ret;
};