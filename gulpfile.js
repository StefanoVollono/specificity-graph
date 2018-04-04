'use strict';

var gulp          = require('gulp');
var del           = require('del');
var runSequence   = require('run-sequence');

var useref        = require('gulp-useref');
var gulpif        = require('gulp-if');
var uglify        = require('gulp-uglify');
var minifyCss     = require('gulp-clean-css');
var htmlmin       = require('gulp-htmlmin');


gulp.task('dist', function (callback) {
  runSequence('clean:github-page','useref', callback)
});


// Build dist
gulp.task('useref', function(){
  return gulp.src(['app/index.html'])
    .pipe(useref())
    .pipe(gulpif('*.html', htmlmin({collapseWhitespace: true, minifyJS:true, removeComments:true})))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('github-page'))
});





// clean dist folder
gulp.task('clean:github-page', function() {
  return del.sync('github-page');
});