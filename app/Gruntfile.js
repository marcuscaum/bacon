path = require('path');


module.exports = function(grunt){
	grunt.initConfig({
		stylus: {
			compile: {
				options: {
					compress: false,
					linenos: true
				},	
				files: {
					'www/css/home.min.css': 'styl/home.styl', 
				}
			}
		},
		htmlmin: {                                      
			dist: {                                      
				options: {                                 
					removeComments: true,
					collapseWhitespace: true
				},
				files: {                                   
					'www/index.html': 'index.html',    
				}
			},
		},
	    imagemin: {   
	    	dynamic: {                                     
				files: [{
					expand: true,                  
					cwd: 'img/',                   
					src: ['**/*.{png,jpg,gif}'],   
					dest: 'www/img/'                  
				}]
			}
	    },
	    uglify:{
			options: {
		  		mangle: false
			},
			my_target: {
				files: {
					'www/js/app/main.js': ['js/app/main.js'],
					'www/js/app.js': ['js/app.js'],
					'www/js/lib/require.js': ['js/lib/require.js'],
					'www/js/lib/jquery.js': ['js/lib/jquery.js'],
					'www/js/lib/smoothscroll.js': ['js/lib/smoothscroll.js'],
				}
			}	
	    },
		watch: {
			options:{livereload:true},
			stylus:{
				files:'styl/*.styl',
				tasks: 'stylus'
			},
			htmlmin:{
				files:'*.html',
				tasks:'htmlmin'
			},
			uglify:{
				files:'js/**/*.js',
				tasks:['uglify', 'requirejs']
			},
			imagemin:{
				files:['img/*.png', 'img/*.jpg'],
				tasks:'imagemin'
			}
		},
		express:{
			all:{
				options:{
					port:8000,
					hostname:'localhost',
					bases:'www/',
					livereload:true
				}

			}
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: "js/lib",
					mainConfigFile: "js/app.js",
					name: "app", 
					out: "www/js/dist.js",
					optimize: 'none'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('default', ['stylus', 'uglify','htmlmin', 'imagemin', 'watch']);
	grunt.registerTask('server', ['express',  'watch']);


}