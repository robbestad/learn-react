// Paths to use. Must end with a slash!
const paths = {
    src: './public/src/', // Where the sources are located
    dist: './public/dist/' // Where the build products will be placed
};

module.exports = {
  paths: paths,
  build: {
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
    // Will be rimraffed before builds and whatnot on a task-required basis
    clean: {
      // Before copy task...
      copy: ['./public/dist/assets', './public/dist/index.html'],
      // Before scripts task...
      scripts: ['./public/dist/app.js'],
      // Before styles task...
      styles: ['./public/dist/app.css'],
      // Before vendor task...
      vendor: ['./public/dist/vendor.js']
    },
    // Minify css after built from scss? (Generally overridden in production
    // config as `true`)
    cssmin: false,
    // Uglify js after bundle? (Generally overridden in production config as
    // `true`)
    uglify: false,
    paths: {
      src: './public/src/'
    }
  },
  server: {
    // Port to run on. Overridden by PORT env variable or port passed as an
    // option to index.js
    port: 3000,
    // The URI to use to connect to the app's mongodb. Overridden by MONGOLAB_URI
    // env variable
    mongodbURI: 'mongodb://localhost/test',
    // Enable verbose logging on incoming requests? (If this creates a bottle-
    // neck, it's recommended to only enable this in development)
    verbose: true
  },
  // Merges into config if NODE_ENV is development
  development: {
    paths:paths,
    build: {
      vendor: {
        js: [
          './node_modules/es5-shim/es5-shim.js',
          './node_modules/jquery/dist/jquery.js',
          './public/src/lib/ajax-put-delete.jquery.js',
          './node_modules/bootstrap/dist/js/bootstrap.js'
        ]
      }
    }
  },
  // Merges into config if NODE_ENV is production
  production: {
    paths: paths,
    build: {
      vendor: {
        js: [
        './node_modules/es5-shim/es5-shim.min.js',
        './node_modules/jquery/dist/jquery.min.js',
          './public/src/lib/ajax-put-delete.jquery.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js'
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
