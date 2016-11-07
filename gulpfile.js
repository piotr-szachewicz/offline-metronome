var gulp = require('gulp');
var connect = require('gulp-connect');

var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var es = require('event-stream');

gulp.task('js', function() {
  var files = ['worker.js', 'index.js'];

  var tasks = files.map(function(file) {
    return browserify('./src/js/' + file)
      .transform(babelify, { presets: ['es2015', 'react'] })
      .bundle()
      .pipe(source(file))
      .pipe(gulp.dest('./dist/js'))
  });

  es.merge.apply(null, tasks);
});

gulp.task('webserver', ['js'], function() {
  connect.server({root: 'dist'});
});

gulp.task('default', ['webserver']);