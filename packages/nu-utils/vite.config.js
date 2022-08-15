import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import nodeResolve from '@rollup/plugin-node-resolve';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';
import gzipPlugin from 'rollup-plugin-gzip';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'NuUtils',
      fileName: 'index',
    },
    rollupOptions: {
      plugins: [
        nodeResolve({
          browser: true,
          preferBuiltins: false,
        }),
        rollupNodePolyFill(),
        gzipPlugin(),
      ],
    },
  },
  plugins: [dts(), react()],
});
