var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

// task for building .ts file into .js files
gulp.task('build', function() {
  var tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('./dist'));
});

// task for copying all *.html files to views folder
var sourceHtmlFiles = ['app/**/*.html'];
var sourceStyleFiles = ['app/**/*.css'];
var assetsFiles = ['app/shared/assets/**/*'];
var dataFiles = ['app/shared/data/*.json'];
var destination = 'static/';

gulp.task('copy-htmls', function() {
  return gulp.src(sourceHtmlFiles).pipe(gulp.dest(destination));
});
gulp.task('copy-styles', function() {
  return gulp.src(sourceStyleFiles).pipe(gulp.dest(destination + 'css/'));
});
gulp.task('copy-assets', function() {
  return gulp.src(assetsFiles).pipe(gulp.dest(destination + 'assets/'));
});
gulp.task('copy-data', function() {
  return gulp.src(dataFiles).pipe(gulp.dest(destination + 'data/'));
});

// watch task for monitoring any *.ts file changes
gulp.task('watch', function() {
  gulp.watch([
    './**/*.ts',
    './**/*.html',
    './**/*.css',
    './**/*.json'
  ], [
    'build',
    'copy-htmls',
    'copy-styles',
    'copy-assets',
    'copy-data'
  ])
});

/////////////////////////////////////////////////////
function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.green(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.green(msg));
  }
}
