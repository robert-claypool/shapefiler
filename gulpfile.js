'use strict';

var gulp = require('gulp');
var html5Lint = require('gulp-html5-lint');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
// var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

gulp.task('html5-lint', function() {
    return gulp.src('*.html')
        .pipe(html5Lint());
});

gulp.task('js', function() {
    var b = browserify({
        entries: './app.js',
        debug: true
    });

    return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', ['html5-lint', 'js']);
