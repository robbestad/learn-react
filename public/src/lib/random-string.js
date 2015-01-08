var randomString = function(){
  var str = Math.random().toString(36).slice(2);
  return str.length === 16 ? str : randomString();
};

module.exports = randomString;