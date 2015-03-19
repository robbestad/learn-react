const moulder = require('./lib/config-moulder');

// Paths to use. Must end with a slash!
const paths = {
    src: './public/src/', // Where the sources are located
    dist: './build/dist/' // Where the build products will be placed
};

const config = {
	paths: paths,
    build: {
        paths: paths,

        vendor: {
            // Will be concantinated and included in index.html before app bundle.
            js: [],
            // Will be included as an includePath for @import statements
            scss: [
                // Bootstrap is included by default and can be used with
                // `@import "bootstrap"`
                './node_modules/bootstrap-sass/assets/stylesheets'
            ]
        },
        browserify: {
            // Browserify will search through these paths for `require`s
            paths: [
                paths.src,
                './node_modules'
            ],
            // Will append source maps if true (Generally overridden in production
            // config as `false`)
            debug: true
        },
        // Will be rimraffed before builds and whatnot on a task-required basis
        clean: {
            // Before copy task...
            copy: [paths.dist + 'assets', paths.dist + '/index.html'],
            // Before scripts task...
            scripts: [paths.dist + 'app.js'],
            // Before styles task...
            styles: [paths.dist + 'app.css'],
            // Before vendor task...
            vendor: [paths.dist + 'vendor.js']
        },
        // Minify css after built from scss? (Generally overridden in production
        // config as `true`)
        cssmin: false,
        // Uglify js after bundle? (Generally overridden in production config as
        // `true`)
        uglify: false
    },
    runtime: {
        urls: {
            // Service URLs. Must end with a slash!
            customerService: "http://no001mbedrfv2.gad.teliasonera.net:13370/cfh/"
        }
    },
    server: {
        // Port to run on. Overridden by PORT env variable or port passed as an
        // option to index.js
        port: 3000,
        // Enable verbose logging on incoming requests? (If this creates a bottle-
        // neck, it's recommended to only enable this in development)
        verbose: true
    },
    // Merges into config if NODE_ENV is development
    development: {
        build: {
            vendor: {
                js: [
                    './node_modules/es5-shim/es5-shim.js',
                    paths.src + 'lib/utils.js'
                ]
            }
        }
    },
    // Merges into config if NODE_ENV is production
    production: {
        build: {
            vendor: {
                js: [
                    './node_modules/es5-shim/es5-shim.min.js',
                    paths.src + 'lib/utils.js'

                ]
            },
            cssmin: true,
            uglify: true,
            browserify: {
                debug: false
            }
        }
    }
};

const environment = process.env.NODE_ENV || 'production';
module.exports = moulder(config, environment);
module.exports.environment = environment;

