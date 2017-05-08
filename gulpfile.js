const gulp = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const util = require('gulp-util');
const typescript = require('gulp-typescript');
const tsconfig = require('./tsconfig.json');

/////////////////////////////////////////////////////
// Tasks
gulp.task('clean', function() {
  return del('dist/**/*');
});

gulp.task('build', ['copy:assets'], function() {
  log('Start building typescript files...');
  return gulp.src(tsconfig.files)
    .pipe(sourcemaps.init())
    .pipe(typescript(tsconfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('copy:assets', function() {
  return gulp.src([
    'app/*/*', 
    'index.html', 
    'styles.css',
    'systemjs.config.js',
    '!app/**/*.ts'], { base: './'})
    .pipe(gulp.dest('dist'));
});

gulp.task('copy:libs', ['clean'], function() {
  return gulp.src('node_modules/**/*.*', { base: 'node_modules' })
    .pipe(gulp.dest('./dist/node_modules'));
});

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
