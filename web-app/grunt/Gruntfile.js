/*!
 * EsUnGol's Gruntfile
 * http://www.esungol.com
 * Copyright 2013-2014 EsUnGol.
 */

// grunt wrapper
module.exports = function(grunt) {

    // init config
    grunt.initConfig({
        // read package.json
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            vendors: {
                src: [
                    '../assets/js/vendor/eug-jquery.js',
                ],
                dest: '../web/js/main.vendors.js' // merged file
            },
            prop: {
                src: [
                    '../assets/js/eug/eug-fblogin.js'
                ],
                dest: '../web/js/main.prop.js' // merged file
            },
            both: {
                src: [
                    '<%= concat.vendors.dest %>',
                    '<%= concat.prop.dest %>'
                ],
                dest: '../web/js/main.js' // merged file
            }
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                '-W083': true // Don't make functions within a loop.
                //"-W041": false // Use '!==' to compare with 'null'
            },
            beforeconcat: [
                '<%= concat.prop.src %>'
            ]
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                },
                sourceMap: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
                report: 'gzip'
            },
            scripts: {
                files: {
                    '../web/js/main.min.js': ['<%= concat.both.dest %>'] // output file.
                }
            }
        },
        clean: {
            options: {
                force: true
            },
            dev: {
                src: [
                    '<%= concat.vendors.dest %>',
                    '<%= concat.prop.dest %>'
                ]
            },
            prod: {
                src: [
                    '<%= concat.vendors.dest %>',
                    '<%= concat.prop.dest %>'
                ]
            }
        },
        compass: {
            css: {
                options: {
                    outputStyle: 'compressed', // nested / expanded / compact / compressed
                    sassDir: '../assets/sass/scss/',
                    cssDir: '../web/css/',
                    imagesDir: '../web/images/',
                    noLineComments: true,
                    cacheDir: '../assets/sass/.sass-cache/'
                }
            }
        },
        cssshrink: {
            css: {
                files: {
                    '../web/css/': ['../web/css/*.css']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: [
                    'Android >= 4',
                    'Chrome >= 30',
                    'Firefox >= 30',
                    'Explorer >= 8',
                    'iOS >= 6',
                    'Safari >= 6'
                ]
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: '../web/css/*.css',
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
                    cwd: '../assets/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '../assets/images/'
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
                    //     '<%= concat.both.dest %>'
                    // ],
                    // '../web/css': [
                    //     '../web/css/*.css'
                    // ],
                    '../web/images': [
                        '../assets/images/*.{png,jpg,gif}'
                    ]
                }
            }
        },
        watch: {
            sass: {
                files: ['../assets/sass/scss/**/*.scss'],
                tasks: ['compass', 'cssshrink', 'autoprefixer'], // on change execute
                options: {
                    spawn: false
                },
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['../web/css/*.css'],
            },
            scripts: {
                files: ['../assets/js/**/*.js'],
                tasks: ['build-js'], // on change execute
                options: {
                    spawn: false,
                },
            },
            images: {
                files: ['../assets/images/*.{png,jpg,gif}'],
                tasks: ['imageoptim','versioning'],
                options: {
                    spawn: false,
                },
            }
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
    grunt.registerTask('build-css', ['compass', 'cssshrink', 'autoprefixer']);
    grunt.registerTask('build-js', ['concat', 'jshint', 'uglify', 'clean:dev']);
    grunt.registerTask('build-all', ['concat', 'jshint', 'uglify', 'compass', 'cssshrink', 'autoprefixer', 'clean:dev']);
    grunt.registerTask('deploy', ['concat', 'jshint', 'uglify', 'compass', 'cssshrink', 'autoprefixer', 'vmc_versioning', 'clean:prod']);

    // optimize imgs
    grunt.registerTask('imageoptim', ['imagemin']);

    // optimize imgs
    grunt.registerTask('versioning', ['vmc_versioning']);

};