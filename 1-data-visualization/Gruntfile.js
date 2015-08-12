module.exports = function(grunt) {

grunt.initConfig({ pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    sourcemap: 'auto',
                    style: 'expanded'
                },
                files: {
                    'css/graphstyles.css': 'css/graphstyles.scss'
                }
            }
        },
        svgmin: {
            options: {
                plugins: [
                    { removeViewBox: false },
                    { removeUselessStrokeAndFill: false }
                ]
            },
            dist: {
                expand: true,
                cwd: 'svgicons/raw',
                src: ['*.svg'],
                dest: 'svgicons/compressed',
                ext: '.comp.svg'
            }
        },
        watch: {
            options: {

            },
            css: {
                files: ['css/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    grunt.registerTask('default', ['sass', 'svgmin', 'watch']);

};



















