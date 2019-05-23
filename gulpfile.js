'use strict';

const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const diff = require('gulp-diff');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');

const sassIncl = path.join(__dirname, 'node_modules');

/*
  gulp 4
  https://github.com/gulpjs/gulp
*/

function work() {
  return gulp.src('./test/legacy/*.scss')
    .pipe(plumber(sass.logError))
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: [sassIncl]
    }))
    .pipe(gulp.dest('./test'));
}

function test() {
  return gulp.src('./test/legacy/*.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: [sassIncl]
    }).on('error', sass.logError))
    .pipe(rename({
      extname: '.css'
    }))
    .pipe(diff())
    .pipe(diff.reporter({
      fail: true
    }));
}

function watch() {
  return gulp.watch('./**/*.scss', work);
}

gulp.task('test', test);
gulp.task('work', work);
gulp.task('default', watch);
