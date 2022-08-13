import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'index.ts',
      name: 'NuTypes',
      fileName: 'nu-types',
    },
  },
  plugins: [dts()],
});
