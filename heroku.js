var  express = require("express");
var  app = express();
var  port = process.env.PORT || 8080;


app.get(['*.css','*.js','*.woff','*.map','*.json','*.png','*.map','*.woff2','*.md'], function (req, res) {
  res.sendFile(__dirname+"/public/dist/"+req.path);
});


// all other files
app.get('*', function (req, res) {
  res.sendFile(__dirname+"/public/dist/index.html");
});

app.listen(process.env.PORT || port, function () {
  console.log('server listening on port ' + (process.env.PORT || port));
  });

