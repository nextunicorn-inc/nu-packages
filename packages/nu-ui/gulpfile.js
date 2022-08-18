const path = require('path');
const merge2 = require('merge2');
const gulp = require('gulp');
const gulpTS = require('gulp-typescript');
const gulpBabel = require('gulp-babel');
const del = require('del');
const tsConfig = require('./tsconfig.json');
const getBabelConfig = require('./getBabelConfig');

gulp.task('cleanLib', function cleanLib() {
  return del(['lib/**/*']);
});

gulp.task('compileTSXForESM', function compileTSXForESM() {
  const tsStream = gulp
    .src(['**/*.tsx', '**/*.ts', '!**/node_modules/**/*.*', '!**/*.stories.*'])
    .pipe(
      gulpTS({
        ...tsConfig.compilerOptions,
        rootDir: path.join(__dirname, '..'),
      }),
    );
  const jsStream = tsStream.js
    .pipe(gulpBabel(getBabelConfig({ isESM: true })))
    .pipe(gulp.dest('lib/es'));

  return merge2([jsStream]);
});

gulp.task('compileTSXForCJS', function compileTSXForCJS() {
  const tsStream = gulp
    .src(['**/*.tsx', '**/*.ts', '!**/node_modules/**/*.*', '!**/*.stories.*'])
    .pipe(
      gulpTS({
        ...tsConfig.compilerOptions,
        rootDir: path.join(__dirname, '..'),
      }),
    );
  const jsStream = tsStream.js
    .pipe(gulpBabel(getBabelConfig({ isESM: false })))
    .pipe(gulp.dest('lib/cjs'));

  return merge2([jsStream]);
});

gulp.task(
  'compileLib',
  gulp.series(['cleanLib', gulp.parallel('compileTSXForESM', 'compileTSXForCJS')]),
);
