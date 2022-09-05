import typescript from '@rollup/plugin-typescript';
import externals from 'rollup-plugin-node-externals';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        exports: 'named',
        file: pkg.main,
        format: 'cjs',
      },
      {
        exports: 'named',
        file: pkg.module,
        format: 'esm',
      },
    ],
    plugins: [
      commonjs(),
      typescript({
        target: 'ES2019',
      }),
      externals({
        packagePath: './package.json',
        deps: true,
        peerDeps: true,
        optDeps: true,
        devDeps: true,
      }),
      terser(),
    ],
  },
];
