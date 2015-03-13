var src = 'app';
var build = 'build';


module.exports = {
    server:{
        pollInterval: 3600000
    },
    nodemon: {
        development: {
            script: 'server/index.js',
            ext: 'ejs js jsx scss',
            env: {'NODE_ENV': 'development'},
            watch: [
                'react',
                'routes',
                'gulp',
                'scss',
                'app.js'
            ],
            ignore: [
                'node_modules'
            ]
        }
    },
    delete: {
        src: ["public/stylesheets/**/*","public/assets/**/*"]
    },
    sass: {
        src: './scss/**/*.{sass,scss}',
        dest: './public/stylesheets',
        options: {
            noCache: true,
            compass: false,
            bundleExec: true,
            sourcemap: true,
            sourcemapPath: './public/css'
        }
    },
    autoprefixer: {
        browsers: [
            'last 2 versions',
            'safari 5',
            'ie 8',
            'ie 9',
            'opera 12.1',
            'ios 6',
            'android 4'
        ],
        cascade: true
    },
    optimize: {
        css: {},
        js: {
            src: './react/**/*.jsx',
            dest: './public/scripts/react',
            options: {compress:true,mangle:false}
        }
    }

};