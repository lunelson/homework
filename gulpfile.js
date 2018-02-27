'use strict';

const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const diff = require('gulp-diff');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');

const testDest = './test';
const testGlob = './test/**/*.scss';
const sassIncl = path.join(__dirname, 'node_modules');

gulp.task('work', function () {
  return watch(testGlob, { ignoreInitial: true })
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: [sassIncl]
    }).on('error', sass.logError))
    .pipe(gulp.dest(testDest));
});

gulp.task('test', function(){
  return gulp.src(testGlob)
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: [sassIncl]
    }).on('error', sass.logError))
    .pipe(rename({extname: '.css'}))
    .pipe(diff())
    .pipe(diff.reporter({ fail: true }));
});
