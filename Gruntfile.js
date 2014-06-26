module.exports = function (grunt) {

    require('jit-grunt')(grunt);

    grunt.initConfig({
        shell: {
            main: {
                command: 'bin/yield-test',
                options: {
                    stdout: true,
                    stderr: true,
                    failOnError: true
                }
            }
        },
        watch: {
            main: {
                options: {
                    atBegin: true
                },
                files: ['index.js', 'bin/yield-test'],
                tasks: ['shell:main']
            }
        }
    });

    grunt.registerTask('default', ['shell:main']);

};
