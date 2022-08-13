import { babel } from '@rollup/plugin-babel';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import svgr from '@svgr/rollup';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';

export default [
  {
    input: './src/index.tsx',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        skipPreflightCheck: true,
        extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
      }),
      external(),
      resolve(),
      typescript({
        tsconfig: 'tsconfig.json',
      }),
      terser(),
      svgr(),
      image(),
    ],
  },
];
