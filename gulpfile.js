'use strict';

const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const diff = require('gulp-diff');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');

const sassIncl = path.join(__dirname, 'node_modules');

gulp.task('work', function () {
  return gulp.src('./test/**/*.scss')
    .pipe(plumber(sass.logError))
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: [sassIncl]
    }))
    .pipe(gulp.dest('./test'));
});

gulp.task('test', function(){
  return gulp.src('./test/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: [sassIncl]
    }).on('error', sass.logError))
    .pipe(rename({extname: '.css'}))
    .pipe(diff())
    .pipe(diff.reporter({ fail: true }));
});

gulp.task('default', function () {
  return gulp.watch('./**/*.scss', ['work']);
});
