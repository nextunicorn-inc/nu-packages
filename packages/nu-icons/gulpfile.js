const path = require('path');
const gulp = require('gulp');
const merge2 = require('merge2');
const gulpBabel = require('gulp-babel');
const gulpTS = require('gulp-typescript');
const del = require('del');
const tsConfig = require('./tsconfig.json');
const getBabelConfig = require('./getBabelConfig');

gulp.task('cleanLib', () => del(['lib/**/*']));

function compileTSX(isESM) {
  const targetDir = isESM ? 'lib/es' : 'lib/cjs';

  const tsStream = gulp.src(['src/**/*.tsx', 'src/**/*.ts']).pipe(
    gulpTS({
      ...tsConfig.compilerOptions,
      rootDir: path.join(__dirname, '..'),
    }),
  );

  const jsStream = tsStream.js
    .pipe(gulpBabel(getBabelConfig({ isESM })))
    .pipe(gulp.dest(targetDir));

  const dtsStream = tsStream.dts.pipe(gulp.dest(targetDir));

  return merge2([jsStream, dtsStream]);
}

gulp.task('compileTSXForESM', () => compileTSX(true));

gulp.task('compileTSXForCJS', () => compileTSX(false));

gulp.task(
  'compileLib',
  gulp.series(['cleanLib', gulp.parallel('compileTSXForESM', 'compileTSXForCJS')]),
);
