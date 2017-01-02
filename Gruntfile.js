module.exports  = function(grunt) {

  /* =======================================
   * Configuração dos packages.
   * ======================================= */

  grunt.initConfig({
    // Uglify
    uglify: {
      js: {
        files: {
          'library/js/master.min.js': [
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'library/js/*.js'
          ]
        }
      }
    },

    // Imagemin
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'library/src/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'library/src/'
        }]
      }
    },

    // Express
    express: {
      livereload: {
        options: {
          bases: ['command/*'],
          livereload: true,
          open: 'http://localhost/automato-boilerplate'
        }
      }
    },

  	// Watch
  	watch: {
      livereload: {
        options: {
          livereload: true,
          spawn: false
        },

        files: ['library/less/master.css', '*.html'],
        tasks: ['start']
      }
  	}
  });

  /* =======================================
   * Autoriza plugins com o comando "grunt".
   * ======================================= */

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-watch');

  /* ===============================
   * Registra as tarefas
   * =============================== */

  // Default: necessita que o comando seja passado via command line
  grunt.registerTask('default', ['uglify', 'imagemin']);

  // Start: as tasks são acionadas automaticamente quando o comando "start" é usado
  // Também atualiza a página automaticamente
  grunt.registerTask('start', ['express', 'watch']);
};
