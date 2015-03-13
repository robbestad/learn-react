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
var
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

// Serve static files from `public/dist`
app.use(express.static(__dirname + '/public/dist'));


module.exports = app;