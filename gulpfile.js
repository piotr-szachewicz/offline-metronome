var gulp = require('gulp');
var connect = require('gulp-connect');

var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var es = require('event-stream');

gulp.task('js', function() {
  var files = ['js/worker.js', 'js/index.js', 'sw.js'];

  var tasks = files.map(function(file) {
    return browserify('./src/' + file)
      .transform(babelify, { presets: ['es2015', 'react'] })
      .bundle()
      .pipe(source(file))
      .pipe(gulp.dest('./dist/'))
  });

  es.merge.apply(null, tasks);
});

gulp.task('css', function() {
  return gulp
    .src(['node_modules/bootstrap/dist/css/bootstrap.min.css', 'src/css/style.css'])
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('other_files', function() {
  return gulp
    .src(['src/index.html', 'src/click.mp3'])
    .pipe(gulp.dest('dist/'));
});

gulp.task('webserver', ['js', 'css', 'other_files'], function() {
  connect.server({root: 'dist'});
});

gulp.task('default', ['webserver']);
