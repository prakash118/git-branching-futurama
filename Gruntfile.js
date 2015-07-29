module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					port: 3000,
					hostname: 'localhost',
					base: 'public'
				}
			}
		},

		copy: {
            main: {
                files:[
                    {
                        expand: true,
                        cwd: 'src/',
                        src: '*.*',
                        dest: 'public',
                    }      
                ],
            },
        },


		watch: {
			options: {
				spawn: false,
				livereload: true
			},
			html: {
                files: '/src/*.html'
            }
		}
		
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['copy', 'connect', 'watch']);

}