'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var html5Lint = require('gulp-html5-lint');

gulp.task('html5-lint', function() {
    return gulp.src('*.html')
        .pipe(html5Lint());
});

gulp.task('default', ['html5-lint']);
