module.exports = function(grunt){
  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: './',
          port: '4000',
          host: '*'
        }
      }
    },
    watch: {

    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'watch']);
};