module.exports = function (grunt) {
  //  Load all modules.
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-contrib-*', 'grunt-*']});
  // Control variables
    var app = {
      // Refresh server if any of these files changes.
      toReloadFiles : [
        'gruntfile.js',
        'public/index.htm'
      ],
      isLivereload : true
    };
  // Settings.
  grunt.initConfig({
    express: {
      options: {
        livereload: app.isLivereload,
        nospawn: app.isLivereload // to reload express.
      },
      tasks: ['express:dev'],
      dev: {
        options: {
          script: 'server/bin/www',
        }
      }
    },
    watch: {
      // watch for change and reload.
      livereload: {
        files: app.toReloadFiles,
        options: {
          livereload: app.isLivereload,
          nospawn: app.isLivereload // to reload express.
        }
      },
    }
  });

  // Register Tasks
  grunt.registerTask('serve', function() {grunt.task.run(
    ['express:dev','watch']);
  });
};