/*
  new GULP sass snapshotting approach

  https://www.npmjs.com/package/gulp-error
  https://www.npmjs.com/package/gulp-error-handle
  https://www.npmjs.com/package/gulp-confirm
  https://www.npmjs.com/package/gulp-prompt
  https://github.com/geejs/gulp-tap/wiki
  https://github.com/Freyskeyd/gulp-prompt
  https://www.npmjs.com/package/gulp-if-else
  https://github.com/nfroidure/gulp-cond
  https://github.com/robrich/gulp-if
  https://medium.com/@boriscoder/catching-errors-on-gulp-js-4682eee2669f
  https://github.com/OverZealous/lazypipe
  https://github.com/nfroidure/gulp-cond



*/

'use strict';

const path = require('path');
// const gulp = require('gulp');
const sass = require('gulp-sass');
const diff = require('gulp-diff');
const rename = require('gulp-rename');
// const plumber = require('gulp-plumber');

const includePaths = [path.join(__dirname, 'node_modules')];
const sassOptions = { includePaths, outputStyle: 'expanded' };

const { src, dest, watch } = require('gulp');

/*
  gulp 4
  https://github.com/gulpjs/gulp
*/

const srcGlob = './tests/*.scss';

function render(srcFile = srcGlob) {
  return src(srcFile)
    // .pipe(plumber(sass.logError))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(dest('./test'));
}

function compare(srcFile = srcGlob) {
  return src(srcFile)
    // .pipe(plumber(sass.logError))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(rename({extname: '.css'}))
    .pipe(diff())
    .pipe(diff.reporter({ fail: true }));
}

/*
  watching
    create a Map of errors, per file
    on change -> task
    - errorHandler, should put errors in the Map
    - sass render
    - diff, which will throw error if problem
    - condition/prompt
      - does error exist, if so, ask to re-render
      - re-render snapshot if confirmed
*/

exports.render = render;
exports.compare = compare;

exports.default = function() {
  const watcher = watch(srcGlob, { ignoreInitial: false });
  watcher.on('add', file => {
    // if comparison file exists, compare; otherwise render
    // render(file);
    fail(file);
  });
  watcher.on('change', file => {
    // compare
    compare(file);
  });
  return watcher;
};
