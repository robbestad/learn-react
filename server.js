var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var url = require('url');
var debug = require('debug')('http');
var compress = require('compression')();
var config = require("./config/config");
var validator = require('validator');
var mime = require('mime');
require('node-jsx').install({extension: '.jsx'});
var React = require("react"),
    options = options || {},

// Instantiate app
    app = express(),

// Detect environment
    environment = process.env.NODE_ENV || 'production',


// Determine port to fire up on
    port = options.port || process.env.PORT || config.port;

// Decide which logging interface to use.
// Attach it to `app` so that required route modules, etc. can use it
app.logger = options.logger || console.log.bind(console);

// Enable verbose logging for incoming requests if configured to do so
if (config.verbose) {
    app.use(function (req, res, next) {
        app.logger(req.method + ' ' + req.path + ' (remote: ' + req.ip + ')');
        next();
    });
}

// Body-parsing middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// compress
app.use(compress);

app.get('/index.php', function (req, res) {
    var markup="tet";
    var Application = React.createFactory(require('./compiled/home'));
    //var Application = (require('./compiled/home'));
    var data=React.renderToString(Application());
    res.send(data);
    //React.renderToString(Application({path: '/'}), function (err, markup) {
    //    console.log(err);
    //    res.send('<!DOCTYPE html>' + markup);
    //});

    //
    //res.header("Cache-Control", "public, max-age=172800"); // 2419200 14 days
    //res.header("Expires", new Date(Date.now() + 172800).toUTCString()); // 345600000
    //React.renderToStaticMarkup(App({path: '/'}), function (err, markup) {
    //    res.send('<!DOCTYPE html>' + markup);
    //});
});

// Serve static files from `public/dist`
app.use(express.static(__dirname + '/public/dist'));


module.exports = app;