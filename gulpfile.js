'use strict';

var gulp          = require('gulp');
var useref        = require('gulp-useref');
var del           = require('del');
var runSequence   = require('run-sequence');


gulp.task('dist', function (callback) {
  runSequence('clean:github-page','useref', callback)
});


// Build dist
gulp.task('useref', function(){
  return gulp.src(['app/index.html'])
    .pipe(useref())
    .pipe(gulp.dest('github-page'))
});




// clean dist folder
gulp.task('clean:github-page', function() {
  return del.sync('github-page');
});