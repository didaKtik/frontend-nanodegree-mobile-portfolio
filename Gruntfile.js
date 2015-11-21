module.exports = function(grunt) {

  var webp = require('imagemin-webp');

  grunt.initConfig({
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'index-dev.html'     // 'destination': 'source'
        }
      }
    },

    cssmin: {
      minify: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },

    webp: {
      files: {
        expand: true,
        cwd: 'img/',
        src: '*.{png,jpg}',
        dest: 'img/'
      },
      options: {
        quality: 100
      }
    },

    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 5,     // .png
          use: [webp()]  // plugins
        },
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,webp}'],
          dest: 'img/'
        }]
      }
    }

  });

grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-webp');
grunt.loadNpmTasks('grunt-contrib-imagemin');


};