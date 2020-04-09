module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      src: "dist/"
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        removeComments: true
      },
      files: {
        src: './dist/index.html',
        dest: 'dist/index.html'
      }
    },
    usemin: {
      html: ['./dist/index.html']
    },
    uglify: {
      'dist/build.min.js': 'dist/index.js'
    },
    cssmin: {
      'dist/build.min.css': 'dist/index.css'
    },
    copy: {
      html: {
        src: './index.html',
        dest: 'dist/index.html'
      }
    },
    concat: {
      js: {
        src: ['js/*.js', './com/**/*.js'],
        dest: 'dist/index.js'
      },
      css: {
        src: ['css/*.css', './com/**/*.css'],
        dest: 'dist/index.css'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('default', ['clean', 'copy:html', 'concat','uglify','usemin', 'cssmin', 'htmlmin']);
}