var gulp = require('gulp');
var args = require('yargs').argv;
var browserSync = require('browser-sync');
var del = require('del');
var path = require('path');
var _ = require('lodash');
var $ = require('gulp-load-plugins')({ lazy: true });
var config = require('./gulp.config')();

var tsProject = $.typescript.createProject('tsconfig.json');

var port = process.env.PORT || config.defaultPort;

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('build', function() {
  console.log('building typescripts...');
  var tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest(config.build));
});

gulp.task('copy-htmls', function() {
  console.log('copying htmls to build folder...');
  return gulp.src(config.htmls)
    .pipe(gulp.dest(config.build));
});

gulp.task('copy-js', function() {
  console.log('copying required js files to build folder...');
  return gulp.src(config.systemjs)
    .pipe(gulp.dest(config.build));
});

gulp.task('watch', ['build'], function() {
  gulp.watch([
    config.tsFiles, 
    config.htmls, 
    config.styles, 
    config.jsons, 
    config.systemjs], [
    'build',
    'copy-htmls',
    'copy-js'
  ])
})

gulp.task('serve-dev', ['build', 'copy-htmls', 'copy-js'], function() {
  var nodeOptions = {
    script: config.nodeServer,
    deplayTime: 1,
    env: {
      'PORT': 8010,
      'NODE_ENV': 'dev'
    },
    watch: [config.app]
  };

  return $.nodemon(nodeOptions)
    .on('restart', function(ev) {
      log('*** nodemon restarted ***');
      log('files changed on restart: \n' + ev);
    })
    .on('start', function() {
      log('*** nodemon started ***');
    })
    .on('crash', function() {
      log('*** nodemon crashed: script crashed for some reason ***');
    })
    .on('exit', function() {
      log('*** nodemon exited cleanly ***');
    });
});

////////
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