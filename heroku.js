var  express = require("express");
var  app = express();
var  port = process.env.PORT || 8080;
// all other files
app.get('/index.html', function (req, res) {
  res.sendFile(__dirname+"/public/src/"+req.path);
});


// all other files
app.get('*', function (req, res) {
  res.sendFile(__dirname+"/build/"+req.path);
});

app.listen(process.env.PORT || port, function () {
  console.log('server listening on port ' + (process.env.PORT || port));
  });

