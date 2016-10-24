var gulp = require('gulp');
var connect = require('gulp-connect');

var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var es = require('event-stream');

gulp.task('webserver', function() {
  connect.server();
});

gulp.task('js', function() {
  var files = ['worker.js', 'index.js'];

  var tasks = files.map(function(file) {
    return browserify('./src/' + file)
      .transform(babelify, { presets: ['es2015', 'react'] })
      .bundle()
      .pipe(source(file))
      .pipe(gulp.dest('./build'))
  });

  es.merge.apply(null, tasks);
});

gulp.task('default', ['webserver']);