module.exports = function(grunt) {

  var webp = require('imagemin-webp');

  grunt.initConfig({
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
    },

    cssmin: {
      merge: {
        files: {
          'css/merged.css': ['css/style.css',
                             'css/responsive.css']
        }
      },
      minify: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    }

  });

grunt.loadNpmTasks('grunt-webp');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-imagemin');

};