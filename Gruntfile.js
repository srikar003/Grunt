// configures our tasks and tells plugins where to find certain files
// load plugins into the file(e.g. uglify)
// Register tasks which need to be ran

// module.exports = (grunt)=>{
//     //configuration
//     grunt.initConfig({
//         //pass in options to plugins, references to files etc..
//     });
//     //load plugins
//     // grunt.loadNpmTasks('uglify');

//     //register tasks
//     grunt.registerTask('run',()=>{
//         console.log('i am running');
//     });

//     grunt.registerTask('sleep',()=>{
//         console.log('i am sleeping');
//     });

//     grunt.registerTask('all',['sleep','run']);
// }; 

module.exports = (grunt) => {
    grunt.initConfig({
        //configuration
        concat: {
            json: {
                src: ['../javascript/jquery-1.12.4.js'],
                dest: '../data/gruntData/data.js'
            },
            css: {
                src: ['../css/*.css'],
                dest: '../css/concat.css'
            }
        },
        Sass: {
            build: {
                src: ['../css/sass/styles.scss'],
                dest: '../css/styles.css'
            }
        },
        uglify: {
            build: {
                src: ['../data/gruntData/data.js'],
                dest: '../data/gruntData/uglifiedData.js'
            }
        }
    });

    //load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    //register tasks
    grunt.registerTask('concat-json', ['concat:json']);
    grunt.registerTask('concat-css', ['concat:css']);
    grunt.registerTask('build-sass',['sass:build']);
    grunt.registerTask('build-uglify',['uglify:build']);
}