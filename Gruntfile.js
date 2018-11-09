module.exports = function (grunt) {
	'use strict';

	var dirWeb = 'www/inc/',
		jsDevFiles =  dirWeb + 'js/**/*.js',
		allFiles = 'www/**/*';

	var connectSSI = require('connect-ssi');

	// Configuring Grunt modules
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		/* Watch for changes in the JS files
		 *  See: https://github.com/gruntjs/grunt-contrib-watch
		 * */
		watch: {
			sass: {
				files: dirWeb + 'scss/**/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true,
					spawn: false
				}
			},
			js: {
				files: jsDevFiles,
				tasks: ['concat'],
				options: {
					livereload: true,
					spawn: false
				}
			}
		},

		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [
					dirWeb + 'bower_components/jquery/dist/jquery.min.js',
					dirWeb + 'bower_components/slick-carousel/slick/slick.min.js',
					dirWeb + 'bower_components/featherlight/release/featherlight.min.js',
					dirWeb + 'js/src/**/*.js'
				],
				dest: dirWeb + 'js/main.js'
			}
		},

		connect: {
			local: {
			  options: {
				port: 7910,
				hostname: '*',
				base: 'www',
				livereload: false,
				open: true,
				middleware: function(connect, options, middlewares) {
					if (!Array.isArray(options.base)) {
						options.base = [options.base];
					}
					var directory = options.directory || options.base[options.base.length - 1];

					middlewares.unshift(connectSSI({
						baseDir: directory,
						ext: '.html'
					}));
					return middlewares;
				}
			  }
			}
		},

		uglify: {
			dist: {
				files: {
					'www/inc/js/main.min.js': [dirWeb + 'js/main.js']
				}
			}
		},

		sass: {
			dist: {
				src: dirWeb + 'scss/main.scss',
				dest: dirWeb + 'css/main.css'
			}
		},

		cssmin: {
			options: {
				//mergeIntoShorthands: false
				keepSpecialComments: 0 //delete comments

			},
			target: {
				files: {
					'www/inc/css/main.min.css': [dirWeb + 'css/main.css']
				}
			}
		}

	}); //End grunt.initConfig

	/*
	 * Loading modules
	 * */
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('local', ['connect:local','watch']);
	grunt.registerTask('prod', ['sass', 'cssmin', 'concat', 'uglify']);

};
