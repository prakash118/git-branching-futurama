module.exports = function(grunt) {

    grunt.initConfig({

        copy: {
            options: {},
            files: {
                'public': ['src/index.html'],
            },
        },

        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    bases: 'public', 
                    livereload: true
                }
            }
        },

        watch: {
            all: {
                files: 'src/index.html',
                options: {
                    livereload: true
                }
            }
        },

        open: {
            all: {
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        }
    });

    grunt.loadNpmTasks('grunt-copy');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('server', [
        'express',
        'open',
        'watch'
        ]);
};