const path = require('path');
const merge2 = require('merge2');
const gulp = require('gulp');
const gulpTS = require('gulp-typescript');
const gulpBabel = require('gulp-babel');
const gulpDebug = require('gulp-debug');
const replace = require('gulp-replace');
const del = require('del');
const tsConfig = require('./tsconfig.json');
const getBabelConfig = require('./getBabelConfig');

gulp.task('cleanLib', function cleanLib() {
  return del(['lib/**/*']);
});

gulp.task('compileTSXForESM', function compileTSXForESM() {
  const tsStream = gulp
    .src(['**/*.tsx', '**/*.ts', '!**/node_modules/**/*.*', '!**/*.stories.tsx', '!_images/**'])
    .pipe(gulpDebug())
    .pipe(
      gulpTS({
        ...tsConfig.compilerOptions,
        rootDir: path.join(__dirname, '..'),
      }),
    );
  const jsStream = tsStream.js
    .pipe(gulpBabel(getBabelConfig({ isESM: true })))
    .pipe(gulp.dest('lib/es'));
  const dtsStream = tsStream.dts.pipe(gulp.dest('lib/es'));
  return merge2([jsStream, dtsStream]);
});

gulp.task('compileTSXForCJS', function compileTSXForCJS() {
  const tsStream = gulp
    .src(['**/*.tsx', '**/*.ts', '!**/node_modules/**/*.*', '!**/*.stories.tsx', '!_images/**'])
    .pipe(
      gulpTS({
        ...tsConfig.compilerOptions,
        rootDir: path.join(__dirname, '..'),
      }),
    );
  const jsStream = tsStream.js
    .pipe(gulpBabel(getBabelConfig({ isESM: false })))
    .pipe(gulp.dest('lib/cjs'));
  const dtsStream = tsStream.dts.pipe(gulp.dest('lib/cjs'));
  return merge2([jsStream, dtsStream]);
});

gulp.task(
  'compileLib',
  gulp.series(['cleanLib', gulp.parallel('compileTSXForESM', 'compileTSXForCJS')]),
);
