const path = require('path');
const { Buffer } = require('buffer');
const through2 = require('through2');
const merge2 = require('merge2');
const gulp = require('gulp');
const gulpTS = require('gulp-typescript');
const gulpBabel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const replace = require('gulp-replace');
const del = require('del');
const tsConfig = require('./tsconfig.json');
const getBabelConfig = require('./getBabelConfig');

gulp.task('cleanLib', function cleanLib() {
  return del(['lib/**/*']);
});

gulp.task('compileTSXForESM', function compileTSXForESM() {
  const tsStream = gulp
    .src(['**/*.tsx', '**/*.ts', '!**/node_modules/**/*.*', '!**/_story/**/*.*'])
    .pipe(
      gulpTS({
        ...tsConfig.compilerOptions,
        rootDir: path.join(__dirname, '..'),
      }),
    );
  const jsStream = tsStream.js
    .pipe(gulpBabel(getBabelConfig({ isESM: true })))
    .pipe(replace(/(import\s+)['"]([^'"]+)(\.scss)['"]/g, "$1'$2.css'"))
    .pipe(gulp.dest('lib/es'));
  const dtsStream = tsStream.dts
    .pipe(replace(/(import\s+)['"]([^'"]+)(\.scss)['"]/g, "$1'$2.css'"))
    .pipe(gulp.dest('lib/es'));
  return merge2([jsStream, dtsStream]);
});

gulp.task('compileTSXForCJS', function compileTSXForCJS() {
  const tsStream = gulp
    .src(['**/*.tsx', '**/*.ts', '!**/node_modules/**/*.*', '!**/_story/**/*.*'])
    .pipe(
      gulpTS({
        ...tsConfig.compilerOptions,
        rootDir: path.join(__dirname, '..'),
      }),
    );
  const jsStream = tsStream.js
    .pipe(gulpBabel(getBabelConfig({ isESM: false })))
    .pipe(replace(/(require\(['"])([^'"]+)(\.scss)(['"]\))/g, '$1$2.css$4'))
    .pipe(gulp.dest('lib/cjs'));
  const dtsStream = tsStream.dts
    .pipe(replace(/(import\s+)['"]([^'"]+)(\.scss)['"]/g, "$1'$2.css'"))
    .pipe(gulp.dest('lib/cjs'));
  return merge2([jsStream, dtsStream]);
});

gulp.task(
  'compileLib',
  gulp.series(['cleanLib', gulp.parallel('compileTSXForESM', 'compileTSXForCJS')]),
);
