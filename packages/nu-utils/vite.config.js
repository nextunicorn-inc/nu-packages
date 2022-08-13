import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import nodeResolve from   "@rollup/plugin-node-resolve";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
import gzipPlugin from 'rollup-plugin-gzip'
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'NuUtils',
      fileName: 'nu-utils',
    },
    rollupOptions: {
      plugins: [
        nodeResolve({
          browser: true,
          preferBuiltins: false,
        }),
        rollupNodePolyFill(),
        gzipPlugin(),
        commonjs(),
      ],
    },
  },
  plugins: [dts(),react()],
});
