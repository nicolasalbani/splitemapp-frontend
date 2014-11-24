/*!
 * SplitemApp's Gruntfile
 * http://www.afluenta.com
 * Copyright 2013-2014 SplitemApp.
 */

// grunt wrapper
module.exports = function(grunt) {

    // init config
    grunt.initConfig({
        // read package.json
        pkg: grunt.file.readJSON('package.json'),
        concat: {

        },
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                '-W083': true // Don't make functions within a loop.
            },
            beforeconcat: [

            ],
            afterconcat: [

            ]
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                },
                // beautify: true, // debug mode!
                sourceMap: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
                report: 'gzip'
            },
            scripts: {
                files: {

                }
            }
        },
        clean: {
            options: {
                force: true
            },
            dev: {
                src: [

                ]
            },
            prod: {
                src: [

                ]
            }
        },
        compass: {
            css: {
                options: {
                    outputStyle: 'compressed', // nested / expanded / compact / compressed [x]
                    sassDir: '../sass/scss/',
                    cssDir: '../web/css/',
                    imagesDir: '../web/images/',
                    noLineComments: true,
                    trace: true,
                    cacheDir: '../sass/.sass-cache/'
                }
            }
        },
        cssshrink: {
            css: {
                files: {
                    '../web/css/': ['../web/css/master*.css']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: [
                    'Android 2.3',
                    'Android >= 4',
                    'Chrome >= 25',
                    'Firefox >= 20',
                    'Explorer >= 8',
                    'iOS >= 6',
                    'Opera >= 12',
                    'Safari >= 6'
                ]
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: '../web/css/master*.css',
                dest: '../web/css/'
            }
        },
        imagemin: {
            options: {
                optimizationLevel: 4,
                progressive: true,
                interlaced: true
            },
            images: {
                files: [{
                    expand: true,
                    cwd: '../web/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '../web/images/'
                }]
            }
        },
        vmc_versioning: {
            options: {
                config_dir: '../config'
            },
            version: {
                files: {
                    // '../web/js': [
                    //     '../web/js/main.combo.min.js',
                    //     '../web/js/main.borrower_app.combo.min.js',
                    //     '../web/js/main.lender_app.combo.min.js'
                    // ],
                    // '../web/css': [
                    //     '../web/css/*.css'
                    // ],
                    '../web/images/aflu_main/': [
                        '/Users/VemeC/Desktop/*.{jpg,jpeg,gif,png}'
                    ]
                }
            }
        },
        watch: {
            sass: {
                files: ['../sass/scss/**/*.scss'],
                tasks: [
                    'compass',
                    'autoprefixer'
                ],
                options: {
                    spawn: false
                },
            },
            scripts: {
                files: ['../jssrc/**/*.js'],
                tasks: ['build-js'], // on change execute
                options: {
                    spawn: false,
                },
            },
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-watch');      // file watcher
    grunt.loadNpmTasks('grunt-contrib-concat');     // concat js files
    grunt.loadNpmTasks('grunt-contrib-uglify');     // minify js files
    grunt.loadNpmTasks('grunt-contrib-compass');    // compass compiler
    grunt.loadNpmTasks('grunt-contrib-jshint');     // Js lint
    grunt.loadNpmTasks('grunt-autoprefixer');       // autoprefixer css
    grunt.loadNpmTasks('grunt-contrib-imagemin');   // minify and optimize imgs
    grunt.loadNpmTasks('grunt-cssshrink');          // optimize css
    grunt.loadNpmTasks('grunt-contrib-clean');      // clean files or folders
    grunt.loadNpmTasks('grunt-vmc-versioning');     // version files

    // register tasks
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', []);

    // image optim
    grunt.registerTask('assets', ['vmc_versioning']);

    // clean files
    grunt.registerTask('clean-dev', ['clean:dev']);

    // build CSS
    grunt.registerTask('build-css', [
        'compass',
        'cssshrink',
        'autoprefixer'
    ]);

    // build JS
    grunt.registerTask('build-js', [
        'jshint',
        'uglify'
    ]);

    // build all the shit!
    grunt.registerTask('build-all', [
        'compass',
        'concat',
        'jshint',
        'uglify',
        'cssshrink',
        'autoprefixer'
    ]);

    // DEPLOY!!!
    grunt.registerTask('deploy', [
        'compass',
        'concat',
        'jshint',
        'uglify',
        'cssshrink',
        'autoprefixer',
        'vmc_versioning',
        'clean:prod'
    ]);

    // optimize imgs
    grunt.registerTask('imageoptim', ['imagemin']);

};