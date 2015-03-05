'use strict';

module.exports = function (options) {

    options = options || {};

    // Require libs
    var express = require('express'),
        bodyParser = require('body-parser'),
        moulder = require('./lib/config-moulder'),
        compress = require('compression')(),

    // Instantiate app
        app = express(),

    // Detect environment
        environment = process.env.NODE_ENV || 'production',

    // Load app config and mould it to environment
        config = moulder(require('./config'), environment).server,

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

    app.listen(port, function () {
        app.logger('Detected environment:', environment);
        app.logger('Serving on port:', port);
    });
};
