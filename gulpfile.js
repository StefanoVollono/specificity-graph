'use strict';

var gulp          = require('gulp');
var del           = require('del');

var useref        = require('gulp-useref');
var gulpif        = require('gulp-if');
var uglify        = require('gulp-uglify');
var minifyCss     = require('gulp-clean-css');
var htmlmin       = require('gulp-htmlmin');


// Build dist
function optimizeAssets() {
  return gulp
    .src(['app/index.html'])
    .pipe(useref())
    .pipe(gulpif('*.html', htmlmin({collapseWhitespace: true, minifyJS:true, removeComments:true})))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('github-page'))
};

// clean dist folder
function clean() {
  del('github-page');
}

const dist = gulp.series(optimizeAssets);
exports.dist  = dist;