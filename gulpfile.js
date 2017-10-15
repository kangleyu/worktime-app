'use strict';

const gulp = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const util = require('gulp-util');
const typescript = require('gulp-typescript');
const tsconfig = require('./tsconfig.json');
const npmconfig = require('./package.json');

/////////////////////////////////////////////////////
// Tasks
gulp.task('clean', function() {
  return del('build/**/*');
});

gulp.task('build', ['copy:assets', 'copy:mocks'], function() {
  log('Start building typescript files...');
  return gulp.src(tsconfig.files)
    .pipe(sourcemaps.init())
    .pipe(typescript(tsconfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/app'));
});

gulp.task('copy:assets', function() {
  return gulp.src([
    '!app/**/*.ts',
    'app/**/*.*', 
    'index.html', 
    'favicon.ico',
    'loader.gif',
    'spinner.gif',
    'styles.css',
    'systemjs.config.js',
    '!app/**/*.ts'], { base: './'})
    .pipe(gulp.dest('build'));
});

gulp.task('copy:mocks', function() {
  return gulp.src([
    'mock.css',
    'mock.html'
  ], { base: './'})
  .pipe(gulp.dest('build/'));
});

gulp.task('copy:libs', ['clean'], function() {
  var modules = Object.keys(npmconfig.dependencies);
  var files = modules.map(function(module) {
    return 'node_modules/' + module + '/**/*.*';
  });
  return gulp.src(files, { base: 'node_modules' })
    .pipe(gulp.dest('./build/node_modules'));
});

gulp.task('watch', function() {
  return gulp.watch([
    './app/**/*.ts',
    './app/**/*.html',
    './app/**/*.css',
    './app/**/*.json',
    './index.html',
    './styles.css',
    './systemjs.config.js',
    './favicon.icon',
    './mock.html',
    './mock.css'
    ], ['build']);
})

/////////////////////////////////////////////////////
// Help Functions
function log(msg) {
  if (typeof(msg) === 'object') {
    for (let item in msg) {
      if (msg.hasOwnProperty(item)) {
        util.log(util.colors.green(msg[item]));
      }
    }
  } else {
    util.log(util.colors.green(msg));
  }
}
